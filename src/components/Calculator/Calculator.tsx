import { MouseEvent, useContext, useState } from "react";

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
import "./style.css";
import { evaluate } from "mathjs";

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
  const [isAnswered, setIsAnswered] = useState(false);

  // const { data, isLoading, isError } = useAxiosChain(import.meta.env.VITE_URL);
  // console.log(data, isLoading, isError);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    setInput((prev) => prev + target.innerText);
  };
  const backspace = () => {
    setInput((prev) => prev.substring(0, prev.length - 1));
  };
  const clear = () => {
    setInput("");
    setAnswer("");
    setIsAnswered(false);
  };
  const result = () => {
    setIsAnswered(true);
    setAnswer(evaluate(input));
  };
  const changeTheme = () => {
    const body = document.querySelector("body")!;
    body.classList.toggle("dark-theme");
    dispatch({ type: "THEME" });
  };
  return (
    <div className="relative mt-4 bg-slate-200 w-[400px] m-auto min-h-screen p-[1rem] flex flex-col justify-center items-center gap-[2rem]">
      <i
        onClick={changeTheme}
        className={`ri-${
          state.theme === "dark" ? "moon" : "sun"
        }-fill change-theme`}
      ></i>
      <div className="box">
        <div className="screen">
          <h1 className="user__input">{input}</h1>
          <h1 className="answer">{answer}</h1>
        </div>
        <div className="keyboard">
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
