import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentList from '../../components/ContentList/ContentList';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import NewContent from '../../components/NewContent/NewContent';
import SubscriptionBanner from '../../components/SubscriptionBanner/SubscriptionBanner';
import { fetchContents } from '../../redux/tabSlice';

function Medium() {
  const { currentTab } = useSelector((state) => state.tab);
  const contents = useSelector((state) => state.tab.contents[currentTab]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContents(currentTab + 1));
  }, []);

  if (!contents) return <LoadingSpinner />;

  return (
    <div className="content">
      <NewContent newContents={contents.filter((content) => content.like_top)} />
      <SubscriptionBanner />
      <ContentList contents={contents} sectorIndex={0} />
    </div>
  );
}

export default Medium;
