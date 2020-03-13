import {combineReducers, createStore} from 'redux';
import {todosReducer} from "./state/todos-reducer";
import {DefaultRootState} from "react-redux";
import TodosState from "./state/TodosState";

const rootReducer = combineReducers({
  todos: todosReducer
});

export default createStore(rootReducer);

// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation

declare module "react-redux" {
  interface DefaultRootState {
    todos: TodosState
  }
}



