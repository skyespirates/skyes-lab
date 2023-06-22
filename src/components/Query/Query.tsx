import { useRef, useState } from "react";
import { useGetTodo } from "../../hooks/useTodos";

const Query = () => {
  const [id, setId] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, isLoading, error } = useGetTodo(id);

  const handleClick = () => {
    if (inputRef.current) {
      setId(parseInt(inputRef.current?.value));
    }
  };

  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="">
        {error instanceof Error && (
          <div>
            <p>
              {error.message}
              <br />
              There is no todo item with id: {id}
            </p>
          </div>
        )}
        <p>{isLoading ? "Loading..." : JSON.stringify(data)}</p>
        <p>Current Id: {id}</p>
        <div className="flex">
          <input
            ref={inputRef}
            min="1"
            className="border-2 border-blue-500 outline-none px-2"
            type="number"
          />
          <button
            className="border-2 border-blue-500 bg-blue-500 text-white px-4 py-1"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Query;

// REACT -> process.env.REACT_SOMETHING
// VITE -> import.meta.env.VITE_SOMETHING
