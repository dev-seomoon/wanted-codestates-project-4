import { useSelector, useDispatch } from 'react-redux';
import { changeTab } from '../../redux/tabSlice';
import './TabBar.sass';

function TabBar() {
  const { currentTab } = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  return (
    <nav>
      <button type="button" onClick={() => dispatch(changeTab(0))}>
        알쓸B잡
      </button>
      <button type="button" onClick={() => dispatch(changeTab(1))}>
        유튜브
      </button>
      <button type="button" onClick={() => dispatch(changeTab(2))}>
        인사이트
      </button>
      <div className={`tab_bottom_line tab_${currentTab}`} />
    </nav>
  );
}

export default TabBar;
