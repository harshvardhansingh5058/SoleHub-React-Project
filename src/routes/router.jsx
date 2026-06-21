import { createBrowserRouter } from "react-router-dom";

import Layout from "../Components/Common/Layout";

import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Brands from "../pages/Brands";
import NewArrivals from "../pages/NewArrivals";
import Sale from "../pages/Sale";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";



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
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "product-detail/:id",
                    element: <ProductDetail/>

                },
                {
                    path: "cart",
                    element: <Cart/>
                },
            ]
        },
        {
            path: "*",
            element: <NotFound/>
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);

export default router;