import { useAddTodo } from "../../context/TodoContext";
import { useRef } from "react";

const TodoForm = () => {
  const todoInput = useRef<HTMLInputElement>(null);
  const { addTodo } = useAddTodo();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (todoInput.current !== null && todoInput.current.value.trim() !== "") {
      addTodo(todoInput.current?.value as string);
      todoInput.current.value = "";
    }
  };
  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <input
        className="px-2 border-2 border-blue-700 rounded outline-none flex-grow"
        type="text"
        placeholder="Add todo..."
        ref={todoInput}
      />
      <button className="text-base px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
