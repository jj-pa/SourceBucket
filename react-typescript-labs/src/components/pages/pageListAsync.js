import Loadable from 'react-loadable';
import Loading from '../molecules/Loading';

// Landing page
export const HomePage = Loadable({
  loader: () => import('./Landing/HomePage'),
  loading: Loading,
});

// Other
export const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});
