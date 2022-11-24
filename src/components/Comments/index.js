import './index.css'
import {v4 as uuidv4} from 'uuid'
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
  state = {commentsList: [], nameInput: '', commentInput: '', count: 0}

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  createNewComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state
    const newClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const initialBackgroundColorClassName = `profile-letter ${newClassName}`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
      count: prevState.count + 1,
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  updateStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentsList, nameInput, commentInput, count} = this.state

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

          <form className="technologies-and-input-comment-container">
            <p className="Technologies-heading">
              Say Something about 4.0 Technologies
            </p>
            <input
              type="text"
              className="person-name-input"
              placeholder="Your Name"
              onChange={this.onChangeNameInput}
              value={nameInput}
            />
            <textarea
              type="text"
              className="person-comment-text-input"
              placeholder="Your Comment"
              rows="10"
              cols="50"
              onChange={this.onChangeComment}
              value={commentInput}
            >
              {}
            </textarea>
            <button
              className="add-comment-btn"
              type="submit"
              onClick={this.createNewComment}
            >
              Add Comment
            </button>
          </form>
        </div>
        <hr className="hr" />
        <div className="comment-count-container">
          <span className="comment-count">{count}</span>
          <span className="span">Comments</span>
        </div>

        <ul className="un-order-list-container">
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              deleteComment={this.deleteComment}
              updateStatus={this.updateStatus}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
