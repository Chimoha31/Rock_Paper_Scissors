import React from "react";
import "./styles/UserCmpPoints.scss";

const UserCmpPoints = ({ userPoints, cmpPoints }) => {
  return (
    <div className="both_points">
      <div>
        <h1>User Points: {userPoints}</h1>
      </div>
      <div>
        <p>VS</p>
      </div>
      <div>
        <h1>CMP Points: {cmpPoints}</h1>
      </div>
    </div>
  );
};

export default UserCmpPoints;
