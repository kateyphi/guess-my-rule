import React from 'react'

class FunctionMachine extends React.Component {
  render(){
    return (
      <div>
        <img alt="um" id ="machine" src="functionmachine2.png" />
        <span id="machineinput">{this.props.input}</span>
        <span id="machineoutput">{this.props.output}</span>
        <span id="blackbox"></span>

      </div>
    )
  }
}

export default FunctionMachine