
// Action Types

export enum TodosActionTypes {
  Create = '[TODOS] Create',
  Toggle = '[TODOS] Toggle',
  Destroy = '[TODOS] Destroy',
  DestroyCompleted = '[TODOS] Destroy Completed',
  SyncAll = '[TODOS] Sync All'
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

export type TodosActions = CreateTodo | ToggleTodo | DestroyTodo | DestroyCompleted | SyncAll;

// Actions Creators

export function createTodo(title: string): TodosActions {
  return { type: TodosActionTypes.Create, title };
}

export function toggleTodo(id: number): TodosActions {
  return { type: TodosActionTypes.Toggle, id };
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
