import React, {useReducer} from 'react';
import TodosInput from "./TodosInput";
import TodosMain from "./TodosMain";
import TodosToolbar from "./TodosToolbar";
import {createStore} from "../lib/create-store";
import TodosState, {initialState} from "../state/TodosState";
import {TodosActions} from "../state/todos-actions";
import {todosReducer} from "../state/todos-reducer";

export const [useStore, StoreProvider] = createStore<TodosState, TodosActions>();

const TodosApp = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return <StoreProvider value={ {state,dispatch} }>
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
  </StoreProvider>
};

export default TodosApp;
