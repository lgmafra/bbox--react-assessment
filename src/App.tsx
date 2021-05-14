import React, { useState } from "react";
import { evaluate } from "mathjs";
import ButtonsPanel from "@component/buttonPanel/ButtonPanel";
import Display from "@component/display/Display";
import "./App.css";

const App: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  function handleClick(event: React.FormEvent<HTMLInputElement>): void {
    const buttonName: string = event.currentTarget.innerText;
    if (buttonName === "AC") setDisplayValue("0");
    else if (buttonName === "=") {
      const replacedValue = displayValue.replace("x", "*").replace("÷", "/").replace("+/-", "*(-1)");
      console.log(replacedValue);
      const value: number = evaluate(replacedValue);
      setDisplayValue(value.toString());
    } else {
      if (displayValue === "0") setDisplayValue(buttonName);
      else setDisplayValue((value) => `${value}${buttonName}`);
    }
  }

  return (
    <div className="component-app">
      <Display value={displayValue} />
      <ButtonsPanel handler={handleClick} />
    </div>
  );
};

export default App;
