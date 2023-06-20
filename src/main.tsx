import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/themeContext.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.tsx";
import Calculator from "./components/Calculator/Calculator.tsx";
import Counter from "./components/Counter/Counter.tsx";
import TodoList from "./components/Todo/Todo.tsx";
import Animation from "./components/Animation/Animation.tsx";
import { TodoProvider } from "./context/TodoContext.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Calculator />} />
      <Route path="todo" element={<TodoList />} />
      <Route path="counter" element={<Counter />} />
      <Route path="animation" element={<Animation />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </TodoProvider>
  </React.StrictMode>
);
