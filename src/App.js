import React, { useEffect, useState } from "react";
import "./App.scss";
import HandsButton from "./components/HandsButton";
import ResetButton from "./components/ResetButton";
import Results from "./components/Results";
import UserCmpHand from "./components/UserCmpHand";
import UserCmpPoints from "./components/UserCmpPoints";

const App = () => {
  const [userHandImage, setUserHandImage] = useState("rock");
  const [cmpHandImage, setCmpHandImage] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [cmpPoints, setCmpPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [finalResult, setFinalResult] = useState("");
  const [gameReset, setGameReset] = useState(false);

  useEffect(() => {
    const handsPattern = userHandImage + cmpHandImage;
    if (userPoints <= 4 && cmpPoints <= 4) {
      if (
        handsPattern === "rockscissors" ||
        handsPattern === "paperrock" ||
        handsPattern === "scissorspaper"
      ) {
        const addUserPoints = userPoints + 1;
        setUserPoints(addUserPoints);
        setTurnResult("User got the point!");
        if (addUserPoints === 5) {
          setFinalResult("User Wins !");
          setGameReset(true);
        }
      }

      if (
        handsPattern === "scissorsrock" ||
        handsPattern === "rockpaper" ||
        handsPattern === "paperscissors"
      ) {
        const addCmpPoints = cmpPoints + 1;
        setCmpPoints(addCmpPoints);
        setTurnResult("CMP got the point!");
        if (addCmpPoints === 5) {
          setFinalResult("CMP wins !");
          setGameReset(true);
        }
      }
      if (
        handsPattern === "rockrock" ||
        handsPattern === "paperpaper" ||
        handsPattern === "scissorsscissors"
      ) {
        setTurnResult("Noe one get a point");
      }
    }
    // eslint-disable-next-line
  }, [userHandImage, cmpHandImage]);

  return (
    <div className="app">
      <h1 className="title">ROCK PAPER SCISSOR</h1>
      <p>- 5pt Match -</p>
      <UserCmpPoints userPoints={userPoints} cmpPoints={cmpPoints} />
      <UserCmpHand userHandImage={userHandImage} cmpHandImage={cmpHandImage} />
      <HandsButton
        setUserHandImage={setUserHandImage}
        setCmpHandImage={setCmpHandImage}
        gameReset={gameReset}
      />
      <Results turnResult={turnResult} finalResult={finalResult} />
      <ResetButton gameReset={gameReset} />
    </div>
  );
};

export default App;
