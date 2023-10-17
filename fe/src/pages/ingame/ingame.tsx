import React from "react";
import "./ingame.css";

const IngamePage: React.FC = () => {
  return (
    <div className="ingame-page">
      <div className="player-info">
        <h3 id="username">Name: </h3>
        <h3 id="score">Score: </h3>
        <h3 id="rank">Rank: </h3>
      </div>
      <h1>Question 1</h1>
      <h2>What is 1 + 1 = ?</h2>
      <div className="img"></div>
      <div className="answer">
        <button id="answer1" className="button">
          Answer 1
        </button>
        <button id="answer2" className="button">
          Answer 2
        </button>
        <br />
        <button id="answer3" className="button">
          Answer 3
        </button>
        <button id="answer4" className="button">
          Answer 4
        </button>
      </div>
    </div>
  );
};

export default IngamePage;
