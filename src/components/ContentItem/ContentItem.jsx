import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { number, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increaseLike } from '../../redux/likeSlice';
import './ContentItem.sass';
import HeartIcon from '../../assets/icon_heart.svg';
import HeartFullIcon from '../../assets/icon_heart_full.svg';
import ShareIcon from '../../assets/icon_share.svg';

function ContentItem({ content: c }) {
  const dispatch = useDispatch();
  if (!c) return '';

  const userlike = useSelector((state) => state.like.likes[c.id]);

  const handleLike = () => {
    dispatch(increaseLike({ id: c.id }));
  };

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
          <button type="button" onClick={handleLike}>
            <img
              src={userlike ? HeartFullIcon : HeartIcon}
              alt="like icon"
              className="icon heart"
            />
            <span>{userlike ? c.like_cnt + 1 : c.like_cnt}</span>
          </button>
          <a
            href={c.sector_id === 2 ? `https://youtu.be/${c.link}` : c.link}
            target="_blank"
            alt={c.title}
            rel="noreferrer"
          >
            <img src={ShareIcon} alt="like icon" className="icon" />
            <span>공유하기</span>
          </a>
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
