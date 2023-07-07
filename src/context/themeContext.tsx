import { createContext, useReducer } from 'react'

// stateType
// actionType
// initialState
// const BarContext = createContext(initialValue)
// reducer function
/*
 function reducer(state, action) {
    switch(action.type) {
        case x:
            return {...state, etc}
        default:
            return state;
    }
 }

*/
// Provider
/* 
 const BarProvider = (children) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <BarContext.Provider value={{state, dispatch}}>
        </BarContext.Provider>
    )
 }
*/

type StateType = {
  theme: 'light' | 'dark'
}

type ActionType = {
  type: 'THEME'
}

const initialState: StateType = {
  theme: 'light',
}

type Reducer<S, A> = (state: S, action: A) => S

const reducer: Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case 'THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}

export const ThemeContext = createContext<{
  state: StateType
  dispatch: React.Dispatch<ActionType>
}>({ state: initialState, dispatch: () => {} })
type ChildrenType = {
  children: React.ReactNode
}
export const ThemeProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
}
