import update from "react-addons-update";
import {
  TodoActionKeys as keys,
  TStateTodoReducer as TState,
  addTodoType,
  setTodoType,
  removeTodoType
} from "../models/todo";

const initialState: TState = {
  listTodos: []
};

export default function todoReducer(state = initialState, action: setTodoType & addTodoType & removeTodoType): TState {
  switch (action.type) {
    case keys.SET_LIST_TODO:
      return setListTodo(state, action);

    case keys.ADD_TODO:
      return addTodo(state, action);

    case keys.REMOVE_TODO:
      return removeTodo(state, action);
    default:
      return state;
  }
}

export function setListTodo(state: TState, { payload }: setTodoType): TState {
  return update(state, {
    listTodos: { $set: payload }
  });
}

export function addTodo(state: TState, { payload }: addTodoType): TState {
  return {
    listTodos: [...state.listTodos, payload]
  };
}

export function removeTodo(state: TState, { payload }: removeTodoType): TState {
  const filterState = state.listTodos.filter(todo => todo.id !== payload);
  return {
    listTodos: [...filterState]
  };
}
