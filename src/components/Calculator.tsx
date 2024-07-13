import React from "react";
import CalculatorButton from "./CalculatorButton";
import { MdOutlineClose } from "react-icons/md";
import { IoBackspace, IoClose, IoCloseOutline } from "react-icons/io5";
import { FaDivide, FaMinus, FaPlus } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { LuDivide, LuEqual } from "react-icons/lu";

export default function Calculator() {
  const MAX_DECIMAL_PLACES = 2;
  const [display, setDisplay] = React.useState("");
  const [error, setError] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);

  const operators = ["/", "*", "-", "+"];

  function addToDisplay(value: string) {
    if (error || (answered && !operators.includes(value))) clearDisplay();
    setDisplay((prevDisplay) => prevDisplay + value);
    setAnswered(false);
  }

  function clearDisplay() {
    setError(false);
    setAnswered(false);
    setDisplay("");
  }

  function backspace() {
    if (display.length === 1) {
      clearDisplay();
      return;
    }
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  }

  function calculate() {
    const blackList = ["Infinity", "NaN"];
    try {
      const calculatedAnswer = eval(display);
      if (blackList.includes(`${calculatedAnswer}`)) throw Error();
      const roundedAnswer =
        Math.round(calculatedAnswer * Math.pow(10, MAX_DECIMAL_PLACES)) /
        Math.pow(10, MAX_DECIMAL_PLACES);
      setDisplay(`${roundedAnswer}`);
      setAnswered(true);
    } catch (error) {
      setDisplay("Error");
      setError(true);
    }
  }

  return (
    <section
      id="calculator"
      className="grid gap-5 max-w-[292px] sm:max-w-[324px] md:max-w-[424px] mx-auto sm:ring-1 sm:p-4 md:p-6 ring-gray-200 rounded-[12px] sm:bg-gray-50"
    >
      <div className="px-4 py-8 w-full bg-calc-display rounded-lg">
        <input
          id="calculator-input"
          type="text"
          value={display || 0}
          className="w-full bg-white/0 text-right text-calc-display-text font-mono text-[40px] leading-[1] tracking-wider"
          disabled
        />
      </div>

      <div id="calculator-buttons" className="grid grid-cols-4 gap-3 place-items-center">
        <CalculatorButton
          label={"AC"}
          onClick={clearDisplay}
          variant="clear"
          style={{ gridColumn: "span 2" }}
        />
        <CalculatorButton label={<IoBackspace />} onClick={backspace} />
        <CalculatorButton
          label={<LuDivide />}
          onClick={() => addToDisplay(operators[0])}
          variant="operation"
        />
        <CalculatorButton label={"7"} onClick={() => addToDisplay("7")} />
        <CalculatorButton label={"8"} onClick={() => addToDisplay("8")} />
        <CalculatorButton label={"9"} onClick={() => addToDisplay("9")} />
        <CalculatorButton
          label={<IoClose />}
          onClick={() => addToDisplay(operators[1])}
          variant="operation"
        />
        <CalculatorButton label={"4"} onClick={() => addToDisplay("4")} />
        <CalculatorButton label={"5"} onClick={() => addToDisplay("5")} />
        <CalculatorButton label={"6"} onClick={() => addToDisplay("6")} />
        <CalculatorButton
          label={<FiMinus />}
          onClick={() => addToDisplay(operators[2])}
          variant="operation"
        />
        <CalculatorButton label={"1"} onClick={() => addToDisplay("1")} />
        <CalculatorButton label={"2"} onClick={() => addToDisplay("2")} />
        <CalculatorButton label={"3"} onClick={() => addToDisplay("3")} />
        <CalculatorButton
          label={<FiPlus />}
          onClick={() => addToDisplay(operators[3])}
          variant="operation"
        />
        <CalculatorButton
          label={"0"}
          onClick={() => addToDisplay("0")}
          style={{ gridColumn: "span 2" }}
        />
        <CalculatorButton label={"."} onClick={() => addToDisplay(".")} />
        <CalculatorButton label={<LuEqual />} onClick={calculate} variant="operation" />
      </div>
    </section>
  );
}
