
// Action Types

enum TodosActionTypes {
  Create = '[TODOS] Create',
  Toggle = '[TODOS] Toggle',
  Destroy = '[TODOS] Destroy'
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

export type TodosActions = CreateTodo | ToggleTodo | DestroyTodo;

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
