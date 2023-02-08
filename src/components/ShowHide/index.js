// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {count1: 0, count2: 0}

  container1 = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  subbu = () => {
    const {count1} = this.state
    console.log(count1)
    let abc
    if (count1 % 2 !== 0) {
      return (
        <div className="buttons-column">
          <p className="para">Joe</p>
        </div>
      )
    }
    return abc
  }

  container2 = () => {
    this.setState(prevState => ({
      count2: prevState.count2 + 1,
    }))
  }

  subbu1 = () => {
    const {count2} = this.state
    console.log(count2)
    let abcd
    if (count2 % 2 !== 0) {
      return (
        <div className="buttons-column">
          <p className="para">Jonas</p>
        </div>
      )
    }
    return abcd
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="container">
            <button
              type="button"
              className="button-1"
              onClick={this.container1}
            >
              Show/Hide Firstname
            </button>
            {this.subbu()}
          </div>
          <div className="container">
            <button
              type="button"
              className="button-2"
              onClick={this.container2}
            >
              Show/Hide Lastname
            </button>
            {this.subbu1()}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
