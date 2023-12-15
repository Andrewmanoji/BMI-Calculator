import React, { useState } from "react";
import "./style.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const Reset = (e) => {
    setWeight("");
    setHeight("");
    setBmi(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "600",
              marginTop: "0px",
              letterSpacing: "1px",
              marginBottom: "25px",

              color: "purple",
            }}
          >
            BMI Calculator !
          </h1>
          <div>
            <label>Weight (kg) </label> 
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="container">
            <label>Height (cm) </label>
            
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="btn">
            <button onClick={calculateBMI}>Calculate</button>
            <button className="reset" onClick={Reset}>Reset</button>
          </div>
          <div className="output"> Body Mass Index (BMI) : {bmi}</div>
        </div>
      </form>
    </div>
  );
};

export default BmiCalculator;
