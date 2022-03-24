import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TabBar from './components/TabBar/TabBar';
import Insight from './tabs/Insight/Insight';
import Opinion from './tabs/Opinion/Opinion';
import Youtube from './tabs/Youtube/Youtube';
import ContentDetail from './components/ContentDetail/ContentDetail';
import './global.sass';

const TABS = [<Opinion />, <Youtube />, <Insight />];

function App() {
  const { currentTab } = useSelector((state) => state.tab);

  return (
    <BrowserRouter>
      <TabBar />
      <Routes>
        <Route path="/" element={TABS[currentTab]} />
        <Route path="/:contentId" element={<ContentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
