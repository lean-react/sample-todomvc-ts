import React from 'react';
import TodosInput from "./TodosInput";
import TodosMain from "./TodosMain";
import TodosToolbar from "./TodosToolbar";

const TodosApp = () => {
  return <>
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodosInput />
      </header>
      <TodosMain />
      <TodosToolbar />
    </section>
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://lean-stack.de">Michael Alt</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </>
};

export default TodosApp;
