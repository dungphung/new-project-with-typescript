import { ActionCreator, Dispatch } from "redux";

import { axios } from "../../utils";
import { Todo, TodoActionKeys as keys, setTodoType, addTodoType, removeTodoType } from "../models/todo";

const setListTodo: ActionCreator<setTodoType> = (listTodos: Todo[]) => {
  return {
    type: keys.SET_LIST_TODO,
    payload: listTodos
  };
};

const getListTodo = () => {
  return (dispatch: Dispatch<setTodoType>) => {
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
};

const addTodo: ActionCreator<addTodoType> = (todo: Todo) => {
  return {
    type: keys.ADD_TODO,
    payload: todo
  };
};

const removeTodo: ActionCreator<removeTodoType> = (id: number) => {
  return {
    type: keys.REMOVE_TODO,
    payload: id
  };
};

const postTodo = (todo: Todo) => {
  return (dispatch: Dispatch<addTodoType>) => {
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
};

export { postTodo, removeTodo, addTodo, getListTodo, setListTodo };
