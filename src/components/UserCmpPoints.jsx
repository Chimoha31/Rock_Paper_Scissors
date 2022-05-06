import React from "react";

const UserCmpPoints = ({userPoints, cmpPoints}) => {
  return (
    <div>
      <h1>User Points: {userPoints}</h1>
      <h1>CMP Points: {cmpPoints}</h1>
    </div>
  );
};

export default UserCmpPoints;
