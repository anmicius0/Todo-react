import React, { createRef } from "react";

import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const Main = props => {
  const input = createRef();

  return (
    <main>
      <div id="titleBar">
        <h1 id="title">Todo</h1>
        <span id="counter">
          Item count: <span id="item-count">0</span>
        </span>
      </div>

      <div>
        {props.todos.map(message => (
          <TodoItem key={message} message={message} rmTodos={props.rmTodos} />
        ))}
      </div>

      <input type="text" ref={input} />

      <div
        onClick={() => {
          props.addTodos(input.current.value);
          input.current.value = "";
        }}
        id="btn"
      >
        <button className="icon-btn add-btn">
          <div className="add-icon" />
          <div className="btn-txt">Add</div>
        </button>
      </div>
    </main>
  );
};

// prop type validation
Main.propTypes = {
  todos: PropTypes.array,
  addTodos: PropTypes.func,
  rmTodos: PropTypes.func
};

export default Main;
