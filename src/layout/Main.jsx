import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import FooterBar from '../shared/FooterBar/FooterBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterBar></FooterBar>
        </div>
    );
};

export default Main;