import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/styles";
import ProfileComponent from "./components/profile/ProfileComponent";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div id="glass-overlay">
        <ProfileComponent />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
