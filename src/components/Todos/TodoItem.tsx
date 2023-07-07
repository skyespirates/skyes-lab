import { useDispatch } from 'react-redux'
import { toggleCompleted, deleteTodo } from '../../slices/todoSlice'

type PropsType = {
  id: string
  todo: string
  completed: boolean
}

const TodoItem = ({ id, todo, completed }: PropsType) => {
  const dispatch = useDispatch()
  return (
    <li
      className={`px-2 py-1 border border-blue-400 flex justify-between items-center ${
        completed ? 'bg-gray-200' : ''
      }`}
      id={id}
    >
      <span className={`${completed ? 'line-through' : ''}`}>{todo}</span>{' '}
      <span className='flex gap-1'>
        <button
          onClick={() => dispatch(toggleCompleted(id))}
          className='py-1 px-3 inline-block border rounded bg-blue-200 hover:bg-blue-300'
        >
          v
        </button>{' '}
        <button
          onClick={() => dispatch(deleteTodo(id))}
          className='py-1 px-3 inline-block border rounded bg-red-200 hover:bg-red-300'
        >
          x
        </button>
      </span>
    </li>
  )
}

export default TodoItem
