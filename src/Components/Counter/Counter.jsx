import React from 'react'
import './styles.css'

export class Counter extends React.Component {
  state = {
    counter: 0
  }

  updateCounter = (offset) => {
    this.setState({
      counter: this.state.counter + offset
    })
  }

  resetCounter = () => {
    this.setState(
      { counter: 0 }
    )
  }

  render() {
    return (
      <div className="counter">
        <p>Value : {this.state.counter}</p>
        <div className="controllers">
          <button className="inc" onClick={() => { this.updateCounter(1) }}>Increment</button>
          <button className="dec" onClick={() => { this.updateCounter(-1) }}>Decrement</button>
          <button className="reset" onClick={this.resetCounter}>Reset</button>
        </div>
      </div>
    )
  }
}