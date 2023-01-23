import { useRef, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Auth from "./components/auth/Auth";
import Room from "./components/room/Room";
import Chat from "./components/chat/Chat";

function App() {
  const [isAuth, setIsAuth] = useState(sessionStorage.getItem("auth-token"));
  const [room, setRoom] = useState(null);
  const roomRef: any = useRef(null);

  const setRoomValue = () => {
    setRoom(roomRef.current.value);
  };
  if (!isAuth) {
    return (
      <>
        <Header />
        <Auth setIsAuth={setIsAuth} />
      </>
    );
  }
  return (
    <div className="App">
      <Header />

      {room ? (
        <Chat roomName={room} />
      ) : (
        <Room setRoom={setRoomValue} roomRef={roomRef} />
      )}
    </div>
  );
}

export default App;
