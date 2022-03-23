import ContentItem from '../ContentItem/ContentItem';
import './ContentList.sass';

function ContentList() {
  return (
    <div className="content_box content_list">
      <h2>
        알쓸B잡<span>News</span>
      </h2>
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <button type="button" className="more_button">
        더보기
      </button>
    </div>
  );
}

export default ContentList;
