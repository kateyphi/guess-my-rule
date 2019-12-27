import React, {Component} from 'react'
const {create, all} = require('mathjs')
const config = {}
const math = create(all, config)

const defaultState = {
  currentInput: '',
  correct: ''
}

export default class GuessRule extends Component {
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
      this.setState({
        correct: this.guessRule(this.state.currentInput),
        currentInput: ''
      })
      console.log(this.state)
  }

  guessRule(guess){
    const simpGuess = math.simplify(guess)
    let rule = math.simplify(this.props.rule)
    // if (this.props.level === '1'){ 
    //   myRule = math.simplify(`${this.props.coefficients[0]}x`)
    // }
    // if (this.props.level === '4'){
    //   myRule = math.simplify(`${this.props.coefficients[0]}x + ${this.props.coefficients[1]}`)
    // }
    if (simpGuess.equals(rule)) {
      return `You got it! The rule was y = ${rule}`
    } else {
      return 'Nope!'
    }
  }

  render () {
    return (
      <div>
    <form id='input-form' onSubmit={this.handleSubmit} autoComplete='off'>
      y = <input name='currentInput' type='text' autoComplete='off' onChange={this.handleChange} value={this.state.currentInput} />
      <button type='submit'>Guess that rule!</button>
    </form>
    <div>
      {this.state.correct}
    </div>
    </div>
    )
  }
}