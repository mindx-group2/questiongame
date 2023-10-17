import './join_game.css';

const JoinGame = () => {
  return (
    <div className="joingame-container">
      <h1 className="joingame-title">Question Game</h1>
      <div className="joingame-box">
        <input type="text" className="joingame-box_input" placeholder="Enter your name"/>
        <div className="joingame-box_enter">Let's go!</div>
      </div>
    </div>
  );
}

export default JoinGame;