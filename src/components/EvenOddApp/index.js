// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {rand: 0}

  onIncrement = () => {
    const min = 0
    const max = 100
    const num = min + Math.ceil(Math.random() * (max - min))
    this.setState({rand: num})
  }

  render() {
    const {rand} = this.state
    const isEven = rand % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Count {rand}</h1>
          <p>Count is {isEven} </p>
          <button className="btn" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
