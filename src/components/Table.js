import React from 'react'
import InputOutput from './InputOutputs'
import AddInput from './AddInput'
import GuessRule from './GuessRule'
import FunctionMachine from './FunctionMachine'
const {create, all} = require('mathjs')
const config = {}
const math = create(all, config)

export default class Table extends React.Component {
    constructor(){
      super()
      this.state = {
        coefficients: [Math.floor(Math.random()*10), Math.floor(Math.random()*10)],
        inputs: [],
        currentOutput: ''
      }
      this.inputNumber = this.inputNumber.bind(this)
      this.testFunction = this.testFunction.bind(this)
      this.newRule = this.newRule.bind(this)
    }

    inputNumber(input){
      this.setState({
        inputs: [...this.state.inputs, input],
        currentOutput: this.testFunction(input)
      })
    }

    testFunction(input){
      const coefficients = this.state.coefficients
      return math.format(coefficients[0]*input + coefficients[1], {precision: 14})
    }

    newRule(){
      this.setState({
        coefficients: [Math.floor(Math.random()*10), Math.floor(Math.random()*10)],
        inputs: [],
        currentOutput: ''
      })
      console.log(this.state)
    }

    render(){
      return (
        <div>
        <AddInput inputNumber={this.inputNumber}/>
        <br />
        <div className="grid-container">
          <div className="xylabel">Inputs (x)</div>
          <div className="xylabel">Outputs (y)</div>
          {
            this.state.inputs.map(input=><InputOutput input={input} testFunction={this.testFunction} />)
          }
          <div className="item19">
            <div id="machine"><FunctionMachine input={this.state.inputs[this.state.inputs.length-1]} output={this.state.currentOutput} /></div>
          </div>
          <div className="item20"><GuessRule coefficients={this.state.coefficients} newRule={this.newRule} /></div>
        </div>
      </div>
      )}
}