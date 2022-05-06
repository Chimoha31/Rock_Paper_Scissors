import React from "react";

const UserCmpHand = ({userHandImage, cmpHandImage}) => {
  return (
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
  );
};

export default UserCmpHand;
