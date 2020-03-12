import Todo from "../models/Todo";

function saveTodos(todos: Todo[]) {
  localStorage.todos = JSON.stringify(todos);
}

function generateNextId(): number {
  const nextId = JSON.parse(localStorage.nextId || '0' ) + 1;
  localStorage.nextId = nextId;
  return nextId;
}

export function getAll(): Todo[] {
  return JSON.parse(localStorage.todos || '[]');
}

export function create(title: string): Todo {
  const todo = { id: generateNextId(), title, completed: false };

  const todos = getAll();
  todos.push(todo);
  saveTodos(todos);

  return todo;
}

export function update(id: number, changes: Partial<Todo>): Todo {
  const todos = getAll();
  const todo = todos.find(t => t.id === id) as Todo;
  Object.assign(todo, changes);
  saveTodos(todos);
  return todo;
}

export function destroy(id: number) {
  const todos = getAll();
  saveTodos(todos.filter(t => t.id !== id));
}
