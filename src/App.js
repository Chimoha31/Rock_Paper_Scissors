import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [userHandImage, setUserHandImage] = useState("rock");
  const [cmpHandImage, setCmpHandImage] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [cmpPoints, setCmpPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [finalResult, setFinalResult] = useState("Display Winner here");
  const [gameReset, setGameReset] = useState(false);

  const handsChoice = ["rock", "paper", "scissors"];

  const handleClick = (hand) => {
    setUserHandImage(hand);
    cmpRandomHand();
  }

  const cmpRandomHand = () => {
    const cpmHand = handsChoice[Math.floor(Math.random() * handsChoice.length)];
    setCmpHandImage(cpmHand);
  }

  return (
    <div>
      <h1>ROCK PAPER SCISSOR</h1>
      {/* User CMP Junken Points */}
      <div>
        <h1>User Points: {userPoints}</h1>
        <h1>CMP Points: {cmpPoints}</h1>
      </div>

      {/* User CMP Junken Image */}
      <div>
        <img
          src={`../images/${userHandImage}.png`}
          alt="rock_paper_scissor"
          style={{ width: "100px", height: "100px" }}
        />
        <img
          src={`../images/${cmpHandImage}.png`}
          alt="rock_paper_scissor"
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      {/* Select Junken Button */}
      <div>
        {handsChoice.map((hand, index) => (
          <button key={index} onClick={() => handleClick(hand)}>{hand}</button>
        ))}
      </div>

      {/* Turn Result */}
      <div>
        <h2>Turn Result: {turnResult}</h2>
      </div>

      {/* final winner */}
      <div>
        <h2>Final Result: {finalResult} </h2>
      </div>

      <div>
        {gameReset && <button>Restart Game?</button>}
        
      </div>
    </div>
  );
};

export default App;
