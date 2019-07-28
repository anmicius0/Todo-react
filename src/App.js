import React, { useState } from "react";

import Menu from "./component/Menu";
import Main from "./component/Main";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function successAlert() {
  MySwal.fire({
    position: "top-end",
    toast: true,
    type: "success",
    title: "Success!",
    timer: 3000,
    showConfirmButton: false
  });
}

const Application = () => {
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState("username");

  // add todo to state(todos)
  const addTodos = message => {
    let newTodos = todos.concat(message);
    setTodos(newTodos);
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // remove todo from state(todos)
  const rmTodos = message => {
    let newTodos = todos;
    const index = todos.indexOf(message); // FIX by JANIIS
    if (index !== -1) {
      newTodos = todos.filter((item, idx) => idx !== index);
    }
    setTodos(newTodos);
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <>
      <Menu
        username={username}
        setUsername={setUsername}
        successAlert={successAlert}
      />
      <Main
        todos={todos}
        addTodos={addTodos}
        rmTodos={rmTodos}
        successAlert={successAlert}
      />
    </>
  );
};

export default Application;
