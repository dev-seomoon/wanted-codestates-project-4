import ContentList from '../../components/ContentList/ContentList';
import NewContent from '../../components/NewContent/NewContent';
import SubscriptionBanner from '../../components/SubscriptionBanner/SubscriptionBanner';

function Medium() {
  return (
    <div className="content">
      <NewContent />
      <SubscriptionBanner />
      <ContentList />
    </div>
  );
}

export default Medium;
