import React, { useContext, useEffect } from "react";
import Input from "../components/input.component";
import TotalContext from "../context/total.context";

import "./main.style.css";

const MainPage = () => {
  const { getTotalPrice, getRealData, goldPriceList } = useContext(
    TotalContext
  );
  //const [totalPrice] = totalHelper;
  const names  = ['Grams of  Gold','Quarter Gold','Half Gold','Full Gold']
  useEffect(() => {
    getRealData();
        // eslint-disable-next-line 
}, []);

  if (goldPriceList.isLoaded) {
    return (
      <div className="main-container">
        <div>
          {names.map((name1)=>(<h1 className="name">{name1}</h1>))}
        </div>
        <div>
        {goldPriceList.list.map((gold, index) => (
          <Input
            index={index}
            key={index}
            name={gold.name}
            price={gold.buying}
          />
        ))}
        <div className="result-area">
          {" "}
          <h3 className="total-gold-text">
          Total Gold Price:{" "}
            <span className="total-gold-price">{(getTotalPrice()*5.52).toFixed(2)} INR</span>{" "}
          </h3>
        </div>
      </div>
      </div>
    );
  }

  return <p>Loading</p>;
};

export default MainPage;
