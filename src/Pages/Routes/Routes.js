import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../Blog/Blog/Blog";
import About from "../Home/About/About";
import Home from "../Home/Home/Home";
import FilteredServices from "../Home/Services/FilteredServices";
import Services from "../Home/Services/Services";
import Login from "../Login/Login";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";
import ServicePage from "../ServicePage/ServicePage";
import Signup from "../Signup/Signup";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/services/filtered",
          element: <FilteredServices></FilteredServices>,
        },
        {
          path: "/services/:id",
          loader: ({ params }) => {
            return fetch(
              `https://service-review-server-plum.vercel.app/services/${params.id}`
            );
          },
          element: <ServicePage></ServicePage>,
        },
        {
          path: "services/:id",
          loader: ({ params }) => {
            return fetch(
              `https://service-review-server-plum.vercel.app/services/${params.id}`
            );
          },
          element: <Reviews></Reviews>,
        },
        {
          path: '/services/service/reviews/review',
          element:<Review></Review>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
