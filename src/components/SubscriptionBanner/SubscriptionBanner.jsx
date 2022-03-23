import './SubscriptionBanner.sass';

function SubscriptionBanner() {
  return (
    <div className="content_box subscription_banner">
      <p>
        <span className="desc">매주 새로운 코인 지식을 드려요</span>
        <span className="title">샌드뱅크 오리지널</span>
      </p>
      <button type="button">구독하기</button>
    </div>
  );
}

export default SubscriptionBanner;
