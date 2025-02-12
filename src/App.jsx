import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/styles";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div id="glass-overlay">
        <ProfileComponent />
      </div>
      {/* <Notification message={messages} /> */}
      {/* 
      <p>Status: {connectionStatus}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button> */}
      <Outlet />
    </div>
  );
}

export default App;
