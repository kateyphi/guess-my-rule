import React, {Component} from 'react'
import Table from './Table'
import {useParams} from 'react-router-dom'

class Algebra extends Component {
    constructor(){
      super()
      this.state = {
        level: this.props.match.params.id
      }
    }

    componentDidMount(){
      this.setState({level: this.props.match.params.id})
    }

    render() { 
      let id = this.props.match.params.id
      console.log('level:', id)
      return (
      <div className="component">
            <h2>Level {id}</h2>
        <span>Think of a number, any number. Enter the number into the "Input:" field and press the button to send it through the machine. The table will show the corresponding inputs and outputs. Keep putting inputs until you have a guess of what rule the machine was following to get the output.</span>
          <div>
            <Table level={this.state.level}/>
          </div>
      </div>
    )
    }
} 

export default Algebra