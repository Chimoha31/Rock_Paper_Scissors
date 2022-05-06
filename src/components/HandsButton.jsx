import React from "react";

const HandsButton = ({ setUserHandImage, setCmpHandImage }) => {
  const handsChoice = ["rock", "paper", "scissors"];

  const handleClick = (hand) => {
    setUserHandImage(hand);
    cmpRandomHand();
  };

  const cmpRandomHand = () => {
    const cmpHand = handsChoice[Math.floor(Math.random() * handsChoice.length)];
    setCmpHandImage(cmpHand);
  };

  return (
    <div>
      {handsChoice.map((hand, index) => (
        <button key={index} onClick={() => handleClick(hand)}>
          {hand}
        </button>
      ))}
    </div>
  );
};

export default HandsButton;
