import React from 'react';

class TodosInput extends React.Component {
  render() {
    return (
      <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
    );
  }
}

export default TodosInput;
