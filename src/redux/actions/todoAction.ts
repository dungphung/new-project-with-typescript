import { axios } from "../../utils";
export const SET_LIST_TODO = "todo/set-list-todo";
export const ADD_TODO = "todo/add-todo";
export const REMOVE_TODO = "todo/remove-todo";

export function setListTodo(listTodo: any) {
  return {
    type: SET_LIST_TODO,
    payload: listTodo
  };
}

export function getListTodo() {
  return (dispatch: any) => {
    axios
      .get("/posts")
      .then(response => {
        return response.data;
      })
      .then(data => {
        dispatch(setListTodo(data));
      })
      .catch(e => {
        dispatch(setListTodo({}));
      });
  };
}

export function addTodo(todo: any) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function postTodo(todo: any) {
  return (dispatch: any) => {
    axios
      .post("/posts", {
        params: {
          ...todo
        }
      })
      .then(response => {
        return response.data;
      })
      .then(data => {
        dispatch(addTodo(data.params));
      })
      .catch(e => {
        dispatch(addTodo(todo));
      });
  };
}

export function removeTodo(id: any) {
  return {
    type: REMOVE_TODO,
    payload: id
  };
}
