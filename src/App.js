import React, { useState } from "react";

import Menu from "./component/Menu";
import Main from "./component/Main";

const Application = () => {
  const [todos, setTodos] = useState([]);

  // add todo to state(todos)
  const addTodos = message => {
    let newTodos = [...todos, message];
    setTodos(newTodos);
    console.log(todos);
  };

  // remove todo from state(todos)
  const rmTodos = message => {
    let newTodos = todos;
    const index = newTodos.indexOf(message);
    if (index !== -1) {
      newTodos.splice(index, 1);
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
