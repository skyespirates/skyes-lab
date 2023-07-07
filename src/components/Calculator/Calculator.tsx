import { useContext, useState } from 'react'

// import Button from "../Button/Button";

// shadcn ui library
import { Button } from '../ui/button'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'

// import {
//   useFetchChain, useFetchAsync, useAxiosAsyncuseAxiosChain,
// } from "./hooks/useGetData";

import { ThemeContext } from '../../context/themeContext'

// import Counter from "./components/Counter/Counter";
// import Input from "./components/Input/Input";
// import Todo from "./components/Todo/Todo";
// import { TodoProvider } from "./context/TodoContext";
// import Parent from "./components/Callbacks/Parent";

// import { useAxiosChain } from "../../hooks/useGetData";

type Buttons = { name: string }[]

const buttons: Buttons = [
  { name: 'C' },
  { name: '%' },
  { name: '/' },
  { name: '*' },
  { name: '7' },
  { name: '8' },
  { name: '9' },
  { name: '-' },
  { name: '4' },
  { name: '5' },
  { name: '6' },
  { name: '+' },
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '=' },
  { name: '.' },
  { name: '0' },
]

const Calculator = () => {
  const { state, dispatch } = useContext(ThemeContext)

  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')

  // const { data, isLoading, isError } = useAxiosChain(import.meta.env.VITE_URL);
  // console.log(data, isLoading, isError);

  const changeTheme = () => {
    const body = document.querySelector('body')!
    body.classList.toggle('dark-theme')
    dispatch({ type: 'THEME' })
  }
  const handleClick = () => {
    console.log('hello world!')
  }
  return (
    <div className='relative mt-4 bg-slate-300 w-[280px] m-auto  p-[1rem] flex flex-col  items-center gap-[1rem] text-2xl rounded shadow-[0_4px_6px_4px_#ddd]'>
      <Button
        onClick={handleClick}
        className='bg-blue-500 hover:bg-blue-600'
      >
        Click Me
      </Button>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Badge variant='outline'>Badge</Badge>

      {/* <i
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
      </div> */}
    </div>
  )
}

export default Calculator
