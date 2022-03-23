import PropTypes from 'prop-types';
import ContentList from '../../components/ContentList/ContentList';
import NewContent from '../../components/NewContent/NewContent';
import SubscriptionBanner from '../../components/SubscriptionBanner/SubscriptionBanner';

function Youtube({ tabIndex }) {
  return (
    <div className={`content tab_${tabIndex}`}>
      <NewContent />
      <SubscriptionBanner />
      <ContentList />
    </div>
  );
}

Youtube.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Youtube;
