import Loadable from "react-loadable";
import Loading from "../components/Loading/index.jsx";

// Landing page
export const HomePage = Loadable({
  loader: () => import("./LandingPage/HomePage.jsx"),
  loading: Loading,
});

// Other
export const NotFound = Loadable({
  loader: () => import("./NotFound/NotFound.jsx"),
  loading: Loading,
});
