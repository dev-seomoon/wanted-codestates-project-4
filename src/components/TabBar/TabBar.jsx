import PropTypes from 'prop-types';
import './TabBar.sass';

function TabBar({ onClick, currentTab }) {
  return (
    <>
      <nav>
        <button type="button" onClick={() => onClick(0)}>
          알쓸B잡
        </button>
        <button type="button" onClick={() => onClick(1)}>
          유튜브
        </button>
        <button type="button" onClick={() => onClick(2)}>
          인사이트
        </button>
      </nav>
      <div className={`tab_bottom_line tab_${currentTab}`} />
    </>
  );
}

TabBar.propTypes = {
  currentTab: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

TabBar.defaultProps = {
  currentTab: 0,
};

export default TabBar;
