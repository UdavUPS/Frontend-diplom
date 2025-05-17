import './Step2.css';
import {useState, useEffect} from 'react';
import {PassengerCard} from './PassengerCard/PassengerCard.jsx';




export function Step2({Step, show, quantity=3 }) {
    /* Step(2); */

    let elem=[];
    for (let i = 1; i <= quantity; i++) {
        elem.push(<PassengerCard cardNum = {i} />);
    }

    return (
        <div style={{display: show ? 'block' : 'none'}}>
            {elem}
            
        </div>
    )
}