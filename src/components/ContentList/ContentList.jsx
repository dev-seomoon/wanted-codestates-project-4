import PropTypes, { number, string } from 'prop-types';
import ContentItem from '../ContentItem/ContentItem';
import './ContentList.sass';

function ContentList({ contents }) {
  if (!contents) return '';
  return (
    <div className="content_box content_list">
      <h2>
        알쓸B잡<span>News</span>
      </h2>
      {contents.map((c) => (
        <ContentItem key={c.id} content={c} />
      ))}
      <button type="button" className="more_button">
        더보기
      </button>
    </div>
  );
}

ContentList.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      id: number,
      title: string,
      image: string,
      link: string,
    })
  ),
};

ContentList.defaultProps = {
  contents: null,
};

export default ContentList;
