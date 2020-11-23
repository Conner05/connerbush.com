import React, { useState, useReducer, useEffect } from 'react'
import { BlogWrapper } from '../shared'

const statuses = {
  pending: { value: "pending", message: "" },
  entered: { value: "entered", message: "Welcome!" },
  left: { value: "left", message: "Goodbye!" },
}

function Door1() {
  const [status, setStatus] = useState(statuses.pending)

  return (
    <BlogWrapper>
      {status.value === statuses.entered.value ? (
        <button aria-label="Leave" onClick={() => setStatus(statuses.left)}>
          Leave
        </button>
      ) : (
        <button aria-label="Enter" onClick={() => setStatus(statuses.entered)}>
          Enter
        </button>
      )}
      <p aria-label="message">{status.message}</p>
    </BlogWrapper>
  )
}

function Door2() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "pending":
        return statuses.pending
      case "entered":
        return statuses.entered
      case "left":
        return statuses.left
      default:
        return statuses.pending
    }
  }
  const [status, dispatch] = useReducer(reducer, statuses.pending)

  return (
    <BlogWrapper>
      {status.value === statuses.entered.value ? (
        <button aria-label="Leave" onClick={() => dispatch({ type: "left" })}>
          Leave
        </button>
      ) : (
        <button aria-label="Enter" onClick={() => dispatch({ type: "entered" })}>
          Enter
        </button>
      )}
      <p aria-label="message">{status.message}</p>
    </BlogWrapper>
  )
}

function Counter1() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  useEffect(() => {
    const tickInterval = setInterval(() => {
      setCount((currentCount) => currentCount + step)
    }, 1000)
    return () => clearInterval(tickInterval)
  }, [step])

  const reset = () => {
    setStep(1)
    setCount(0)
  }

  return (
    <BlogWrapper>
      <span>{count}</span>
      <br />
      <button onClick={() => setStep((currentStep) => currentStep + 1)}>Step</button>
      {'   '}
      <button onClick={reset}>Reset</button>
    </BlogWrapper>
  )
}

function reducer({ count, step }, action) {
  switch (action.type) {
    case "tick":
      return { count: count + step, step }
    case "step":
      return { count, step: step + 1 }
    case "reset":
      return { count: 0, step: 1 }
    default:
      return { count, step }
  }
}
function Counter2() {
  const initialState = { count: 0, step: 1 }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  useEffect(() => {
    const tickInterval = setInterval(() => {
      dispatch({ type: "tick" })
    }, 1000)
    return () => clearInterval(tickInterval)
  }, [])

  const reset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <BlogWrapper>
      <span>{count}</span>
      <br />
      <button onClick={() => dispatch({ type: "step" })}>Step</button>
      {'   '}
      <button onClick={reset}>Reset</button>
    </BlogWrapper>
  )
}

export { Door1, Door2, Counter1, Counter2 }