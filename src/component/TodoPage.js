import React from "react";

import Menu from "./Menu";
import Main from "./Main";

const TodoPage = props => {
  return (
    <>
      <Menu />
      <Main
        todos={props.todos}
        addTodos={message => props.addTodos(message)}
        rmTodos={message => props.rmTodos(message)}
      />
    </>
  );
};

export default TodoPage;
