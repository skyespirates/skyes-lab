import { ChangeEvent, useCallback, useState } from 'react'
import Children from './Children'

const Parent = () => {
  const [count, setCount] = useState(0)
  const [showData, setShowData] = useState(false)
  const [num, setNum] = useState(1)
  const [fib, setFib] = useState<number>(num)

  const fibFunc = (num: number): number => {
    if (num < 2) return num
    return fibFunc(num - 1) + fibFunc(num - 2)
  }

  const GetCounterData = useCallback(() => {
    return [count * 1, count * 2, count * 3]
  }, [count])
  const GetRandomData = () => {
    const random = Math.floor(Math.random() * 10)
    return [random * 1, random * 2, random * 3]
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numb = +e.target.value
    setNum(numb)
  }
  const handleClick = () => {
    const fibo = fibFunc(num)
    setFib(fibo)
  }
  return (
    <div>
      <div>
        <h1>{fib}</h1>
        <input
          type='number'
          placeholder='suku ke-n deret fibonacci'
          value={num}
          onChange={handleChange}
        />
        <button onClick={handleClick}>generate</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      </div>
      <div>
        <button onClick={() => setShowData((prev) => !prev)}>{showData.toString()}</button>
      </div>
      <div>
        <Children getData={GetCounterData} />
      </div>
    </div>
  )
}

export default Parent
