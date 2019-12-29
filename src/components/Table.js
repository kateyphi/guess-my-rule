import React from 'react'
import InputOutput from './InputOutputs'
import AddInput from './AddInput'
import GuessRule from './GuessRule'
import FunctionMachine from './FunctionMachine'
const {create, all} = require('mathjs')
const config = {}
const math = create(all, config)

export default class Table extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        coefficients: [Math.floor(Math.random()*9)+1, Math.floor(Math.random()*9)+1],
        bin: Math.floor(Math.random()*3),
        rule: '',
        level: props.level,
        inputs: [],
        currentOutput: ''
      }
      this.inputNumber = this.inputNumber.bind(this)
      this.fxn = this.fxn.bind(this)
      this.newRule = this.newRule.bind(this)
      this.getRule = this.getRule.bind(this)
    }

    componentDidMount(){
      this.setState({rule: this.getRule(this.state.level)})
    }

    getRule(level, coeff1=this.state.coefficients[0], coeff2=this.state.coefficients[1], bin=this.state.bin){
      if (level === '1'){
        if (bin === 0){
          return  `${coeff1} + x` 
        } else if (bin === 1){
          return `${coeff1}x`
        } else {
          return `x^2`
        }
      } else if (level === '2'){
        if (bin === 0){
          return `x - ${coeff1}`
        } else if (bin === 1){
          return `-${coeff1}x`
        } else {
          return `x^3`
        }
      } else if (level === '3'){
        if (bin === 0){
          return `${coeff1}x + ${coeff2}`
        } else if (bin === 1){
          return `${coeff1}x - ${coeff2}`
        } else {
          return `x^2 + ${coeff1}`
        } 
      } else if (level === '4'){
        if (bin === 0){
          return `${coeff1}^x`
        } else if (bin === 1){
          return `x^3 + ${coeff1}`
        } else {
          return `x^3 - ${coeff1}`
        }
      } else {
        console.log('something went wrong')
        return 'something went wrong'
      }

    }

    fxn(input){
      let bin = this.state.bin
      let level = this.state.level
      let coefficients = this.state.coefficients
      if (level === '1'){
        if (bin === 0){
          return math.format(+coefficients[0] + +input, {precision: 14}) 
        } else if (bin === 1){
          return math.format(coefficients[0]*input, {precision: 14})
        } else {
          return math.evaluate(`${input}^2`)
        }
      } else if (level === '2'){
        if (bin === 0){
          return math.format(+input - +coefficients[0], {precision: 14}) 
        } else if (bin === 1){
          return math.format(coefficients[0]*input*-1)
        } else {
          return math.evaluate(`${input}^3`)
        }
      } else if (level === '3'){
        if (bin === 0){
          return math.format(coefficients[0]*input + coefficients[1])
        } else if (bin === 1){
          return math.format(coefficients[0]*input - coefficients[1])
        } else {
          return math.evaluate(`${input}^2 + ${coefficients[0]}`)
        }
      } else if (level === '4'){
        if (bin === 0){
          return math.evaluate(`${coefficients[0]}^${input}`)
        } else if (bin === 1){
          return math.evaluate(`${input}^3 + ${coefficients[0]}`)
        } else {
          return math.evaluate(`${input}^3 - ${coefficients[0]}`)
        }
      }
    }

    inputNumber(input){
      this.setState({
        inputs: [...this.state.inputs, input],
        currentOutput: this.fxn(input)
      })
    }

    newRule(){
      let coeff1 = Math.ceil(Math.random()*9)
      let coeff2 = Math.ceil(Math.random()*9)
      let bin = Math.floor(Math.random()*3)
      this.setState({
        coefficients: [coeff1, coeff2],
        bin: bin,
        inputs: [],
        currentOutput: '',
        rule: this.getRule(this.state.level, coeff1, coeff2, bin)
      })
    }

    render(){
      return (
        <div>

        <br />
        <div className="grid-container">
          <div className="xylabel">Inputs (x)</div>
          <div className="xylabel">Outputs (y)</div>
          {
            this.state.inputs.map(input=><InputOutput input={input} fxn={this.fxn} />)
          }
          <div className="item19">
            <div id="machine">
            <AddInput inputNumber={this.inputNumber}/>
            <FunctionMachine input={this.state.inputs[this.state.inputs.length-1]} output={this.state.currentOutput} /></div>
          </div>
          <div className="item20"><GuessRule coefficients={this.state.coefficients} level={this.state.level} rule={this.state.rule} /></div>
        </div>
        <div className="new">
        <button type="button" onClick={this.newRule}>Generate a new rule</button>
      </div>
      </div>
      )}
}
