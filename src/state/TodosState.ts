import Todo from "../models/Todo";
import {getAll} from "../lib/persistence";
import VisibilityFilter, {mapLocationToFilter} from "../models/VisibilityFilter";

export default interface TodosState {
  todos: Todo[];
  filter: VisibilityFilter;
}

export const initialState: TodosState = {
  todos: getAll(),
  filter: mapLocationToFilter()
};
