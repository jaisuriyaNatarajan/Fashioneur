import React from "react";
import { Outlet } from "react-router-dom";
import ProfileComponent from "./components/profile/ProfileComponent";

function App() {
  return (
    <div className="App">
      <ProfileComponent />
      <Outlet />
    </div>
  );
}

export default App;
