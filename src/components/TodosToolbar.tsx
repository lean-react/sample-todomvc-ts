import React, {useMemo} from 'react';
import {useStore} from "./TodosApp";
import {classes} from "../lib/classes";
import {destroyCompletedTodos} from "../state/todos-actions";

const TodosToolbar: React.FunctionComponent = () => {

  const {state, dispatch} = useStore();

  const activeCount = useMemo(() => {
    return state.todos.reduce((count, todo) => todo.completed ? count : count + 1 , 0);
  }, [state.todos]);

  const hasNoCompleted = useMemo(() => {
    return state.todos.findIndex(t => t.completed) === -1;
  }, [state.todos]);

  if (state.todos.length === 0) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{activeCount}</strong> item{ activeCount === 1 ? '':'s'} left</span>
      { /* <!-- Remove this if you don't implement routing --> */}
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button
        className={classes({ hidden: hasNoCompleted },'clear-completed')}
        onClick={() => dispatch(destroyCompletedTodos())}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default TodosToolbar;
