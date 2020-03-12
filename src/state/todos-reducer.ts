import TodosState from "./TodosState";
import {TodosActions, TodosActionTypes} from "./todos-actions";
import Todo from "../models/Todo";
import * as persistence from "../lib/persistence";

export function todosReducer(state: TodosState, action: TodosActions): TodosState {

  let todo: Todo;

  switch (action.type) {

    case TodosActionTypes.Create:
      todo = persistence.create(action.title);
      return {
        ...state,
        todos: [...state.todos, todo]
      };

    case TodosActionTypes.Toggle:
      todo = state.todos.find(t => t.id === action.id) as Todo;
      todo = persistence.update(todo.id, { completed: !todo.completed });
      return {
        ...state,
        todos: state.todos.map(t => t.id === todo.id ? todo : t)
      };

    case TodosActionTypes.Destroy:
      persistence.destroy(action.id);
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id)
      };

    default:
      return state;
  }
}
