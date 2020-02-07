import React, { useState } from "react";
import "../style/general.css";
import InputSection from "./input-section";
import InputDate from "./input-date";

/* Input section isn't bind anywhere*/

const MainPage = () => {
  const [setClass, setClassState] = useState({
    isAdded: false
  });

  const addClassHandler = () => {
    console.log(amountState.amount);
    if (amountState.amount === 0) {
      console.log('select amount please');
      return;
    }

    setClassState({
      isAdded: true
    });
  }

  const [amountState, setAmountState] = useState({
    amount: 0
  });

  const callbackFunction = (childData) => {
    setAmountState({ amount: childData.amount })
  };

  return (
    <section className={"center text-big margin-0 animated " + (setClass.isAdded ? 'fadeOutUp' : 'fadeIn')}>
      <h1 className="margin-0">INBERSUS</h1>
      <p>1.-Choose how much you want to invest.</p>
      <InputSection parentCallback={callbackFunction} />
      <p>2.-Choose how long your investment is going to be</p>
      <InputDate />
      <p>3.-Choose the ROI</p>
      {/* <InputROI /> */}
      <button onClick={addClassHandler}>Make it rain</button>
    </section>
  );
};

export default MainPage;
