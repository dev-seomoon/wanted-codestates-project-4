import PropTypes from 'prop-types';
import NewContent from '../../components/NewContent/NewContent';

function Youtube({ tabIndex }) {
  return (
    <div className={`content tab_${tabIndex}`}>
      Youtube
      <NewContent />
    </div>
  );
}

Youtube.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Youtube;
