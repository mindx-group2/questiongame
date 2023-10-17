import "./manage_question.css";

const ManageQuestion = () => {
  const listQuestion = ["1", "1", "1", "1", "1", "1"]
  return (
    <div className="manage_question-containter">
      <div className="manage_question-headbox">
        <button className="manage_question-headbox-exit">
          Exit
        </button>
        <button className="manage_question-headbox-done">
          Done
        </button>
      </div>
      <div className="manage_question-body">
        <div className="manage_question-list-question">
          <ul className="manage_question-list">
            {listQuestion.map((question, key) => {
              return (
                <li className="manage_question-list-item">
                  <div className="list_question-title">Question {key+1}</div>
                  <div className="list_question-content">{question}</div>
                </li>
              );
            }
            )}
          </ul>
          <div className="manage_question-list-function">
            <button className="manage_question-function-add manage_question-function-item">Add question</button>
            <button className="manage_question-function-question_bank manage_question-function-item">Question bank</button>
            <button className="manage_question-function-import manage_question-function-item">Import</button>
          </div>
        </div>
        <div className="manage_question-body-main">
          <span></span>
        </div>
        <div className="manage_question-body-time">
          <div className="manage_question-time-title">Time limit</div>
          <div className="manage_question-time-remaining"><span></span></div>
        </div>
      </div>
    </div>
  );
}

export default ManageQuestion;