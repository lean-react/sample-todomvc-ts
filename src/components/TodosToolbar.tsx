import React, {useMemo} from 'react';
import {useStore} from "./TodosApp";
import {classes} from "../lib/classes";
import {destroyCompletedTodos} from "../state/todos-actions";
import VisibilityFilter from "../models/VisibilityFilter";
import {useDispatch, useSelector} from "react-redux";

const TodosToolbar: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const state = useSelector(s => s.todos);

  const activeCount = useMemo(() => {
    return state.list.reduce((count, todo) => todo.completed ? count : count + 1 , 0);
  }, [state.list]);

  const hasNoCompleted = useMemo(() => {
    return state.list.findIndex(t => t.completed) === -1;
  }, [state.list]);


  if (state.list.length === 0) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{activeCount}</strong> item{ activeCount === 1 ? '':'s'} left</span>
      <ul className="filters">
        <li>
          <a className={classes({selected: state.filter === VisibilityFilter.All})} href="#/">All</a>
        </li>
        <li>
          <a className={classes({selected: state.filter === VisibilityFilter.Active})} href="#/active">Active</a>
        </li>
        <li>
          <a className={classes({selected: state.filter === VisibilityFilter.Completed})} href="#/completed">Completed</a>
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
