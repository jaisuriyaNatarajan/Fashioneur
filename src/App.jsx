import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/styles";
import ProfileComponent from "./components/profile/ProfileComponent";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ProfileComponent />
      <Outlet />
    </div>
  );
}

export default App;
