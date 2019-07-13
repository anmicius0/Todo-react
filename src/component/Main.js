import React from "react";

import PropTypes from "prop-types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import TodoItem from "./TodoItem";

const MySwal = withReactContent(Swal);

// when user click 'add Todo' button
async function getTodo() {
  // show an alert to enter todo
  const { value: message } = await MySwal.fire({
    title: "Enter",
    input: "text",
    showCancelButton: true,
    inputPlaceholder: "type in your todo!"
  });
  if (message) {
    return message;
  }
}

const Main = props => {
  const setTodos = () => {
    getTodo().then(message => {
      props.addTodos(message);
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

      <div onClick={setTodos} id="btn">
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
