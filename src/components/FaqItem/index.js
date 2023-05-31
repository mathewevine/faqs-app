// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {isClicked} = this.state

    const icon = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const iconalt = isClicked ? 'minus' : 'plus'
    return (
      <li className="faqitem">
        <div className="question">
          <h1 className="questionhead">{questionText}</h1>
          <img
            src={icon}
            alt={iconalt}
            className="icon"
            onClick={this.toggleAnswer}
          />
        </div>
        {isClicked ? (
          <div className="answer">
            <hr />
            <p>{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
