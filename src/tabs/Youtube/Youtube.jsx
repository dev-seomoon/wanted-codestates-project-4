import PropTypes from 'prop-types';

function Youtube({ tabIndex }) {
  return <div className={`content tab_${tabIndex}`}>Youtube</div>;
}

Youtube.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Youtube;
