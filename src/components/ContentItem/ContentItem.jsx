import { Link } from 'react-router-dom';
import PropTypes, { number, string } from 'prop-types';
import './ContentItem.sass';
import { useMemo } from 'react';
import HeartIcon from '../../assets/icon_heart.svg';
import ShareIcon from '../../assets/icon_share.svg';

function ContentItem({ content: c }) {
  if (!c) return '';
  const imgWrap = useMemo(
    () =>
      c.sector_id === 1 ? (
        <a href={c.link} alt={c.title}>
          <img src={c.image} alt={c.title} />
        </a>
      ) : (
        <Link to={`/${c.id}`}>
          <img src={c.image} alt={c.title} />
        </Link>
      ),
    [c.sector_id]
  );
  return (
    <div className="content_item">
      {imgWrap}
      <div className="info">
        <span>{c.upload_date}</span>
        <div className="buttons">
          <button type="button">
            <img src={HeartIcon} alt="like icon" className="icon heart" />
            <span>{c.like_cnt}</span>
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
    sector_id: number,
  }).isRequired,
};

export default ContentItem;
