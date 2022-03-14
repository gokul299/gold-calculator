import React, { useState, useContext } from "react";
import "./input.style.css";
import TotalContext from "../context/total.context";
import { Add, Minus } from "./images/icons.component";
const Input = ({ name, price, index }) => {
  const [value, setValue] = useState(0);
  const { addNumber } = useContext(TotalContext);
  //const [totalPrice, setTotalPrice] = totalHelper;
  let total = value * price;
  const plus = () => {
    setValue(value + 1);
    let payload = total + price;
    addNumber(payload, index);
  };

  const minus = () => {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue(value - 1);
      let payload = total - price;
      addNumber(payload, index);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    let payload = price * e.target.value;
    addNumber(payload, index);
  };

  React.useEffect(() => {
    addNumber(0, index);
  }, []);

  return (
    <React.Fragment>
      <div className="input-container">
        <div className="input-label-container">
            <span className="price">{(price * 5.52).toFixed(2)}</span>
        </div>

        <button onClick={() => plus()} className="input-icon">
          {Add}
        </button>
        <input
          className="input"
          type="number"
          min={0}
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => minus()} className="input-icon">
          {Minus}
        </button>
        <div className="display-result">
          <p>
            {(total*5.52).toFixed(1)} <span className="currency">INR</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};


export default Input;
