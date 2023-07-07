import { ChangeEvent, useReducer } from 'react'

const initState = { text: '' }

const enum REDUCER_ACTION_TYPE {
  USER_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload?: string
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.USER_INPUT:
      return { ...state, text: action.payload ?? '' }
    default:
      throw new Error()
  }
}

const Input = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const handleChange = (events: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.USER_INPUT,
      payload: events.target.value,
    })
  }
  return (
    <div>
      <input
        type='text'
        onChange={handleChange}
      />
      ;<p>{state.text}</p>
    </div>
  )
}

export default Input
