import React from "react";
import "./App.css";
import Buttons from "./componets/buttons/Buttons";

const App = () => {
  return (
    <div className="App">
      <div className="top">4:43</div>
      <div className="display">0</div>
      <div className="buttons">
        <Buttons content="AC" />
        <Buttons content="±" />
        <Buttons content="%" />
        <Buttons content="÷" />
        <Buttons content="7" />
        <Buttons content="8" />
        <Buttons content="9" />
        <Buttons content="×" />
        <Buttons content="4" />
        <Buttons content="5" />
        <Buttons content="6" />
        <Buttons content="-" />
        <Buttons content="1" />
        <Buttons content="2" />
        <Buttons content="3" />
        <Buttons content="+" />
        <Buttons content="0" />
        <Buttons content="." />
        <Buttons content="=" />
      </div>
      <div className="bottom">-</div>
    </div>
  );
};

export default App;
