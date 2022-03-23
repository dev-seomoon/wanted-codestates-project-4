import PropTypes from 'prop-types';

function Insight({ tabIndex }) {
  return <div className={`content tab_${tabIndex}`}>Insight</div>;
}

Insight.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Insight;
