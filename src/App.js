import React, { useState } from "react";

import Menu from "./component/Menu";
import Main from "./component/Main";

const Application = () => {
  const [todos, setTodos] = useState([]);

  // add todo to state(todos)
  const addTodos = message => {
    let newTodos = [...todos, message];
    setTodos(newTodos);
  };

  // remove todo from state(todos)
  const rmTodos = message => {
    let newTodos = todos;
    const index = todos.indexOf(message); // FIX by JANIIS
    if (index !== -1) {
      newTodos = todos.filter((item, idx) => idx !== index);
    }
    setTodos(newTodos);
  };

  return (
    <>
      <Menu />
      <Main todos={todos} addTodos={addTodos} rmTodos={rmTodos} />
    </>
  );
};

export default Application;
