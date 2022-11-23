// Write your code here
import './index.css'

const CommentItem = () => (
  <li className="list-item">
    <div className="person-comment-and-details">
      <div className="profile-letter">R</div>
      <div className="person-profile-container">
        <div className="person-card">
          <h1 className="person-name">Richard Branson</h1>
          <p className="comment-add-time">2 minutes ago</p>
        </div>
        <p className="person-comment">
          Thanks for being so typically supportive and such a good friend. Elon,
          Great to be opening space for all
        </p>
      </div>
    </div>
    <div className="bottom-container">
      <div className="like-container">
        <img
          className="like-icon"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          alt=""
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

export default CommentItem
