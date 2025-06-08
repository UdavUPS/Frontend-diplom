import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import {Menu} from '../Menu/Menu.jsx';
import {PrimaryHeder} from '../PrimaryHeder/PrimaryHeder.jsx';
import {OperationHeader} from '../OperationHeader/OperationHeader.jsx';
import {LastHeader} from '../LastHeader/LastHeader.jsx';
import {AboutUs} from '../AboutUs/AboutUs.jsx';
import {HowItWorks} from '../HowItWorks/HowItWorks.jsx';
import {Reviews} from '../Reviews/Reviews.jsx';
import {Footer} from '../Footer/Footer.jsx';
import {StartComponent} from '../StartComponent/StartComponent.jsx';
import {Workplace} from '../Workplace/Workplace.jsx';
import {LastMessagePlace} from '../LastMessagePlace/LastMessagePlace.jsx';

function HomePage() {
  const aboutUsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const reviewsRef = useRef(null);
  const footerRef = useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const ref = {
        'about-us': aboutUsRef,
        'how-it-works': howItWorksRef,
        'reviews': reviewsRef,
        'footer': footerRef
      }[location.state.scrollTo];
      
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Menu />
      <PrimaryHeder />
      <StartComponent type='folded' />
      <div ref={aboutUsRef}><AboutUs /></div>
      <div ref={howItWorksRef}><HowItWorks /></div>
      <div ref={reviewsRef}><Reviews /></div>
      <div ref={footerRef}><Footer /></div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ticket-page' element={
          <div>
            <Menu /> 
            <OperationHeader />
            <StartComponent type='horizontal'/>
            <Workplace />
            <Footer />
          </div>
        } />
        <Route path='/last-page' element={
          <div>
            <Menu />
            <LastHeader />
            <LastMessagePlace /> 
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}