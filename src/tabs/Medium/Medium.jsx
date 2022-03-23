import PropTypes from 'prop-types';
import NewContent from '../../components/NewContent/NewContent';

function Medium({ tabIndex }) {
  return (
    <div className={`content tab_${tabIndex}`}>
      Medium
      <NewContent />
    </div>
  );
}

Medium.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Medium;
