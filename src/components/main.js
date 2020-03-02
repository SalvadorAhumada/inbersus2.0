import React, { useState } from "react";
import "../style/general.css";
import InputSection from "./input-section";
import InputDate from "./input-date";
import InputROI from "./input-roi";
import loading from "../assets/loading.gif";

const MainPage = () => {
  // State -------------------------------------------------------------
  const [setClass, setClassState] = useState({
    isAdded: false
  });

  const [setResult, setResultState] = useState({
    result: false
  });

  const [finalInvestment, setFinalInvestment] = useState({
    investment: 0
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

    setClassState({
      isAdded: true
    });

    let roi = 1 + roiState.roi / 12 / 100;

    const years = yearsState.years * 12;

    let initial = amountState.amount;

    let total = [];

    for (let i = 0; i < years; i++) {
      initial = initial * roi;
      total.push(initial.toFixed(2));
    }

    const investment = total;

    setFinalInvestment({
      investment
    });

    setTimeout(() => {
      setResultState({
        result: true
      });
    }, 1000);

    setTimeout(() => {
      setClassState({
        isAdded: false
      });
    }, 1500);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

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

  if (setClass.isAdded === false && setResult.result === false)
    return (
      <section style={{ textAlign: "center" }} className="animated fadeIn">
        <h1>INBERSUS</h1>
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
  else if (setClass.isAdded === true && setResult.result === false)
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "2"
        }}
      >
        <img src={loading} alt="Loading" />
      </div>
    );
  else
    return (
      <section className="animated fadeIn">
        <h1 className="results">
          Wow, your initial investment of {formatter.format(amountState.amount)}{" "}
          will turn into{" "}
          {formatter.format(
            finalInvestment.investment[finalInvestment.investment.length - 1]
          )}{" "}
          after {yearsState.years} years!
        </h1>
        <p>Check this super rad table for monthly results!:</p>
        <div className="table-results">
          <table className="animated bounceInUp">
            {finalInvestment.investment.map((month, index) => {
              return (
                <tr key={index}>
                  <td>{`month ${index + 1}`}</td>
                  <td>{`$${month}`}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </section>
    );
};

export default MainPage;
