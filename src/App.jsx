import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  return (
    <div className="container">
      <h2>React core Practice</h2>
      <Form />
      <hr />
      <Users />
    </div>
  );
}

export default App;
