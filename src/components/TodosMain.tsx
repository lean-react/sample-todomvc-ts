import React from 'react';
import TodosList from "./TodosList";
import {useStore} from './TodosApp';

const TodosMain: React.FunctionComponent = () => {

  const { state } = useStore();

  if (state.todos.length === 0) {
    return null;
  }

  return (
    <section className="main">
      { /* <!-- This section should be hidden by default and shown when there are todos --> */}
      <input id="toggle-all" className="toggle-all" type="checkbox"/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodosList todos={state.todos} />
    </section>
  );
};

export default TodosMain;
