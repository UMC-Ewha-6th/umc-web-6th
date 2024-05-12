import React from 'react';
import '../styles/plan.css';

export default function TodoBox({ list, isDone, deleteDoneList, addDoneList }) {
  return (
    <>
      {isDone ? (
        <ul className="doneList">
          {list.map((item, idx) => (
            <li key={idx}>
              <div className="doneCheckBox">
                <div>☑</div>
                <div>{item.text}</div>
              </div>
              <div className="delete" onClick={() => deleteDoneList(item.id)}>
                ✕
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="todoList">
          {list.map((item, idx) => (
            <li key={idx}>
              <div className="checkBox" onClick={() => addDoneList(item.text, item.id)}>
                ☐
              </div>
              <div>{item.text}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
