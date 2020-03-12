import React, {useEffect, useRef, useState} from 'react';
import Todo from "../models/Todo";
import {classes} from "../lib/classes";
import {useStore} from "./TodosApp";
import {destroyTodo, toggleTodo, updateTodo} from "../state/todos-actions";

const TodosItem: React.FunctionComponent<{ todo: Todo}> = ({todo}) => {

  const [editMode, setEditMode] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(editMode) { inputRef.current?.focus() }
  }, [editMode]);

  const { dispatch } = useStore();

  const commitEdit = () => {
    if (editMode) {
      const title = inputRef.current?.value.trim();
      if (!title) {
        dispatch(destroyTodo(todo.id));
      } else {
        dispatch(updateTodo(todo.id, title));
        inputRef.current && (inputRef.current.value = title)
      }
      setEditMode(false);
    }
  };

  const handleKey = (ev: React.KeyboardEvent) => {
    if (ev.key === 'Escape') {
      inputRef.current && (inputRef.current.value = todo.title);
      setEditMode(false);
    } else if (ev.key === 'Enter' ) {
      commitEdit();
    }
  };

  return (
    <li className={classes({ completed: todo.completed, editing: editMode })}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => {dispatch(toggleTodo(todo.id))}}/>
        <label onDoubleClick={() => setEditMode(true)}>{todo.title}</label>
        <button className="destroy" onClick={() => dispatch(destroyTodo(todo.id))}/>
      </div>
      <input className="edit"
             ref={inputRef}
             onBlur={commitEdit}
             onKeyUp={handleKey}
             defaultValue={todo.title} />
    </li>
  );
};

export default TodosItem;
