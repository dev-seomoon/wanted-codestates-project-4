import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchContentById } from '../../redux/tabSlice';
import { increaseLike } from '../../redux/likeSlice';
import './ContentDetail.sass';
import HeartIcon from '../../assets/icon_heart.svg';
import HeartFullIcon from '../../assets/icon_heart_full.svg';
import ShareIcon from '../../assets/icon_share.svg';
import { SECTOR_TITLE } from '../../constants';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function ContentDetail() {
  const { contentId } = useParams();
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.tab);
  const userlike = useSelector((state) => (content ? state.like.likes[content.id] : null));

  useEffect(() => {
    dispatch(fetchContentById(contentId));
  }, [contentId]);

  if (!content) return <LoadingSpinner />;

  const handleLike = () => {
    dispatch(increaseLike({ id: content.id }));
  };

  return (
    <div className="content_detail">
      <header>
        <h2>{SECTOR_TITLE[content.sector_id - 1].kr}</h2>
        <Link to="/">{`<`}</Link>
      </header>
      {content.sector_id === 2 && (
        <>
          <div className="video">
            <iframe src={`https://www.youtube.com/embed/${content.link}`} title={content.title} />
          </div>
          <h3 className="content_title">{content.title}</h3>
          <p className="content_body">{content.body}</p>
        </>
      )}
      {content.sector_id === 3 && (
        <>
          <h3 className="content_title">{content.title}</h3>
          <img src={content.image} alt={content.title} />
          <p className="content_body">{content.body}</p>
          <a href={content.link} className="more_button">
            전체 리포트 읽기
          </a>
        </>
      )}
      <div className="button_wrap">
        <button type="button" onClick={handleLike}>
          <img src={userlike ? HeartFullIcon : HeartIcon} alt="like icon" className="icon" />
          좋아요
        </button>
        <a
          href={content.sector_id === 2 ? `https://youtu.be/${content.link}` : content.link}
          target="_blank"
          alt={content.title}
          rel="noreferrer"
        >
          <img src={ShareIcon} alt="share icon" className="icon" />
          공유하기
        </a>
      </div>
    </div>
  );
}

export default ContentDetail;
