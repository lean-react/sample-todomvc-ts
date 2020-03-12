import Todo from "../models/Todo";
import {getAll} from "../lib/persistence";

export default interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: getAll()
};
