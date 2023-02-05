// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {value1: 'none', value2: 'none', count1: 0, count2: 0}

  addContainer1 = () => {
    const {count1} = this.state
    this.setState(prevState => ({
      count1: prevState.count1 + 1,
    }))
    if (count1 % 2 !== 0) {
      this.setState({value1: 'block'})
    } else {
      this.setState({value1: 'none'})
    }
  }

  addContainer2 = () => {
    const {count2} = this.state
    this.setState(prevState => ({
      count2: prevState.count2 + 1,
    }))
    if (count2 % 2 !== 0) {
      this.setState({value2: 'block'})
    } else {
      this.setState({value2: 'none'})
    }
  }

  render() {
    const {value1, value2} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="container">
            <button
              type="button"
              className="button-1"
              onClick={this.addContainer1}
            >
              Show/Hide Firstname
            </button>
            <div style={{display: `${value1}`}} className="buttons-column">
              <p className="para">Joe</p>
            </div>
          </div>
          <div className="container">
            <button
              type="button"
              className="button-2"
              onClick={this.addContainer2}
            >
              Show/Hide Lastname
            </button>
            <div style={{display: `${value2}`}} className="buttons-column">
              <p className="para">Jonas</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
