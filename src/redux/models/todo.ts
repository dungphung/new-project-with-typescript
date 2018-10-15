enum TodoActionKeys {
  SET_LIST_TODO = "todo/set-list-todo",
  ADD_TODO = "todo/add-todo",
  REMOVE_TODO = "todo/remove-todo"
}

type actionType = {
  type: string;
  payload: number | Todo[] | Todo;
};

type removeTodoType = {
  type: TodoActionKeys.REMOVE_TODO;
  payload: number;
};

type setTodoType = {
  type: TodoActionKeys.SET_LIST_TODO;
  payload: Todo[];
};

type addTodoType = {
  type: TodoActionKeys.ADD_TODO;
  payload: Todo;
};

type Todo = {
  id: number;
  title: string;
};

type TStateTodoReducer = {
  listTodos: Todo[];
};

export { actionType, Todo, TodoActionKeys, TStateTodoReducer, setTodoType, addTodoType, removeTodoType };
