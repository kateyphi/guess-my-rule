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
        bin: Math.floor(Math.random()*2),
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
        let rule = bin ? `${coeff1} + x` : `${coeff1}x`
        return rule
        
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
        return bin ? math.format(+coefficients[0] + +input, {precision: 14}) : math.format(coefficients[0]*input, {precision: 14})
      }
    }

    inputNumber(input){
      this.setState({
        inputs: [...this.state.inputs, input],
        currentOutput: this.fxn(input)
      })
    }

    newRule(){
      console.log('just got to newRule')
      let coeff1 = Math.ceil(Math.random()*9)
      let coeff2 = Math.ceil(Math.random()*9)
      let bin = Math.floor(Math.random()*2)
      this.setState({
        coefficients: [coeff1, coeff2],
        bin: bin,
        inputs: [],
        currentOutput: '',
        rule: this.getRule(this.state.level, coeff1, coeff2, bin)
      })
    }

    render(){
      console.log(this.state)
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
