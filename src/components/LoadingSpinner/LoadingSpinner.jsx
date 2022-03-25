import ReactLoading from 'react-loading';
import './LoadingSpinner.sass';

function LoadingSpinner() {
  return (
    <div className="loading_spinner">
      <ReactLoading type="bars" color="#63A1F2" />
    </div>
  );
}

export default LoadingSpinner;
