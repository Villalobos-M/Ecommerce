import React from 'react';
import { Outlet } from 'react-router-dom'
import "../styles/components/header.styles.css"
import Footer from './Footer';
import NavBar from './NavBar';

const MainLayout = () => {


  return (
      <div>
        <NavBar/>
        <Outlet />
        <Footer/>
      </div>
  );
};

export default MainLayout;
