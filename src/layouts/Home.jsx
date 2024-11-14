import React from 'react';
import Header from '../components/Header';
import LatesNews from '../components/LatesNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-component/leftNavbar';
import RightNav from '../components/layout-component/RightNav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto'>
                    <LatesNews></LatesNews>
                </section>
            </header>

            <nav className="w-10/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
      
            <main className='w-10/12 mx-auto pt-6 grid md:grid-cols-12 gap-3'>
                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'> <Outlet></Outlet> </section>
                <aside className=' col-span-3'>
                    <RightNav></RightNav>
                </aside>

            </main>
        </div>
    );
};

export default Home;