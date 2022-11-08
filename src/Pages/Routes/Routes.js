import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main/Main';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element:<Main></Main>
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;