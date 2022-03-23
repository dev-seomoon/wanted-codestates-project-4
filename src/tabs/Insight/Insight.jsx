import PropTypes from 'prop-types';
import NewContent from '../../components/NewContent/NewContent';

function Insight({ tabIndex }) {
  return (
    <div className={`content tab_${tabIndex}`}>
      Insight
      <NewContent />
    </div>
  );
}

Insight.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Insight;
