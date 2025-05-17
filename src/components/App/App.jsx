import React, {useState} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import {Menu} from '../Menu/Menu.jsx';
import {PrimaryHeder} from '../PrimaryHeder/PrimaryHeder.jsx';
import {OperationHeader} from '../OperationHeader/OperationHeader.jsx';
import {LastHeader} from '../LastHeader/LastHeader.jsx';
import {AboutUs} from '../AboutUs/AboutUs.jsx';
import {HowItWorks} from '../HowItWorks/HowItWorks.jsx';
import {Reviews} from '../Reviews/Reviews.jsx';
import {Footer} from '../Footer/Footer.jsx';
import {StartComponent} from '../StartComponent/StartComponent.jsx'
import {Workplace} from '../Workplace/Workplace.jsx'


export default function App() {


    return (
        <Router>
        <Routes>
           <Route path='/' element={
            <div>
                <Menu />
                <PrimaryHeder />
                <StartComponent type = 'folded' />
                <AboutUs />
                <HowItWorks />
                <Reviews />
                <Footer />
            </div>
           } />
            <Route path='/about-us' element={ <div><Menu /><AboutUs /></div>}/>
            <Route path='/how-it-works' element={<div><Menu /><HowItWorks /></div>}/>
            <Route path='/reviews' element={<div><Menu /><Reviews /></div>}/>
            <Route path='/footer' element={<div><Menu /><Footer /></div>}/>
            <Route path='/ticket-page' element={
            <div>
                <Menu /> 
                <OperationHeader />
                <StartComponent type = 'horizontal'/>
                <Workplace />
                <Footer />
            </div>
           } />
            <Route path='/last-page' element={
            <div>
                <Menu />
                <LastHeader /> 
                <Footer />
            </div>
           } />
          
        </Routes>
      </Router>
        
        
        
    );
}






/* (
    <Router>
    <Routes>
       <Route path='/' element={
        <div>
            <Menu />
            <PrimaryHeder />
        </div>
       } />
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/how-it-works' element={<HowItWorks />}/>
        <Route path='/reviews' element={<Reviews />}/>
        <Route path='/footer' element={<Footer />}/>
      
    </Routes>
  </Router>
    
    
    
); */