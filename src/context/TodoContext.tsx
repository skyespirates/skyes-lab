import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  ReactElement,
} from "react";
import { nanoid } from "nanoid";

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

type StateType = {
  todos: TodoType[];
  done: TodoType[];
};

const initState: StateType = {
  todos: [
    { id: "aaaaaaa", text: "Swimming at pool", completed: false },
    { id: "bbbbb", text: "Running at track", completed: false },
  ],
  done: [
    { id: "cccc", text: "Playing basketball", completed: true },
    { id: "ddddd", text: "Playing football", completed: true },
  ],
};

const enum REDUCER_ACTION_TYPE {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nanoid(10), text: action.payload!, completed: false },
        ],
      };
    case REDUCER_ACTION_TYPE.DELETE_TODO:
      const merged = state.todos.concat(state.done);
      const todo = merged.find((td) => td.id === action.payload);
      if (todo!.completed) {
        return {
          ...state,
          done: state.done.filter((item) => todo?.id !== item.id),
        };
      } else {
        return {
          ...state,
          todos: state.todos.filter((item) => todo?.id !== item.id),
        };
      }

    // return {
    //   ...state,
    //   todos: state.todos.filter((todo) => todo.id !== action.payload),
    // };
    case REDUCER_ACTION_TYPE.TOGGLE_COMPLETED:
      const merge = state.todos.concat(state.done);

      const item = merge.find((td) => td.id === action.payload) as TodoType;

      if (item.completed) {
        return {
          ...state,
          todos: [...state.todos, { ...item, completed: false }],
          done: state.done.filter((td) => td.id !== action.payload),
        };
      } else {
        return {
          ...state,
          todos: state.todos.filter((td) => td.id !== action.payload),
          done: [{ ...item, completed: true }, ...state.done],
        };
      }

    // return {
    //   ...state,
    //   todos: state.todos.map(function (todo) {
    //     return todo.id === action.payload
    //       ? { ...todo, completed: !todo.completed }
    //       : todo;
    //   }),
    // };
    default:
      throw new Error();
  }
};

const useTodoContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addTodo = useCallback((text: string) => {
    dispatch({ type: REDUCER_ACTION_TYPE.ADD_TODO, payload: text });
  }, []);
  const deleteTodo = useCallback((id: string) => {
    dispatch({ type: REDUCER_ACTION_TYPE.DELETE_TODO, payload: id });
  }, []);
  const handleToggleTodo = useCallback((id: string) => {
    dispatch({ type: REDUCER_ACTION_TYPE.TOGGLE_COMPLETED, payload: id });
  }, []);

  return { state, addTodo, deleteTodo, handleToggleTodo };
};

type UseTodoContextType = ReturnType<typeof useTodoContext>;

const initContextState: UseTodoContextType = {
  state: initState,
  addTodo: () => {},
  deleteTodo: () => {},
  handleToggleTodo: () => {},
};

export const TodoContext = createContext<UseTodoContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

export const TodoProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <TodoContext.Provider value={useTodoContext(initState)}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom Hook
type UseAddTodoHookType = {
  addTodo: (text: string) => void;
};

export const useAddTodo = (): UseAddTodoHookType => {
  const { addTodo } = useContext(TodoContext);
  return { addTodo };
};

type UseDeleteTodoHookType = {
  deleteTodo: (id: string) => void;
};

export const useDeleteTodo = (): UseDeleteTodoHookType => {
  const { deleteTodo } = useContext(TodoContext);
  return { deleteTodo };
};

type UseTodoItems = { todos: TodoType[]; done: TodoType[] };

export const useTodoItems = (): UseTodoItems => {
  const {
    state: { todos, done },
  } = useContext(TodoContext);
  return { todos, done };
};

type UseToggleCompleted = {
  handleToggleTodo: (id: string) => void;
};

export const useToggleCompleted = (): UseToggleCompleted => {
  const { handleToggleTodo } = useContext(TodoContext);
  return { handleToggleTodo };
};
