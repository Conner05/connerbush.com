import React, { useState } from 'react'

function PrettyBorder(props) {
  return (
    <div style={{ border: '5px solid purple', margin: 20, padding: 20, fontSize: 16 }}>
      {props.children}
    </div>
  )
}

const Message = (props) => <PrettyBorder>{props.content}</PrettyBorder>
const GreetingMessage = () => <Message content='Hello there!' />
const GoodbyeMessage = () => <Message content='See you later!' />

const Inside = (props) => <button onClick={props.handleClick}>Leave</button>
const Outside = (props) => <button onClick={props.handleClick}>Enter</button>
const Reset = (props) => <button onClick={props.handleClick}>Reset</button>

function Sample() {
  const STATUS = { neverEntered: 'neverEntered', entered: 'entered', left: 'left' }
  const [ status, setStatus ] = useState(STATUS.neverEntered)

  const handleEnter = () => setStatus(STATUS.entered)
  const handleLeave = () => setStatus(STATUS.left)
  const handleReset = () => setStatus(STATUS.neverEntered)

  let message
  let button = <Outside handleClick={handleEnter} />
  if (status === STATUS.entered) {
    message = <GreetingMessage />
    button = <Inside handleClick={handleLeave} />
  } else if (status === STATUS.left) {
    message = <GoodbyeMessage />
    button = <Outside handleClick={handleEnter} />
  }

  return (
    <div style={{padding: '20px', backgroundColor: 'lightgray', borderRadius: '20px', color: 'black'}}>
      {button}{ '   ' }<Reset handleClick={handleReset} />
      {message}
    </div>
  )
}

export { Sample }
