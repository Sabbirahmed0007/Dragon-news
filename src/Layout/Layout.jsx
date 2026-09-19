import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import LatestNews from '../Components/LatestNews/LatestNews';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const Layout = () => {
    return (
        <div>
            <header>
                {/* Header */}
                <Header></Header>
                {/* Latest news */}
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                {/* Navbar */}
                <section className='w-11/12 mx-auto bg-base-200'>
                <Navbar></Navbar>
                </section>
            </header>
            <main className='w-11/12 mx-auto my-5 grid grid-cols-1 lg:grid-cols-12  '>
                <aside className='col-span-3'><LeftAside></LeftAside></aside>
                <section className='col-span-6 min-h-screen'><Outlet></Outlet></section>
                <aside className='col-span-3'><RightAside></RightAside></aside>
            </main>
            
        </div>
    );
};

export default Layout;