/* eslint-disable jsx-a11y/tabindex-no-positive */
import { useSelector } from 'react-redux';
import TabBar from './components/TabBar/TabBar';
import Insight from './tabs/Insight/Insight';
import Medium from './tabs/Medium/Medium';
import Youtube from './tabs/Youtube/Youtube';
import './global.sass';

const TABS = [<Medium />, <Youtube />, <Insight />];

function App() {
  const currentTab = useSelector((state) => state.tab.value);

  return (
    <>
      <TabBar />
      <div className="content_container">{TABS[currentTab]}</div>
    </>
  );
}

export default App;
