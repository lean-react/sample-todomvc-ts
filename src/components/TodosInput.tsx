import React from 'react';

const TodosInput: React.FunctionComponent = () => {
  return (
    <input className="new-todo" placeholder="What needs to be done?" autoFocus />
  );
};

export default TodosInput;
