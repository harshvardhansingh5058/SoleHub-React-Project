import { createBrowserRouter } from "react-router-dom";

import Layout from "../Components/Common/Layout";

import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Brands from "../pages/Brands";
import NewArrivals from "../pages/NewArrivals";
import Sale from "../pages/Sale";
import Contact from "../pages/Contact";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "men",
                    element: <Men />,
                },
                {
                    path: "women",
                    element: <Women />,
                },
                {
                    path: "brands",
                    element: <Brands />,
                },
                {
                    path: "new-arrivals",
                    element: <NewArrivals />,
                },
                {
                    path: "sale",
                    element: <Sale />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
            ],
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);

export default router;