import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './style.css';
const Loader = () => {
  return (
    <div className="skeleton-design">
      {/* <div className="border-bottom"> */}
      <SkeletonTheme height={30} borderRadius={10}>
        <p className="border-bottom">
          <Skeleton />
        </p>
        <p className="border-bottom">
          <Skeleton />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default Loader;
