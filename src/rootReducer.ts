import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from './slices/counterSlice'
import todoReducer from './slices/todoSlice'
import postReducer from './slices/postSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  post: postReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
