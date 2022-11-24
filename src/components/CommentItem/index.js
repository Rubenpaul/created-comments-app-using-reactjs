// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails

  return (
    <li className="list-item">
      <div className="person-comment-and-details">
        <div className={initialClassName}>R</div>
        <div className="person-profile-container">
          <div className="person-card">
            <h1 className="person-name">{name}</h1>
            <p className="comment-add-time">{date}</p>
          </div>
          <p className="person-comment">{comment}</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="like-container">
          <img
            className="like-icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt=" like"
          />
          <p className="like-text">Like</p>
        </div>
        <button className="delete-btn" type="button">
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
