import React, { useState, useEffect } from "react";
import "../style/general.css";
import InputSection from "./input-section";
import InputDate from "./input-date";
import InputROI from "./input-roi";

const MainPage = () => {
  // State -------------------------------------------------------------
  const [setClass, setClassState] = useState({
    isAdded: false
  });

  const [amountState, setAmountState] = useState({
    amount: 0
  });

  const [yearsState, setYearState] = useState({
    years: 0
  });

  const [roiState, setRoiState] = useState({
    roi: 0
  });

  const [warningState, setWarningState] = useState({
    warning: false
  });

  // Methods ---------------------------------------------------------

  const addClassHandler = () => {
    setWarningState({
      warning: true
    });

    if (
      amountState.amount === 0 ||
      isNaN(amountState.amount) ||
      yearsState.years === 0 ||
      roiState.roi === 0 ||
      isNaN(roiState.roi)
    )
      return;

    console.log("continue");
  };

  const callbackFunction = childData => {
    setAmountState({ amount: childData.amount });
  };

  const timeFunction = childData => {
    setYearState({ years: childData.year });
  };

  const roiFunction = childData => {
    setRoiState({ roi: childData.roi });
  };

  // Component --------------------------------------------------------

  return (
    <section
      className={
        "center text-big margin-0 animated " +
        (setClass.isAdded ? "fadeOutUp" : "fadeIn")
      }
    >
      <h1 className="margin-0">INBERSUS</h1>
      <p>1.-Choose how much you want to invest.</p>
      <InputSection parentCallback={callbackFunction} />
      <sup
        style={{
          display:
            (amountState.amount === 0 || isNaN(amountState.amount)) &&
            warningState.warning === true
              ? "block"
              : "none",
          fontSize: "12px",
          marginTop: "4px",
          color: "#e30000"
        }}
      >
        Amount can't be 0
      </sup>
      <p>2.-Choose how long your investment is going to be</p>
      <InputDate timeCallback={timeFunction} />
      <sup
        style={{
          display:
            (yearsState.years === 0 || isNaN(yearsState.years)) &&
            warningState.warning === true
              ? "block"
              : "none",
          fontSize: "12px",
          marginTop: "4px",
          color: "#e30000"
        }}
      >
        Must select a year
      </sup>
      <p>3.-Choose the ROI</p>
      <InputROI roiCallback={roiFunction} />
      <sup
        style={{
          display:
            (roiState.roi === 0 || isNaN(roiState.roi)) &&
            warningState.warning === true
              ? "block"
              : "none",
          fontSize: "12px",
          marginTop: "4px",
          color: "#e30000"
        }}
      >
        ROI can't be 0
      </sup>
      <p>
        <button onClick={addClassHandler}>Make it rain</button>
      </p>
    </section>
  );
};

export default MainPage;
