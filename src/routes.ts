import { Home, About, Todo } from "./pages";
const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about-page",
    component: About
  },
  {
    path: "/todo-page",
    component: Todo
  }
];

export default routes;
