import './Post.css'
import {MoreVert} from '@material-ui/icons'

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/profile/FADS SCOTT.jpg" alt="" />
            <span className="postUserName">FADS SCOTT</span>
            <span className="postDate">5m</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Look at my latest Design.😍</span>
          <img className="postImg" src="/assets/post/DESIGN1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/LIKE.png" alt="" />
            <img className="likeIcon" src="assets/HEART.png" alt="" />
            <span className="postLikeCounter">624K</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">394K comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
