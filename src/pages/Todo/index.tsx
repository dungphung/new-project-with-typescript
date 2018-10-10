import * as React from "react";

import { FormTodo, TodoItem } from "../../layout/todo";
import { connectAutoDispatch } from "../../utils";
import { getListTodo, postTodo } from "../../redux/actions";

interface Item {
  id: number;
  title: string;
}

interface IProps {
  listTodos: Array<Item>;
  getListTodo(): void;
  postTodo(item: Item): void;
}

interface IState {
  listTodos: Array<Item>;
}

class TodoApp extends React.Component<IProps, IState> {
  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    return {
      listTodos: nextProps.listTodos
    };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      listTodos: []
    };

    this.addItem = this.addItem.bind(this);
  }

  public componentDidMount() {
    this.props.getListTodo();
  }

  public addItem(item: Item) {
    this.props.postTodo(item);
  }

  public render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoItem items={this.state.listTodos} />
        <FormTodo addItem={this.addItem} />
      </div>
    );
  }
}

export default connectAutoDispatch(
  (state: any) => ({
    listTodos: state.TodoReducer.listTodos
  }),
  { getListTodo, postTodo }
)(TodoApp);
