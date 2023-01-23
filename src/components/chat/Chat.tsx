import React, { useEffect, useRef, useState } from "react";
import {
  addDoc,
  serverTimestamp,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import "./Chat.scss";
import Signout from "../signout/Signout";
const MESSAGES_COLLECTION_NAME: string = "messages";

const Chat = ({ roomName }: any) => {
  const messageRef: any = useRef(null);
  const scrollRef: any = useRef(null);
  const messagesCollectionRef: any = collection(db, MESSAGES_COLLECTION_NAME);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const queryMessages = query(
      messagesCollectionRef,
      where("room", "==", roomName),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(queryMessages, (snapshot: any) => {
      let messagesFromDB: any = [];
      snapshot.forEach((doc: any) => {
        messagesFromDB.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesFromDB);
      scrollToBottom();
    });

    return () => unsubscribe();
  }, []);

  const addMessage = async () => {
    if (messageRef.current.value === null) {
      return;
    }
    await addDoc(messagesCollectionRef, {
      text: messageRef.current.value,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
      room: roomName,
    });
    messageRef.current.value = null;
    scrollToBottom();
  };

  const scrollToBottom = () => {
    setTimeout(() => scrollRef.current?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <>
      <div className="chat-container">
        <div className="title">
          <span className="text-bold">ROOM: </span>
          {roomName}
        </div>
        <div className="data-input-container">
          <div className="data-container">
            {messages &&
              messages.map((message: any) => (
                <div
                  className={
                    "text-message  " +
                    (message.user === auth.currentUser?.displayName
                      ? "text-align-right"
                      : "")
                  }
                  key={message.id}
                >
                  <span className="text-bold">{message.user + ": "}</span>
                  {message.text}
                </div>
              ))}
            <div ref={scrollRef}></div>
          </div>
          <div className="input-btn-container">
            <input
              className="chat-input"
              placeholder="Type your message here..."
              ref={messageRef}
            />
            <button className="chat-submit-btn" onClick={addMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
      <Signout />
    </>
  );
};

export default Chat;
