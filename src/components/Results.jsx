import React from "react";
import "./styles/Results.scss";

const Results = ({ turnResult, finalResult }) => {
  return (
    <div className="result">
      <h2>
        Turn Result: <span className="turn_result">{turnResult}</span>
      </h2>
      <h2>
        Final Result: <span className="winner_name">{finalResult}</span>
      </h2>
    </div>
  );
};

export default Results;
