// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, deleteComment, updateStatus} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeNewClassName = isLiked ? 'like-update-color' : ''

  const commentTime = formatDistanceToNow(date)

  const onDeleteComment = () => {
    deleteComment(id)
  }
  const onClickUpdateStatus = () => {
    updateStatus(id)
  }

  return (
    <li className="list-item">
      <div className="person-comment-and-details">
        <div className={initialClassName}>R</div>
        <div className="person-profile-container">
          <div className="person-card">
            <h1 className="person-name">{name}</h1>
            <p className="comment-add-time">{commentTime}</p>
          </div>
          <p className="person-comment">{comment}</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="like-container">
          <button
            type="button"
            className="like-button"
            onClick={onClickUpdateStatus}
          >
            <img className="like-icon" src={imageUrl} alt="like" />
          </button>
          <p className={`like-text ${likeNewClassName}`}>Like</p>
        </div>
        <button className="delete-btn" type="button" testid="delete">
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            onClick={onDeleteComment}
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
