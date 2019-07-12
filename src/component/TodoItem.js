import React from "react";

const TodoItem = props => {
  return (
    <div className="todoItem">
      <p> {props.message} </p>

      <div className="todoItem-btn">
        <button
          className="icon-btn add-btn"
          onClick={props.rmTodos(props.message)}
        >
          <div className="btn-txt"> complete </div>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
