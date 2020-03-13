import React, {useEffect} from 'react';
import TodosInput from "./TodosInput";
import TodosMain from "./TodosMain";
import TodosToolbar from "./TodosToolbar";
import {createTodo, setFilter} from "../state/todos-actions";
import {mapLocationToFilter} from "../models/VisibilityFilter";
import {useDispatch} from "react-redux";

const TodosApp = () => {

  const dispatch = useDispatch();

  // Hook with dispatch dependency. (dispatch is stable, so executed just once.)
  useEffect(() => {
    const hashChangeListener = () => {
      dispatch(setFilter(mapLocationToFilter()));
    };

    // Register listener and return cleanup function
    window.addEventListener('hashchange', hashChangeListener);
    return () => window.removeEventListener('hashchange', hashChangeListener);

  }, [dispatch]);

  const handleCreate = (title: string) => {
    dispatch(createTodo(title));
  };

  return <>
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodosInput create={handleCreate} />
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
