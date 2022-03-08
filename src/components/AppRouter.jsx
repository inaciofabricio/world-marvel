import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Characters from '../pages/Characters';
import Character from "../pages/Character";
import Creators from "../pages/Creators";
import Creator from "../pages/Creator";
import Comic from "../pages/Comic";
import Comics from "../pages/Comics";
import Series from "../pages/Series";
import Serie from "../pages/Serie";
import Event from "../pages/Event";
import Events from "../pages/Events";
import Storie from "../pages/Storie";
import Stories from "../pages/Stories";
import Header from "./Header";

const AppRouters = () => {
    let routes = useRoutes([
        { path: "/", element: <Characters /> },
        { path: "/creators", element: <Creators /> },
        { path: "/comics", element: <Comics /> },
        { path: "/series", element: <Series /> },
        { path: "/events", element: <Events /> },
        { path: "/stories", element: <Stories /> },
        { path: "character/:id", element: <Character /> },
        { path: "creator/:id", element: <Creator /> },
        { path: "comic/:id", element: <Comic /> },
        { path: "serie/:id", element: <Serie /> },
        { path: "event/:id", element: <Event /> },
        { path: "storie/:id", element: <Storie /> }
    ]);
    return routes;
  };

const AppRouter = () => {

    return (
        <Router>
            <Header />
           <AppRouters />
        </Router>
    )
};

export default AppRouter;