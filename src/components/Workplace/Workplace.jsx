import './Workplace.css';
import {useState} from 'react';
import {WorkplaceStatus} from './WorkplaceStatus/WorkplaceStatus.jsx';
/* import {TrainCard} from './TrainCard/TrainCard.jsx'; */
import {Step1} from './Step1/Step1.jsx';
import {LastTickets} from './LastTickets/LastTickets.jsx';
import {RequestSettings} from './RequestSettings/RequestSettings.jsx';



export function Workplace() {
    let [step, setStep] = useState(0);


    function test() {
/*         fetch( 'https://students.netoservices.ru/fe-diplom/routes/cities?name=мос' )
    .then( response => response.json())
    .then( data => console.log( data )); */

/*     fetch( 'https://students.netoservices.ru/fe-diplom/subscribe?email=hello@kitty.com' )
    .then( response => response.json())
    .then( data => console.log( data )); */

  /*   fetch( 'https://students.netoservices.ru/fe-diplom/routes/last' )
    .then( response => response.json())
    .then( data => {
        data.forEach( el => {
            console.log('el', el)
        })
    }); */

    fetch( 'https://students.netoservices.ru/fe-diplom/routes?from_city_id=67ceb6548c75f00047c8f78e&to_city_id=67ceb6548c75f00047c8f794&limit=200' )
    .then( response => response.json()
        .then( data => { console.log( 'routes',  data ) })
    );


    }
    

    return (
        <div className="workplace-box" >
            <WorkplaceStatus step = {step} />
            <div className="workplace-box__instruments">
                <div className="workplace-box__instruments__left">
                   {/*  <button onClick={test}>asdasdsa</button> */}
                    <RequestSettings style = {step > 1 ? {display: 'none'}:{}}/>
                    <LastTickets style = {step > 1 ? {display: 'none'}:{}} />
                </div>
                <div className="workplace-box__instruments__right">
                    <Step1 Step={setStep} fromCity={'67ceb6548c75f00047c8f78'} toCity={'67ceb6548c75f00047c8f794'} />
                </div>
            </div>
        </div>
    );
}