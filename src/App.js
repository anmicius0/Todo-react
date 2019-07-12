import React, { useState } from "react";

import TodoPage from "./component/TodoPage";

const Application = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = message => {
    const newTodos = todos.concat(message);
    setTodos(newTodos);
  };

  const rmTodos = message => {
    const newTodos = todos;
    const index = newTodos.indexOf(message);
    if (index !== -1) {
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  return <TodoPage todos={todos} addTodos={addTodos} rmTodos={rmTodos} />;
};

export default Application;
