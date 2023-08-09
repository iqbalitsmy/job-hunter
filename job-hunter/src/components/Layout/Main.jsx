import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Main;