import './Workplace.css';
import {useState, useEffect} from 'react';
import {WorkplaceStatus} from './WorkplaceStatus/WorkplaceStatus.jsx';
/* import {TrainCard} from './TrainCard/TrainCard.jsx'; */
import {Step1} from './Step1/Step1.jsx';
import {Step2} from './Step2/Step2.jsx';
import {Step3} from './Step3/Step3.jsx';
import {Step4} from './Step4/Step4.jsx';
import {LastTickets} from './LastTickets/LastTickets.jsx';
import {RequestSettings} from './RequestSettings/RequestSettings.jsx';
import {ChoosingPlace} from './ChoosingPlace/ChoosingPlace.jsx';
import {TripDetails} from './TripDetails/TripDetails.jsx';
import {LDB} from './LocalDatabase.js';





export function Workplace() {
    let [step, setStep] = useState(1);
    let [idSelectedDirection, setIdSelectedDirection] = useState(0);
    let [idSelectedDirectionArrival, setIdSelectedDirectionArrival] = useState(0);
    let [showStep1, setShowStep1] = useState(false);
    let [showStep2, setShowStep2] = useState(false);
    let [showStep3, setShowStep3] = useState(false);
    let [showStep4, setShowStep4] = useState(false);
    let [fetchURL, setFetchURL] = useState();
    let [fetchParams, setFetchParams] = useState();
    let [ChoosingPlaceInfo, setChoosingPlaceInfo] = useState();
    let [tiketInfo, setTiketInfo] = useState({
        tiketsType: {
            adult: 0,
            kid: 0,
            kidNoSid: 0
        },
        totalCost: 0
    });



    /* useEffect(()=>{}) */
    
    

    

    useEffect(()=>{

          switch(step) {
    case 0:
            setShowStep1(false);
            setShowStep2(false);
            setShowStep3(false);
            setShowStep4(false);
      return;
          case 1:
            setShowStep1(true);
            setShowStep2(false);
            setShowStep3(false);
            setShowStep4(false);
      return;
          case 2:
            setShowStep1(false);
            setShowStep2(true);
            setShowStep3(false);
            setShowStep4(false);
      return;
          case 3:
            setShowStep1(false);
            setShowStep2(false);
            setShowStep3(true);
            setShowStep4(false);
      return;
          case 4:
            setShowStep1(false);
            setShowStep2(false);
            setShowStep3(false);
            setShowStep4(true);
      return;
  }
    },[step])

    

    useEffect(()=>{
        //console.log(idSelectedDirection)
        if (idSelectedDirection && idSelectedDirection != 0) {
            /* fetch( `https://students.netoservices.ru/fe-diplom/routes/${idSelectedDirection}/seats` )
            .then( response => response.json())
            .then( data => {
                console.log( data );
                setShowStep1(false);
            }); */
             setShowStep1(false);
        }
    },[idSelectedDirection])


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
                    <RequestSettings style = {step > 1 ? {display: 'none'}:{}} setFetchParams={setFetchParams}/>
                    <LastTickets style = {step > 1 ? {display: 'none'}:{}} />
                    <TripDetails style = {step < 2 ? {display: 'none'}:{}}/>
                    
                </div>
                <div className="workplace-box__instruments__right">
                    <Step1 Step={setStep} setIdSelectedDirection = {setIdSelectedDirection} setIdSelectedDirectionArrival={setIdSelectedDirectionArrival} show={showStep1} fetchURL={fetchURL} setFetchURL={setFetchURL} fetchParams={fetchParams} giveChoosingPlaceInfo = {setChoosingPlaceInfo} />
                    <ChoosingPlace idDirection = {idSelectedDirection} idArrival = {idSelectedDirectionArrival} ChoosingPlaceInfo = {ChoosingPlaceInfo} toNextStep = {setStep} show={showStep1} step={step} setTiketInfo = {setTiketInfo}/>
                    <Step2 Step={setStep} show={showStep2} quantity={3} />
                    <Step3 Step={setStep} show={showStep3} />
                    <Step4 Step={setStep} show={showStep4} />
                </div>
            </div>
        </div>
    );
}