import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;