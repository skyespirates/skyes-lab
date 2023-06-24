import { useDeleteTodo, useToggleCompleted } from "../../context/TodoContext";
import { RiCheckFill, RiDeleteBin7Fill } from "react-icons/ri";

type TodoItemProps = {
  id: string;
  todo: string;
  completed: boolean;
};
const TodoItem = ({ id, todo, completed }: TodoItemProps) => {
  const { deleteTodo } = useDeleteTodo();
  const { handleToggleTodo } = useToggleCompleted();
  return (
    <li className="bg-slate-50 w-full flex justify-between items-center p-2 rounded relative hover:shadow-[0_4px_6px_#bbb] hover:-translate-y-[1px] transition-all">
      <span className={`${completed ? "text-red-600" : ""}`}>{todo}</span>
      <span className="flex gap-2">
        <button
          className="text-base bg-inherit hover:bg-inherit hover:bg-slate-300 w-7 h-7 rounded-full flex justify-center items-center"
          onClick={() => handleToggleTodo(id)}
        >
          <RiCheckFill className="text-yellow-500 text-xl" />
        </button>
        <button
          className="text-base bg-inherit hover:bg-inherit hover:bg-slate-300 w-7 h-7 rounded-full flex justify-center items-center"
          onClick={() => deleteTodo(id)}
        >
          <RiDeleteBin7Fill className="text-red-700 text-xl" />
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
