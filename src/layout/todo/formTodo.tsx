import * as React from "react";

interface IState {
  title: string;
  id: number;
}

interface IProps {
  addItem(todo: any): void;
}

export default class FormTodo extends React.Component<IProps, IState> {
  public inputElement: any = null;
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      id: Date.now()
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputElement = null;
  }

  public onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      title: e.target.value,
      id: Date.now()
    });
  }

  public onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.target.value === "") {
      return;
    }

    const item = { ...this.state };

    this.setState(
      {
        id: 0,
        title: ""
      },
      () => {
        this.props.addItem(item);
      }
    );
  }

  public componentDidMount() {
    this.inputElement.focus();
  }

  public render() {
    return (
      <div className="todoListMain">
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="task"
            ref={ref => {
              this.inputElement = ref;
            }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <button type="sbumit"> Add Task</button>
        </form>
      </div>
    );
  }
}
