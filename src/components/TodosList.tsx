import React from 'react';
import TodosItem from "./TodosItem";
import Todo from "../models/Todo";
import {useStore} from "./TodosApp";
import VisibilityFilter from "../models/VisibilityFilter";
import {useSelector} from "react-redux";

const TodosList: React.FunctionComponent<{ todos: Todo[] }> = ({todos}) => {

  const filter = useSelector(s => s.todos.filter);

  const filteredTodos = filter === VisibilityFilter.All ? todos
    : todos.filter(t => t.completed === (filter === VisibilityFilter.Completed));

  return (
    <ul className="todo-list">
      {
        filteredTodos.map(todo => <TodosItem todo={todo} key={todo.id} />)
      }
    </ul>
  );
};

export default TodosList;
