import PropTypes, { number, string } from 'prop-types';
import { useMemo, useState } from 'react';
import ContentItem from '../ContentItem/ContentItem';
import './ContentList.sass';
import { SECTOR_TITLE } from '../../constants';

function ContentList({ contents, sectorIndex }) {
  const [collapse, setCollapse] = useState(true);
  if (!contents) return '';
  const contentElements = useMemo(
    () => contents.map((c) => <ContentItem key={c.id} content={c} />),
    [contents]
  );
  return (
    <div className="content_box content_list">
      <h2>
        {SECTOR_TITLE[sectorIndex].kr}
        <span>{SECTOR_TITLE[sectorIndex].en}</span>
      </h2>
      {collapse ? contentElements.slice(0, 3) : contentElements}
      <button type="button" className="more_button" onClick={() => setCollapse((prev) => !prev)}>
        {collapse ? '더보기' : '접기'}
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
  sectorIndex: number.isRequired,
};

ContentList.defaultProps = {
  contents: null,
};

export default ContentList;
