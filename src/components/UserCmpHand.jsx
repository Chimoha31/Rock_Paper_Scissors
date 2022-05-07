import React from "react";
import './styles/UserCompHand.scss';

const UserCmpHand = ({ userHandImage, cmpHandImage }) => {
  return (
    <div className="handImg">
      <div className="user_hand">
        <img
          src={`../images/${userHandImage}.png`}
          alt="rock_paper_scissor"
        />
      </div>
      <div className="vs_mark">
        <p></p>
      </div>
      <div className="cmp_hand">
        <img
          src={`../images/${cmpHandImage}.png`}
          alt="rock_paper_scissor"
        />
      </div>
    </div>
  );
};

export default UserCmpHand;
