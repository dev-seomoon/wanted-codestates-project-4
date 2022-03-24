import PropTypes, { number, string } from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import './NewContent.sass';
import HeartIcon from '../../assets/icon_heart.svg';
import ShareIcon from '../../assets/icon_share.svg';

function NewContent({ newContents }) {
  if (!newContents) return '';
  return (
    <div className="content_box new_content">
      <h2>
        새로 올라왔어요<span>NEW</span>
      </h2>
      <Slider dots>
        {newContents.map((c) => (
          <a key={c.id} href={c.link}>
            <img src={c.image} alt={c.title} />
            <p>{c.title}</p>
          </a>
        ))}
      </Slider>
      <div className="icons">
        <img src={HeartIcon} alt="Like button" className="icon heart" />
        <img src={ShareIcon} alt="Share button" className="icon" />
      </div>
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
