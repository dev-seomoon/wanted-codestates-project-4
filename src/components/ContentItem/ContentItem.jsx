import './ContentItem.sass';
import HeartIcon from '../../assets/icon_heart.svg';
import ShareIcon from '../../assets/icon_share.svg';

function ContentItem() {
  return (
    <div className="content_item">
      <img src="https://miro.medium.com/max/1400/1*fq92AQHOLSMqs-w7Pdkm5Q.jpeg" alt="content" />
      <div className="info">
        <span>2022-03-15</span>
        <div className="buttons">
          <button type="button">
            <img src={HeartIcon} alt="like icon" className="icon heart" />
            <span>1</span>
          </button>
          <button type="button">
            <img src={ShareIcon} alt="like icon" className="icon" />
            <span>공유하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentItem;
