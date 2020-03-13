import Todo from "../models/Todo";
import VisibilityFilter from "../models/VisibilityFilter";

export default interface TodosState {
  list: Todo[];
  filter: VisibilityFilter;
}
