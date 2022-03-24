import PropTypes, { number, string } from 'prop-types';
import './ContentItem.sass';
import HeartIcon from '../../assets/icon_heart.svg';
import ShareIcon from '../../assets/icon_share.svg';

function ContentItem({ content }) {
  if (!content) return '';
  const { image, link, like_cnt: likeCnt, title, upload_date: uploadDate } = content;
  return (
    <div className="content_item">
      <a href={link}>
        <img src={image} alt={title} />
      </a>
      <div className="info">
        <span>{uploadDate}</span>
        <div className="buttons">
          <button type="button">
            <img src={HeartIcon} alt="like icon" className="icon heart" />
            <span>{likeCnt}</span>
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

ContentItem.propTypes = {
  content: PropTypes.shape({
    id: number,
    title: string,
    image: string,
    link: string,
    upload_date: string,
    like_cnt: number,
  }).isRequired,
};

export default ContentItem;
