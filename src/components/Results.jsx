import React from "react";

const Results = ({turnResult, finalResult}) => {
  return (
    <div>
      <h2>Turn Result: {turnResult}</h2>
      <h2>Final Result: {finalResult} </h2>
    </div>
  );
};

export default Results;
