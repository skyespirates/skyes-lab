import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from "./App.tsx";
import './index.css'
import { ThemeProvider } from './context/themeContext.tsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import App from './App.tsx'
import { TodoProvider } from './context/TodoContext.tsx'

// Pages
import Calculator from '@components/Calculator/Calculator.tsx'
const Counter = React.lazy(() => import('@components/Counter/Counter.tsx'))
const TodoList = React.lazy(() => import('@components/Todo/Todo.tsx'))
const Observer = React.lazy(() => import('@components/Observer/Observer.tsx'))
const InfiniteScroll = React.lazy(() => import('@components/Infinite/InfiniteScroll.tsx'))
const Animation = React.lazy(() => import('@components/Animation/Animation.tsx'))
const Letters = React.lazy(() => import('@components/Letters/Letters.tsx'))
const Spring = React.lazy(() => import('@components/Spring/Spring.tsx'))
const Query = React.lazy(() => import('@components/Query/Query.tsx'))
const QueryDetails = React.lazy(() => import('@components/Query/QueryDetails.tsx'))
const Hero = React.lazy(() => import('@components/Hero/Hero.tsx'))
const Background = React.lazy(() => import('@components/Background/Background.tsx'))
const Rehofo = React.lazy(() => import('@components/RHF/RHF.tsx'))
const Pagination = React.lazy(() => import('@components/Pagination/Pagination.tsx'))
const Toolkit = React.lazy(() => import('@components/Toolkit/Toolkit.tsx'))
const Todos = React.lazy(() => import('@components/Todos/Todos.tsx'))
const AsyncThunk = React.lazy(() => import('@components/AsyncThunk/AsyncThunk.tsx'))
const LazyLoad = React.lazy(() => import('@components/LazyLoad/LazyLoad.tsx'))

// Provider
import { Provider } from 'react-redux'
// Store
import store from './store.ts'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}
    >
      <Route
        index={true}
        path='/'
        element={<Calculator />}
      />
      <Route
        path='todo'
        element={
          <React.Suspense fallback='Loading...'>
            <TodoList />
          </React.Suspense>
        }
      />
      <Route
        path='asyncThunk'
        element={
          <React.Suspense fallback='Loading...'>
            <AsyncThunk />
          </React.Suspense>
        }
      />
      <Route
        path='lazyLoad'
        element={
          <React.Suspense fallback='Loading...'>
            <LazyLoad />
          </React.Suspense>
        }
      />
      <Route
        path='infinite'
        element={
          <React.Suspense fallback='Loading...'>
            <InfiniteScroll />
          </React.Suspense>
        }
      />
      <Route
        path='observer'
        element={
          <React.Suspense fallback='Loading...'>
            <Observer />
          </React.Suspense>
        }
      />
      <Route
        path='counter'
        element={
          <React.Suspense fallback='Loading...'>
            <Counter />
          </React.Suspense>
        }
      />
      <Route
        path='animation'
        element={
          <React.Suspense fallback='Loading...'>
            <Animation />
          </React.Suspense>
        }
      />
      <Route
        path='letters'
        element={
          <React.Suspense fallback='Loading...'>
            <Letters />
          </React.Suspense>
        }
      />
      <Route
        path='spring'
        element={
          <React.Suspense fallback='Loading...'>
            <Spring />
          </React.Suspense>
        }
      />
      <Route
        path='query'
        element={
          <React.Suspense fallback='Loading...'>
            <Query />
          </React.Suspense>
        }
      />
      <Route
        path='query/:id'
        element={
          <React.Suspense fallback='Loading...'>
            <QueryDetails />
          </React.Suspense>
        }
      />
      <Route
        path='hero'
        element={
          <React.Suspense fallback='Loading...'>
            <Hero />
          </React.Suspense>
        }
      />
      <Route
        path='background'
        element={
          <React.Suspense fallback='Loading...'>
            <Background />
          </React.Suspense>
        }
      />
      <Route
        path='form'
        element={
          <React.Suspense fallback='Loading...'>
            <Rehofo />
          </React.Suspense>
        }
      />
      <Route
        path='pagination'
        element={
          <React.Suspense fallback='Loading...'>
            <Pagination />
          </React.Suspense>
        }
      />
      <Route
        path='toolkit'
        element={
          <React.Suspense fallback='Loading...'>
            <Toolkit />
          </React.Suspense>
        }
      />
      <Route
        path='todos'
        element={
          <React.Suspense fallback='Loading...'>
            <Todos />
          </React.Suspense>
        }
      />
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoProvider>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen />
          </QueryClientProvider>
        </ThemeProvider>
      </TodoProvider>
    </Provider>
  </React.StrictMode>,
)
