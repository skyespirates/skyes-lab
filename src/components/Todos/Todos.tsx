import { useRef } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { selectTodo, addTodo } from "../../slices/todoSlice";

const Todos = () => {
  const { todos } = useSelector(selectTodo);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = "";
    }
  };
  return (
    <div className="w-80 mx-auto">
      <div className="flex gap-2 py-2">
        <input
          ref={inputRef}
          className="border outline-none py-1 px-2 rounded-md flex-1 inline-block"
          type="text"
        />
        <button
          onClick={handleClick}
          className="py-1 px-3 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          +
        </button>
      </div>
      <ul className=" w-full flex flex-col gap-1">
        {todos.map(({ id, todo, completed }) => (
          <TodoItem key={id} id={id} todo={todo} completed={completed} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
