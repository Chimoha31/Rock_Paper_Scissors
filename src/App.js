import React, { useEffect, useState } from "react";
import "./App.scss";
import HandsButton from "./components/HandsButton";
import Results from "./components/Results";
import UserCmpHand from "./components/UserCmpHand";
import UserCmpPoints from "./components/UserCmpPoints";

const App = () => {
  const [userHandImage, setUserHandImage] = useState("rock");
  const [cmpHandImage, setCmpHandImage] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [cmpPoints, setCmpPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [finalResult, setFinalResult] = useState("Display Winner here");
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
        setTurnResult("User got the point this turn!");
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
        setTurnResult("CMP got the point this turn!");
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
    <div>
      <h1>ROCK PAPER SCISSOR</h1>
      <UserCmpPoints userPoints={userPoints} cmpPoints={cmpPoints} />
      <UserCmpHand userHandImage={userHandImage} cmpHandImage={cmpHandImage} />
      <HandsButton
        setUserHandImage={setUserHandImage}
        setCmpHandImage={setCmpHandImage}
        gameReset={gameReset}
      />
      <Results turnResult={turnResult} finalResult={finalResult} />

      <div>{gameReset && <button>Restart Game?</button>}</div>
    </div>
  );
};

export default App;
