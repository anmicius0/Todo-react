import React from "react";

import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// use Swal to get todo message
async function getTodo() {
  const { value: message } = await MySwal.fire({
    title: "Enter",
    input: "text",
    showCancelButton: true,
    inputPlaceholder: "type in your todo!"
  });
  if (message !== undefined) {
    return message;
  }
}

const Main = props => {
  // get message from Swal and add to state(todos)
  const setTodos = () => {
    getTodo().then(message => {
      if (message) {
        props.addTodos(message);
        props.successAlert();
      }
    });
  };

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

      <div onClick={() => setTodos()} id="btn">
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
  rmTodos: PropTypes.func,
  successAlert: PropTypes.func
};

export default Main;
