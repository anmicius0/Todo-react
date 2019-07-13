import React from "react";

import PropTypes from "prop-types";

// Items(div) In todo-list(div)
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

// prop type validation
TodoItem.propTypes = {
  message: PropTypes.string,
  rmTodos: PropTypes.func
};

export default TodoItem;
