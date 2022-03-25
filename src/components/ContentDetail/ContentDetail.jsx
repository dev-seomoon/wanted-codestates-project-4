import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchContentById } from '../../redux/tabSlice';
import './ContentDetail.sass';
import HeartIcon from '../../assets/icon_heart.svg';
import ShareIcon from '../../assets/icon_share.svg';

function ContentDetail() {
  const { contentId } = useParams();
  const { content } = useSelector((state) => state.tab);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContentById(contentId));
  }, [contentId]);
  if (!content) return 'Loading...';
  console.log(content);
  return (
    <div className="content_detail">
      <header>
        <h2>블록체인 NOW</h2>
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
        <button type="button">
          <img src={HeartIcon} alt="like icon" className="icon" />
          좋아요
        </button>
        <button type="button">
          <img src={ShareIcon} alt="share icon" className="icon" />
          공유하기
        </button>
      </div>
    </div>
  );
}

export default ContentDetail;
