import React, {Component} from 'react'

class Home extends Component {
  render(){
    return (
      <div className="component">
        <p>To play this game, you give the function machine a number. It will <b>do something</b> to that number, and then tell you the result of what it did. You keep feeding the machine numbers, and it will keep applying the same <b>rule</b> to them and giving you the ouputs. Once you think you know what the machine is doing to your inputs each time, go ahead and <b>guess my rule!</b></p>
        <p>To begin, click on the <b>Level</b> you'd like to play above. </p>
      </div>
    )
  }
} 

export default Home