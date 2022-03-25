import PropTypes, { number, string } from 'prop-types';
import Slider from 'react-slick';
import './NewContent.sass';
import NewContentItem from './NewContentItem';

function NewContent({ newContents }) {
  if (!newContents) return '';
  return (
    <div className="content_box new_content">
      <h2>
        새로 올라왔어요<span>NEW</span>
      </h2>
      <Slider dots autoplay autoplaySpeed={5000}>
        {newContents.map((content) => (
          <NewContentItem key={content.id} content={content} />
        ))}
      </Slider>
    </div>
  );
}

NewContent.propTypes = {
  newContents: PropTypes.arrayOf(
    PropTypes.shape({
      id: number,
      title: string,
      image: string,
      link: string,
    })
  ),
};

NewContent.defaultProps = {
  newContents: null,
};

export default NewContent;
