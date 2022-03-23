import PropTypes from 'prop-types';
import NewContent from '../../components/NewContent/NewContent';
import SubscriptionBanner from '../../components/SubscriptionBanner/SubscriptionBanner';

function Medium({ tabIndex }) {
  return (
    <div className={`content tab_${tabIndex}`}>
      Medium
      <NewContent />
      <SubscriptionBanner />
    </div>
  );
}

Medium.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Medium;
