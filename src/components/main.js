import React, { useState } from "react";
import "../style/general.css";
import InputSection from "./input-section";
import InputDate from "./input-date";

const MainPage = () => {
  const [setClass, setClassState] = useState({
    isAdded: false
  });

  const addClassHandler = () => {
    setClassState({
      isAdded: true
    });
  }

  return (
    <section className={"center text-big margin-0 animated " + (setClass.isAdded ? 'fadeOutUp' : 'fadeIn')}>
      <h1 className="margin-0">INBERSUS</h1>
      <p>1.-Choose how much you want to invest.</p>
      <InputSection />
      <p>2.-Choose how long your investment is going to be</p>
      <InputDate />
      <p>3.-Choose the ROI</p>
      {/* <InputROI /> */}
      <button onClick={addClassHandler}>Make it rain</button>
    </section>
  );
};

export default MainPage;
