import './index.css'
import {Component} from 'react'

import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="comments-heading">Comments</h1>
        <div className="container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>

          <div className="technologies-and-input-comment-container">
            <p className="Technologies-heading">
              Say Something about 4.0 Technologies
            </p>
            <input
              type="text"
              className="person-name-input"
              placeholder="Your Name"
            />
            <textarea
              type="text"
              className="person-comment-text-input"
              placeholder="Your Comment"
              rows="10"
              cols="50"
            >
              {}
            </textarea>
            <button className="add-comment-btn" type="button">
              Add Comment
            </button>
          </div>
        </div>
        <hr className="hr" />
        <div className="comment-count-container">
          <span className="comment-count">0</span>
          <span className="span">Comments</span>
        </div>
        <CommentItem />
      </div>
    )
  }
}
export default Comments
