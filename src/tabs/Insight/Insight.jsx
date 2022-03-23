import PropTypes from 'prop-types';
import NewContent from '../../components/NewContent/NewContent';
import SubscriptionBanner from '../../components/SubscriptionBanner/SubscriptionBanner';

function Insight({ tabIndex }) {
  return (
    <div className={`content tab_${tabIndex}`}>
      Insight
      <NewContent />
      <SubscriptionBanner />
    </div>
  );
}

Insight.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Insight;
