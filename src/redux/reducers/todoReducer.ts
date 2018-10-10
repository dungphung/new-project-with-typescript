import { SET_LIST_TODO, ADD_TODO, REMOVE_TODO } from "../actions/todoAction";
import update from "react-addons-update";

interface IState {
  listTodos: Array<{}>;
}
const initialState = {
  listTodos: []
};

export default function todoReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LIST_TODO:
      return setListTodo(state, action);
    case ADD_TODO:
      return addTodo(state, action);

    case REMOVE_TODO:
      return removeTodo(state, action);
    default:
      return state;
  }
}

export function setListTodo(state: IState, { payload }: any) {
  return update(state, {
    listTodos: { $set: payload }
  });
}

export function addTodo(state: IState, { payload }: any) {
  return update(state, {
    listTodos: { $push: [payload] }
  });
}

export function removeTodo(state: IState, { payload }: any) {
  const index = state.listTodos.findIndex((todo: any) => todo.id === payload);
  return update(state, {
    listTodos: { $splice: [[index, 1]] }
  });
}
