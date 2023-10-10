import { createBrowserRouter } from "react-router-dom";
import Home from '../src/pages/Home'
import Shop from '../src/pages/Shop'
import Contact from '../src/pages/Contact'
import SiteLayout from "./layouts/SiteLayout";
import Login from "./pages/Login";

const routes = createBrowserRouter([
    {path: '', element: <SiteLayout />, children: [
        { path: '', element: <Home /> },
        { path: 'store', element: <Shop /> },
        { path: 'contact', element: <Contact /> },
        { path: 'login', element: <Login /> },
    ]}
])

export default routes