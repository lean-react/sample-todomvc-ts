import React, {useMemo} from 'react';
import TodosList from "./TodosList";
import {useStore} from './TodosApp';
import {syncAllTodos} from "../state/todos-actions";

const TodosMain: React.FunctionComponent = () => {

  const { state, dispatch } = useStore();

  const allCompleted = useMemo(() => state.todos.findIndex(t => !t.completed) === -1,[state.todos]);

  if (state.todos.length === 0) {
    return null;
  }

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox"
             checked={allCompleted}
             onChange={() => dispatch(syncAllTodos(!allCompleted))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodosList todos={state.todos} />
    </section>
  );
};

export default TodosMain;
