import React, {useMemo} from 'react';
import TodosList from "./TodosList";
import {useStore} from './TodosApp';
import {syncAllTodos} from "../state/todos-actions";
import {useDispatch, useSelector} from "react-redux";

const TodosMain: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const todos = useSelector(s => s.todos.list);
  const allCompleted = useMemo(() => todos.findIndex(t => !t.completed) === -1,[todos]);

  if (todos.length === 0) {
    return null;
  }

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox"
             checked={allCompleted}
             onChange={() => dispatch(syncAllTodos(!allCompleted))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodosList todos={todos} />
    </section>
  );
};

export default TodosMain;
