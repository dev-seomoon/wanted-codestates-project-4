import PropTypes from 'prop-types';
import NewContent from '../../components/NewContent/NewContent';
import SubscriptionBanner from '../../components/SubscriptionBanner/SubscriptionBanner';

function Youtube({ tabIndex }) {
  return (
    <div className={`content tab_${tabIndex}`}>
      Youtube
      <NewContent />
      <SubscriptionBanner />
    </div>
  );
}

Youtube.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Youtube;
