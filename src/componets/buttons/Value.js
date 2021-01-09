import React, { useState } from "react";
import Buttons from "./Buttons";
import "./Value.css";

const Value = () => {
  const [value, setValue] = useState("0");
  //   const [memeroy, setMemeroy] = useState(null);

  const handleButtonPress = (content) => () => {
    let num = parseFloat(value);
    setValue(parseFloat(num) + content);
  };
  return (
    <div className="value">
      <div className="display">{value}</div>
      <div className="buttons">
        <Buttons
          onButtonClick={handleButtonPress}
          content="AC"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          content="±"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          content="%"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          content="÷"
          type="operator"
        />
        <Buttons onButtonClick={handleButtonPress} content="7" />
        <Buttons onButtonClick={handleButtonPress} content="8" />
        <Buttons onButtonClick={handleButtonPress} content="9" />
        <Buttons
          onButtonClick={handleButtonPress}
          content="×"
          type="operator"
        />
        <Buttons onButtonClick={handleButtonPress} content="4" />
        <Buttons onButtonClick={handleButtonPress} content="5" />
        <Buttons onButtonClick={handleButtonPress} content="6" />
        <Buttons
          onButtonClick={handleButtonPress}
          content="-"
          type="operator"
        />
        <Buttons onButtonClick={handleButtonPress} content="1" />
        <Buttons onButtonClick={handleButtonPress} content="2" />
        <Buttons onButtonClick={handleButtonPress} content="3" />
        <Buttons
          onButtonClick={handleButtonPress}
          content="+"
          type="operator"
        />
        <Buttons onButtonClick={handleButtonPress} content="0" />
        <Buttons onButtonClick={handleButtonPress} content="." />
        <Buttons
          onButtonClick={handleButtonPress}
          content="="
          type="operator"
        />
      </div>
    </div>
  );
};

export default Value;
