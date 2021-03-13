import React, { useState, useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { AppContext } from "../context/AppContext"

const ExpenseForm = () => {
  const { dispatch } = useContext(AppContext)

  const [name, setName] = useState("")
  const [cost, setCost] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    }

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-sm">
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              className="form-control"
              id="cost"
              required
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary mt-3">
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ExpenseForm
