import "./result_page.css";

const ResultPage = () => {
  const [name1, name2, name3] = ["abc", "xyz", "yzt"]

  return (
    <div className="result-container">
      <div className="result-header">Leaderboard</div>
      <ul className="result-list">
        <li className="result-list-rank">
          <div className="result-list-rank_item">1</div>
          <div className="result-list-rank_item">2</div>
          <div className="result-list-rank_item">3</div>
        </li>
        <li className="result-list-name">
          <div className="result-list-name_item">{name2}</div>
          <div className="result-list-name_item">{name1}</div>
          <div className="result-list-name_item">{name3}</div>
        </li>
      </ul>
      <button className="result-button-next">Next</button>
    </div>
  )
}

export default ResultPage;