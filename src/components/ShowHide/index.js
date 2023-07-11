// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstClicked: false, isLastClicked: false}

  onFirstName = () => {
    this.setState(prevState => ({isFirstClicked: !prevState.isFirstClicked}))
  }

  onLastName = () => {
    this.setState(prevState => ({isLastClicked: !prevState.isLastClicked}))
  }

  render() {
    const {isFirstClicked, isLastClicked} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="first-name" id="first">
            <button className="btn-first-name" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>

            {isFirstClicked ? <p className="text"> Joe</p> : null}
          </div>
          <div className="last-name">
            <button className="btn-last-name" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {isLastClicked ? <p className="text"> Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
