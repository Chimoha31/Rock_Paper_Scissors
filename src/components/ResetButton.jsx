import React from "react";
import "./styles/ResetButton.scss";

const ResetButton = ({ gameReset }) => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="reset_btn">
      {gameReset && <button onClick={handleReset}>Restart Game?</button>}
    </div>
  );
};

export default ResetButton;
