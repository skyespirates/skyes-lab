import { useReducer } from 'react'
import { RiSubtractFill, RiAddFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const initState = { count: 0 }

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      throw new Error()
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeIn' }}
      className='relative w-96 h-52 mx-auto mt-8'
    >
      <h2 className='absolute top-0 left-[50%] -translate-x-[50%] text-9xl bg-[#7F59F6] w-48 h-48 rounded-full flex justify-center items-center text-gray-200 hover:scale-[1.1] transition-all'>
        {state.count}
      </h2>
      <button
        className='absolute left-[50%] -translate-x-[125%]  bottom-0 text-base bg-[#F67F59] rounded-full text-white hover:rotate-180 hover:scale-[1.1] transition-all'
        onClick={decrement}
      >
        <RiSubtractFill className='text-6xl' />
      </button>
      <button
        className='absolute left-[50%] translate-x-[25%] bottom-0 text-base bg-[#59F67F] rounded-full text-white hover:-rotate-90 hover:scale-[1.1] transition-all'
        onClick={increment}
      >
        <RiAddFill className='text-6xl' />
      </button>
    </motion.div>
  )
}

export default Counter
