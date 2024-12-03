import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
