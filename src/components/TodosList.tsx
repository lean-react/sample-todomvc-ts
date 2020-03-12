import React from 'react';
import TodosItem from "./TodosItem";
import Todo from "../models/Todo";

const TodosList: React.FunctionComponent<{ todos: Todo[] }> = ({todos}) => {
  return (
    <ul className="todo-list">
      {
        todos.map(todo => <TodosItem todo={todo} key={todo.id} />)
      }
    </ul>
  );
};

export default TodosList;
