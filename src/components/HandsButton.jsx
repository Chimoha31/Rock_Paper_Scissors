import React from "react";

const HandsButton = ({ handsChoice, setUserHandImage, setCmpHandImage}) => {
  const handleClick = (hand) => {
    setUserHandImage(hand);
    cmpRandomHand();
  };

  const cmpRandomHand = () => {
    const cpmHand = handsChoice[Math.floor(Math.random() * handsChoice.length)];
    setCmpHandImage(cpmHand);
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
