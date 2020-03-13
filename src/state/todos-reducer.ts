import TodosState from "./TodosState";
import {TodosActions, TodosActionTypes} from "./todos-actions";
import Todo from "../models/Todo";
import * as persistence from "../lib/persistence";
import {mapLocationToFilter} from "../models/VisibilityFilter";

// Initializing reducer state. See https://redux.js.org/recipes/structuring-reducers/initializing-state/

export const initialState: TodosState = {
  list: persistence.getAll(),
  filter: mapLocationToFilter()
};

export function todosReducer(state: TodosState = initialState, action: TodosActions): TodosState {

  let todo: Todo;

  switch (action.type) {

    case TodosActionTypes.Create:
      todo = persistence.create(action.title);
      return {
        ...state,
        list: [...state.list, todo]
      };

    case TodosActionTypes.Toggle:
      todo = state.list.find(t => t.id === action.id) as Todo;
      todo = persistence.update(todo.id, { completed: !todo.completed });
      return {
        ...state,
        list: state.list.map(t => t.id === todo.id ? todo : t)
      };

    case TodosActionTypes.Update:
      todo = state.list.find(t => t.id === action.id) as Todo;
      todo = persistence.update(todo.id, { title: action.title });
      return {
        ...state,
        list: state.list.map(t => t.id === todo.id ? todo : t)
      };

    case TodosActionTypes.Destroy:
      persistence.destroy(action.id);
      return {
        ...state,
        list: state.list.filter(t => t.id !== action.id)
      };

    case TodosActionTypes.DestroyCompleted:
      state.list.filter(t => t.completed).map(t => t.id).forEach(persistence.destroy);
      return {
        ...state,
        list: state.list.filter(t => !t.completed)
      };

    case TodosActionTypes.SyncAll:
      state.list.filter(t => t.completed !== action.completed).forEach(
        t => persistence.update(t.id, { completed: action.completed })
      );
      return {
        ...state,
        list: state.list.map(t => ({...t, completed: action.completed}))
      };

    case TodosActionTypes.SetFilter:
      return {
        ...state,
        filter: action.filter
      };

    default:
      return state;
  }
}
