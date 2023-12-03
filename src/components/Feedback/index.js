// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClick: true}

  change = () => {
    this.setState({isClick: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClick} = this.state

    return (
      <div className="bg-container">
        {isClick ? (
          <div className="feedback-card">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(each => (
                <li className="emoji-item" key={each.id}>
                  <img
                    src={each.imageUrl}
                    onClick={this.change}
                    alt={each.name}
                    className="emoji"
                  />
                  <p>{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="thankyou-card">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="heading">Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
