import './Share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="\assets\profile\AMMARR.jpg" alt="" className="shareProfileImg" />
          <input placeholder="What's in Your mind ?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon"/>
              <span className="shareOptionText">Media</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
