/* eslint-disable jsx-a11y/tabindex-no-positive */
import { useState } from 'react';
import TabBar from './components/TabBar/TabBar';
import Insight from './tabs/Insight/Insight';
import Medium from './tabs/Medium/Medium';
import Youtube from './tabs/Youtube/Youtube';
import './global.sass';

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs, setTabs] = useState([0, 1, 2]);
  const handleTabClick = (tabIndex) => {
    setCurrentTab(tabIndex);
    switch (tabIndex) {
      case 0:
        setTabs([0, 1, 2]);
        break;
      case 1:
        setTabs([-1, 0, 1]);
        break;
      case 2:
        setTabs([-2, -1, 0]);
        break;
      default:
        console.log('error: wrong tab index');
    }
  };

  return (
    <>
      <TabBar onClick={handleTabClick} currentTab={currentTab} />
      <div className="content_container">
        <Medium tabIndex={tabs[0]} />
        <Youtube tabIndex={tabs[1]} />
        <Insight tabIndex={tabs[2]} />
      </div>
    </>
  );
}

export default App;
