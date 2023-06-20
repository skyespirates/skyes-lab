import { motion } from "framer-motion";

import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import { useTodoItems } from "../../context/TodoContext";

const TodoList = () => {
  const { todos } = useTodoItems();
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="flex flex-col gap-4 w-96 mx-auto mt-8 bg-gray-200 p-8 shadow-[0_8px_12px_#ddd]"
    >
      <TodoForm />
      <ul className="flex flex-col gap-2">
        {todos.map((td) => (
          <TodoItem
            key={td.id}
            id={td.id}
            todo={td.text}
            completed={td.completed}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default TodoList;
