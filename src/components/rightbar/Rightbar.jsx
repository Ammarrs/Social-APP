import './Rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/opened.png" alt='' /> 
          <span className="birthdayText"><b>3 birthdays</b> Today 🥳</span>
        </div>
        <img src="/assets/AD.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="onlineFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/profile/KIM.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">KIM</span>
          </li>
          <li className="onlineFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/profile/MAROO.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">MAROO</span>
          </li>
          <li className="onlineFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/profile/NADER.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">NADER</span>
          </li>
          <li className="onlineFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/profile/NDOSH.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">NDOSH</span>
          </li>
          <li className="onlineFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/profile/MARK.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">MARK</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
