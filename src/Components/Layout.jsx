import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <header><Header></Header><Navbar></Navbar></header>
            <main>
                <section></section>
                <section><Outlet></Outlet></section>
                <section></section>
            </main>
            
        </div>
    );
};

export default Layout;