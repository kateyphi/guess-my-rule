import React from 'react'


const InputOutput = (props) => {
  const input = +props.input
  return (
    <React.Fragment>
      <div className="item">{input}</div>
      <div className="item">{props.fxn(input)}</div>
    </React.Fragment>
  )
}

export default InputOutput