import React, {useState} from 'react';
import Todo from "../models/Todo";
import {classes} from "../lib/classes";
import {useStore} from "./TodosApp";
import {destroyTodo, toggleTodo} from "../state/todos-actions";

const TodosItem: React.FunctionComponent<{ todo: Todo}> = ({todo}) => {

  const [editMode, setEditMode] = useState(false);
  const { dispatch } = useStore();

  return (
    <li className={classes({ completed: todo.completed, editing: editMode })}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => {dispatch(toggleTodo(todo.id))}}/>
        <label onDoubleClick={() => setEditMode(true)}>{todo.title}</label>
        <button className="destroy" onClick={() => dispatch(destroyTodo(todo.id))}/>
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template"/>
    </li>
  );
};

export default TodosItem;
