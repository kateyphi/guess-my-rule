import React from 'react'
import Table from './Table'
import {useParams} from 'react-router-dom'

const Algebra = () =>{
    let {id} = useParams()
    return (
      <div className="component">
        <span>Think of a number, any number. Enter the number into the "Input:" field and press the button to send it through the machine. The table will show the corresponding inputs and outputs. Keep putting inputs until you have a guess of what rule the machine was following to get the output.</span>
          <div>
            <Table level={id}/>
          </div>
      </div>
    )
} 

export default Algebra