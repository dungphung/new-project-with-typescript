import * as React from "react";
import { IState as ITodo } from "./formTodo";

interface IProps {
  items: ITodo[];
}

const TodoItems: React.SFC<IProps> = ({ items }) => {
  if (!items || (items && !items.length)) {
    return <p>Chưa có nhiệm vụ nào cả!!!</p>;
  }
  return (
    <ul>
      {items.map(item => {
        return <li key={item.id}>+ {item.title}</li>;
      })}
    </ul>
  );
};

export default TodoItems;
