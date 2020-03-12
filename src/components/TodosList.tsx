import React from 'react';
import TodosItem from "./TodosItem";

class TodosList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        <TodosItem/>
      </ul>
    );
  }
}

export default TodosList;
