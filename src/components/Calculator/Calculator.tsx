import { useContext, useState } from "react";

import Button from "../Button/Button";

// import {
//   useFetchChain, useFetchAsync, useAxiosAsyncuseAxiosChain,
// } from "./hooks/useGetData";

import { ThemeContext } from "../../context/themeContext";

// import Counter from "./components/Counter/Counter";
// import Input from "./components/Input/Input";
// import Todo from "./components/Todo/Todo";
// import { TodoProvider } from "./context/TodoContext";
// import Parent from "./components/Callbacks/Parent";

// import { useAxiosChain } from "../../hooks/useGetData";

type Buttons = { name: string }[];

const buttons: Buttons = [
  { name: "C" },
  { name: "%" },
  { name: "/" },
  { name: "*" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "-" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "+" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "=" },
  { name: "." },
  { name: "0" },
];

const Calculator = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  // const { data, isLoading, isError } = useAxiosChain(import.meta.env.VITE_URL);
  // console.log(data, isLoading, isError);

  const changeTheme = () => {
    const body = document.querySelector("body")!;
    body.classList.toggle("dark-theme");
    dispatch({ type: "THEME" });
  };
  return (
    <div className="relative mt-4 bg-slate-300 w-[280px] m-auto  p-[1rem] flex flex-col  items-center gap-[1rem] text-2xl rounded shadow-[0_4px_6px_4px_#ddd]">
      <i
        onClick={changeTheme}
        className={`${
          state.theme === "dark"
            ? "ri-sun-fill text-gray-600 hover:bg-gray-200"
            : "ri-moon-fill text-gray-600 hover:bg-gray-200"
        } w-8 h-8 rounded-full flex justify-center items-center cursor-pointer`}
      ></i>
      <div className="w-full flex flex-col gap-2">
        <div className="h-[80px] text-right flex flex-col justify-between bg-gray-100 p-2">
          <h1>{input}</h1>
          <h1>{answer}</h1>
        </div>
        <div className="keyboard grid grid-cols-4 gap-1">
          {buttons.map((btn) => (
            <Button
              key={btn.name}
              text={btn.name}
              input={input}
              setInput={setInput}
              setAnswer={setAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

/*

<button
            className={`${isAnswered ? "answered" : ""} btn-secondary`}
            disabled={isAnswered}
            onClick={backspace}
          >
            &#8592;
          </button>
          <button className="btn-secondary" onClick={clear}>
            C
          </button>
          <button
            className={`${isAnswered ? "answered" : ""} btn-primary`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            /
          </button>
          <button
            className={`${isAnswered ? "answered" : ""} btn-primary`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            *
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            7
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            8
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            9
          </button>
          <button
            className={`${isAnswered ? "answered" : ""} btn-primary`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            -
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            4
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            5
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            6
          </button>
          <button
            className={`${isAnswered ? "answered" : ""} btn-primary`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            +
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            1
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            2
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            3
          </button>
          <button
            className={`samadengan ${isAnswered ? "answered" : ""} btn-primary`}
            disabled={isAnswered}
            onClick={result}
          >
            =
          </button>
          <button
            className={`${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            0
          </button>
          <button
            className={`nol ${isAnswered ? "answered" : ""}`}
            disabled={isAnswered}
            onClick={handleClick}
          >
            .
          </button>


*/
