import React from 'react';
import './NewContent.sass';
import HeartIcon from '../../assets/icon_heart.svg';
import ShareIcon from '../../assets/icon_share.svg';

function NewContent() {
  return (
    <div className="content_box">
      <h2>
        새로 올라왔어요<span>NEW</span>
      </h2>
      <img src="https://miro.medium.com/max/1400/1*fq92AQHOLSMqs-w7Pdkm5Q.jpeg" alt="new content" />
      <p>비트코인과 낮은 시간 선호의 관계</p>
      <div className="controller">
        <div>carousel buttons</div>
        <div className="icons">
          <img src={HeartIcon} alt="Like button" className="icon heart" />
          <img src={ShareIcon} alt="Share button" className="icon" />
        </div>
      </div>
    </div>
  );
}

export default NewContent;
