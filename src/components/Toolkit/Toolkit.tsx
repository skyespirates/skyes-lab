import {
  decrement,
  increment,
  incrementByAmount,
  reset,
  selectCounter,
} from '../../slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useRef } from 'react'

const Toolkit = () => {
  const { title, value } = useSelector(selectCounter)
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (inputRef) {
      const payload = Number(inputRef.current!.value)
      dispatch(incrementByAmount(payload))
    }
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col gap-2'>
        <h4 className='text-center'>{title}</h4>
        <div className='border-2 px-9 py-16 rounded-md flex items-center gap-4 relative'>
          <button
            onClick={() => dispatch(decrement())}
            className='h-9 w-9 font-semibold rounded-md bg-gray-200 hover:bg-gray-300'
          >
            -
          </button>
          <span>{value}</span>
          <button
            onClick={() => dispatch(increment())}
            className='h-9 w-9 font-semibold rounded-md bg-gray-200 hover:bg-gray-300'
          >
            +
          </button>
          <button
            onClick={() => dispatch(reset())}
            className='absolute  h-9 px-2 bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-gray-200 hover:bg-gray-300'
          >
            reset
          </button>
        </div>
        <div className='flex gap-2'>
          <input
            className='border-2 invalid:border-red-500 flex-1 outline-none rounded px-2 py-1 inline-block w-14'
            type='number'
            min='-100'
            max='100'
            ref={inputRef}
          />
          <button
            onClick={handleClick}
            className='h-9 w-9 font-semibold rounded-md bg-gray-200 hover:bg-gray-300'
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
