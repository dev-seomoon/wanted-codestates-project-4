import PropTypes, { number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseLike } from '../../redux/likeSlice';
import HeartIcon from '../../assets/icon_heart.svg';
import HeartFullIcon from '../../assets/icon_heart_full.svg';
import ShareIcon from '../../assets/icon_share.svg';
import './NewContent.sass';

function NewContentItem({ content: c }) {
  if (!c) return '';
  const dispatch = useDispatch();
  const userlike = useSelector((state) => state.like.likes[c.id]);
  const handleLike = () => {
    dispatch(increaseLike({ id: c.id }));
  };
  const contentWrap = useCallback(
    () =>
      c.sector_id === 1 ? (
        <a key={c?.id} href={c?.link}>
          <img src={c?.image} alt={c?.title} />
          <p>{c?.title}</p>
        </a>
      ) : (
        <Link to={`/${c?.id}`} key={c?.id}>
          <img src={c?.image} alt={c?.title} />
          <p>{c?.title}</p>
        </Link>
      ),
    [c]
  );
  return (
    <>
      {contentWrap()}
      <div className="icons">
        <button type="button" className="icon heart" onClick={handleLike}>
          <img src={userlike ? HeartFullIcon : HeartIcon} alt="Like button" />
        </button>
        <img src={ShareIcon} alt="Share button" className="icon" />
      </div>
    </>
  );
}

NewContentItem.propTypes = {
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

export default NewContentItem;
