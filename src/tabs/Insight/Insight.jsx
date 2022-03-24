import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContents } from '../../redux/tabSlice';
import ContentList from '../../components/ContentList/ContentList';
import NewContent from '../../components/NewContent/NewContent';
import SubscriptionBanner from '../../components/SubscriptionBanner/SubscriptionBanner';

function Insight() {
  const contents = useSelector((state) => state.tab.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContents(3));
  }, []);

  if (!contents) return 'Loading...';

  return (
    <div className="content">
      <NewContent newContents={contents.filter((content) => content.like_top)} />
      <SubscriptionBanner />
      <ContentList contents={contents} />
    </div>
  );
}

export default Insight;
