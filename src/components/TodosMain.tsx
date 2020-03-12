import React from 'react';
import TodosList from "./TodosList";

class TodosMain extends React.Component {
  render() {
    return (
      <section className="main">
        { /* <!-- This section should be hidden by default and shown when there are todos --> */}
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodosList/>
      </section>
    );
  }
}

export default TodosMain;
