import React, {useMemo} from 'react';
import {useStore} from "./TodosApp";

const TodosToolbar: React.FunctionComponent = () => {

  const {state} = useStore();

  const activeCount = useMemo(() => {
    return state.todos.reduce((count, todo) => todo.completed ? count : count + 1 , 0);
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
      { /*  <!-- Hidden if no completed items are left ↓ --> */}
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default TodosToolbar;
