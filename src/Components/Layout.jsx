import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import LatestNews from './LatestNews/LatestNews';

const Layout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <Navbar></Navbar>
            </header>
            <main>
                <section className='left'></section>
                <section><Outlet></Outlet></section>
                <section className='right'></section>
            </main>
            
        </div>
    );
};

export default Layout;