import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
