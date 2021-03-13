import React, { createContext, useReducer } from "react"

// 3. Create the AppReducer
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      }
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      }
    default:
      return state
  }
}

// First create the intial state
const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "Shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
}

export const AppContext = createContext()

// 2. Create the AppProvider which wraps the components we want to pass the state to
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
