import React from "react";
import ReactDOM from "react-dom";
import PasswordChange from "./passwordChange";
import "./styles.css";
import "./core.css";
import "./icma.css";

function App() {
  return (
    <div class="App">
      <div class="mt1 mb2 h2 regular line-height-1 md-mt3">Change Password</div>
      <PasswordChange />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
