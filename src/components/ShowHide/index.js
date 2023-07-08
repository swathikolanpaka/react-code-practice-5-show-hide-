// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isClicked: true}

  onFirstName = () => {
    const {isClicked} = this.state

    if (isClicked === true) {
      return <p>Joe</p>
    }
    return null
  }

  onLastName = () => {
    const {isClicked} = this.state

    if (isClicked === true) {
      return <p>Jonas</p>
    }
    return null
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="first-name" id="first">
            <button className="btn-first-name" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
          </div>
          <div className="last-name">
            <button className="btn-last-name" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
