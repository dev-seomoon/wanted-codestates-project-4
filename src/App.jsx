/* eslint-disable jsx-a11y/tabindex-no-positive */
import { useState } from 'react';
import TabBar from './components/TabBar/TabBar';
import Insight from './tabs/Insight/Insight';
import Medium from './tabs/Medium/Medium';
import Youtube from './tabs/Youtube/Youtube';
import './global.sass';

const TABS = [<Medium />, <Youtube />, <Insight />];

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabClick = (tabIndex) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <TabBar onClick={handleTabClick} currentTab={currentTab} />
      <div className={`content_container current_${currentTab}`}>{TABS[currentTab]}</div>
    </>
  );
}

export default App;
