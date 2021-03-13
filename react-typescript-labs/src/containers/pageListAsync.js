import Loadable from 'react-loadable';
import Loading from '../components/Loading';

// Landing page
export const HomePage = Loadable({
  loader: () => import('./LandingPage/HomePage'),
  loading: Loading,
});

// Other
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
