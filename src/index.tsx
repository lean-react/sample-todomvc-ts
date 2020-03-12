import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const template = (
  <>
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
      </header>
      { /* <!-- This section should be hidden by default and shown when there are todos --> */}
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          { /*
          <!-- These are here just to show the structure of the list items -->
          <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
          */}
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked={true}/>
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template"/>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>Buy a unicorn</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Rule the web"/>
          </li>
        </ul>
      </section>
      { /* <!-- This footer should hidden by default and shown when there are todos --> */}
      <footer className="footer">
        { /* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>0</strong> item left</span>
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
    </section>
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://lean-stack.de">Michael Alt</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </>
);

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
