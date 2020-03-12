
// Action Types

import VisibilityFilter from "../models/VisibilityFilter";

export enum TodosActionTypes {
  Create = '[TODOS] Create',
  Toggle = '[TODOS] Toggle',
  Update = '[TODOS] Update',
  Destroy = '[TODOS] Destroy',
  DestroyCompleted = '[TODOS] Destroy Completed',
  SyncAll = '[TODOS] Sync All',
  SetFilter = '[FILTER] Set Visibility Filter'
}

// Actions

interface CreateTodo {
  type: TodosActionTypes.Create;
  title: string;
}

interface ToggleTodo {
  type: TodosActionTypes.Toggle;
  id: number;
}

interface UpdateTodo {
  type: TodosActionTypes.Update;
  id: number;
  title: string;
}

interface DestroyTodo {
  type: TodosActionTypes.Destroy;
  id: number;
}

interface DestroyCompleted {
  type: TodosActionTypes.DestroyCompleted;
}

interface SyncAll {
  type: TodosActionTypes.SyncAll;
  completed: boolean;
}

interface SetFilter {
  type: TodosActionTypes.SetFilter;
  filter: VisibilityFilter;
}

export type TodosActions = CreateTodo | ToggleTodo | UpdateTodo | DestroyTodo | DestroyCompleted | SyncAll | SetFilter;

// Actions Creators

export function createTodo(title: string): TodosActions {
  return { type: TodosActionTypes.Create, title };
}

export function toggleTodo(id: number): TodosActions {
  return { type: TodosActionTypes.Toggle, id };
}

export function updateTodo(id: number, title: string): TodosActions {
  return { type: TodosActionTypes.Update, id, title };
}

export function destroyTodo(id: number): TodosActions {
  return { type: TodosActionTypes.Destroy, id };
}

export function destroyCompletedTodos(): TodosActions {
  return { type: TodosActionTypes.DestroyCompleted };
}

export function syncAllTodos(completed: boolean): TodosActions {
  return { type: TodosActionTypes.SyncAll, completed };
}

export function setFilter(filter: VisibilityFilter): TodosActions {
  return { type: TodosActionTypes.SetFilter, filter };
}
