import React, { useRef, useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const inputRef = useRef();

  const handleLogin = () => {
    setName(inputRef.current.value);
    setLoggedIn(true);
  };

  return (
    <>
      {loggedIn ? (
        <h1>Welcome {name}</h1>
      ) : (
        <>
        <form class="container">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your name"
          />
          <button onClick={handleLogin}>
            Login
          </button>
          </form>
        </>
      )}
    </>
  );
}

export default App;
