// tslint:disable-next-line jsx-no-lambda
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "./routes";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/todo-page">Todo Page</Link>
            </li>
            <li>
              <Link to="/about-page">About Page</Link>
            </li>
          </ul>

          {routes.map((route: any, i: number) => (
            <Route
              path={route.path}
              render={props => <route.component {...props} routes={route.routes} key={i} exact={!!route.exact} />}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
