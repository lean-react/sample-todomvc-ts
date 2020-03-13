import Todo from "../models/Todo";
import {getAll} from "../lib/persistence";
import VisibilityFilter, {mapLocationToFilter} from "../models/VisibilityFilter";

export default interface TodosState {
  list: Todo[];
  filter: VisibilityFilter;
}

export const initialState: TodosState = {
  list: getAll(),
  filter: mapLocationToFilter()
};
