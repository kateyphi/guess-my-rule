import React, {Component} from 'react'

const defaultState = {
  currentInput: ''
}

export default class AddInput extends Component {
  constructor () {
    super()
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

 handleSubmit (evt) {
      evt.preventDefault()
      this.props.inputNumber(this.state.currentInput)
      this.setState(defaultState)
      console.log(this.state)
  }

  render () {
    return (
    <form id='input-form' onSubmit={this.handleSubmit} autoComplete='off'>
      <input name='currentInput' type='text' autoComplete="off" onChange={this.handleChange} value={this.state.currentInput} />
      <button type='submit'>Pass it through the machine!</button>
    </form>
    )
  }
}