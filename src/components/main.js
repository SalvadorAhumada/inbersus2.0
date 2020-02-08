import React from "react";
import "../style/general.css";
import InputSection from "./input-section";
import InputDate from "./input-date";
import InputROI from "./input-roi";

const mainPage = () => {
  return (
    <section className="center text-big margin-0">
      <h1 className="margin-0">INBERSUS</h1>
      <p>1.-Choose how much you want to invest.</p>
      <InputSection />
      <p>2.-Choose how long your investment is going to be</p>
      <InputDate />
      <p>3.-Choose the ROI</p>
      <InputROI />
      <p>
        <button>Make it rain</button>
      </p>
    </section>
  );
};

export default mainPage;
