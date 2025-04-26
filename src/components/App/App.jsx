import React, {useState} from 'react';
import './App.css';
import {Menu} from '../Menu/Menu.jsx';
import {PrimaryHeder} from '../PrimaryHeder/PrimaryHeder.jsx';
import {AboutUs} from '../AboutUs/AboutUs.jsx';
import {HowItWorks} from '../HowItWorks/HowItWorks.jsx';
import {Reviews} from '../Reviews/Reviews.jsx';
import {Footer} from '../Footer/Footer.jsx';


export default function App() {


    return (
        <div>
            <Menu />
            <PrimaryHeder />
            <AboutUs />
            <HowItWorks />
            <Reviews />
            <Footer />
        </div>
    );
}