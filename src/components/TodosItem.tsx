import React, {useEffect, useRef, useState} from 'react';
import Todo from "../models/Todo";
import {classes} from "../lib/classes";
import {useStore} from "./TodosApp";
import {destroyTodo, toggleTodo, updateTodo} from "../state/todos-actions";

const TodosItem: React.FunctionComponent<{ todo: Todo}> = ({todo}) => {

  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(editMode) { inputRef.current?.focus() }
  }, [editMode]);

  const { dispatch } = useStore();

  const commitEdit = () => {
    if (editMode) {
      const title = editText.trim();
      if (title.length === 0) {
        dispatch(destroyTodo(todo.id));
      } else {
        dispatch(updateTodo(todo.id, title));
        setEditText(title);
      }
      setEditMode(false);
    }
  };

  const handleKey = (ev: React.KeyboardEvent) => {
    if (ev.key === 'Escape') {
      setEditText(todo.title);
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
             value={editText}
             onChange={ev => setEditText(ev.currentTarget.value)} />
    </li>
  );
};

export default TodosItem;
