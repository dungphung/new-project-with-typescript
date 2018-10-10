import * as React from "react";

interface IProps {
  items: Array<{
    id: number;
    title: string;
  }>;
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
