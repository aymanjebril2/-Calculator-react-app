import React, { useState } from "react";
import Buttons from "./Buttons";
import "./Value.css";
import comma from "./comma";
const Value = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }
    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }
    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };
  return (
    <div className="value">
      <div className="display">{comma(value)}</div>
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
          content="−"
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
