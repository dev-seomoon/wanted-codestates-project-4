import PropTypes from 'prop-types';

function Medium({ tabIndex }) {
  return <div className={`content tab_${tabIndex}`}>Medium</div>;
}

Medium.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Medium;
