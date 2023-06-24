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
import { TodoProvider } from "./context/TodoContext.tsx";

// Pages
import Calculator from "./components/Calculator/Calculator.tsx";
import Counter from "./components/Counter/Counter.tsx";
import TodoList from "./components/Todo/Todo.tsx";
import Animation from "./components/Animation/Animation.tsx";
import Letters from "./components/Letters/Letters.tsx";
import Spring from "./components/Spring/Spring.tsx";
import Query from "./components/Query/Query.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Background from "./components/Background/Background.tsx";
import Rehofo from "./components/RHF/RHF.tsx";
import Pagination from "./components/Pagination/Pagination.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Calculator />} />
      <Route path="todo" element={<TodoList />} />
      <Route path="counter" element={<Counter />} />
      <Route path="animation" element={<Animation />} />
      <Route path="letters" element={<Letters />} />
      <Route path="spring" element={<Spring />} />
      <Route path="query" element={<Query />} />
      <Route path="hero" element={<Hero />} />
      <Route path="background" element={<Background />} />
      <Route path="form" element={<Rehofo />} />
      <Route path="pagination" element={<Pagination />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </TodoProvider>
  </React.StrictMode>
);
