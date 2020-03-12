import React from 'react';
import TodosItem from "./TodosItem";

const TodosList: React.FunctionComponent = () => {
  return (
    <ul className="todo-list">
      <TodosItem />
    </ul>
  );
};

export default TodosList;
