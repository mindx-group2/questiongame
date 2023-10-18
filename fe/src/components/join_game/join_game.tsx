import './join_game.css';

const JoinGame = (props: any) => {
  const {title, placeHolder, enterButton, type} = props
  return (
    <div className="joingame-container">
      <h1 className="joingame-title">{title}</h1>
      <div className="joingame-box">
        <input type="text" className="joingame-box_input" placeholder={placeHolder}/>
        <button className="joingame-box_enter">{enterButton}</button>
      </div>
      {type === "start" ? 
        (<div className="joingame-box_login">
          Already have an account?
          <button className="joingame-box-login_click">Login</button>
        </div>) :
        (<></>)}
    </div>
  );
}

export default JoinGame;