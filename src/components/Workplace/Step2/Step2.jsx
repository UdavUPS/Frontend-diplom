import './Step2.css';
import {useState, useEffect} from 'react';
import {PassengerCard} from './PassengerCard/PassengerCard.jsx';




export function Step2({Step, show, quantity }) {
    let [status, setStatus] = useState(false);
    let [readyCards, setReadyCards] = useState([])
    /* Step(2); */

    useEffect(()=>{
        if ( elem.length != 0) {
            let all = 0;

            readyCards.forEach(num => {all += num});

            if ( elem.length === all) {
                setStatus(true)
            }
           /*  console.log(readyCards.length)
            console.log(all) */
        }
    },[readyCards])

    let elem=[];
    for (let i = 1; i <= quantity; i++) {
        elem.push(<PassengerCard key={i} cardNum = {i} Ready={setReadyCards}/>);
    }

    return (
        <div style={{display: show ? 'block' : 'none'}}>
            {elem}
            <div className="choosing-place-box__btn-to-go btn-mod" style={{backgroundColor: !status ? '#928F94' : '', border: !status ? '#928F94' : ''}} onClick={() => {if (status){Step(3); window.scrollTo(0, 150)}}}>ДАЛЕЕ</div>
        </div>
    )
}