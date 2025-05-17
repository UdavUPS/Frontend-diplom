import './TripDetails.css';
import { useState } from 'react';
import timeTo from './img/timeTo.svg';
import timeBack from './img/timeBack.svg';
import Plus from './img/Plus.svg'; 
import Minus from './img/Minus.svg';
import Pas from './img/Pas.svg';





export function TripDetails({style}) {
    let [showToltipTo, setShowToltipTo] = useState(false);
    let [showToltipBack, setShowToltipTBack] = useState(false);
    let [showToltipPas, setShowToltipTPas] = useState(false);

    function openTolytip (toltipType) {

        if ( toltipType === 'to' ) {
            if (showToltipTo) {
                setShowToltipTo(false)
            } else {
                setShowToltipTo(true)
            }
        } 
        if ( toltipType === 'back' ) {
            if (showToltipBack) {
                setShowToltipTBack(false)
            } else {
                setShowToltipTBack(true)
            }
        }
        if ( toltipType === 'pas' ) {
            if (showToltipPas) {
                setShowToltipTPas(false)
            } else {
                setShowToltipTPas(true)
            }
        }
    }

    return (
        <div className="trip-details-box" style={style}>
            <div className="trip-details-box__title">Детали поездки</div>
            <div className="trip-details-box__directions">
                <div className="trip-details-box__directions__heder" onClick={() => openTolytip('to')}>
                    <img src={timeTo} className="trip-details-box__directions__heder__logo" />
                    <div className="trip-details-box__directions__heder__name rs-titles">Туда</div>
                    <img src={showToltipTo ? Minus : Plus } className="trip-details-box__directions__heder__btn" />
                </div>
                    <div className="trip-details-box__directions__toltip" style={showToltipTo ? {display: 'inline-block'} : {display: 'none'}}>
                </div>
            </div>
            <div className="trip-details-box__directions">
                <div className="trip-details-box__directions__heder" onClick={() => openTolytip('back')}>
                    <img src={timeBack} className="trip-details-box__directions__heder__logo" />
                    <div className="trip-details-box__directions__heder__name rs-titles">Обратно</div>
                    <img src={showToltipBack ? Minus : Plus } className="trip-details-box__directions__heder__btn" />
                </div>
                    <div className="trip-details-box__directions__toltip" style={showToltipBack ? {display: 'inline-block'} : {display: 'none'}}>
                </div>
            </div>
                <div className="trip-details-box__directions">
                <div className="trip-details-box__directions__heder" onClick={() => openTolytip('pas')}>
                    <img src={Pas} className="trip-details-box__directions__heder__logo" />
                    <div className="trip-details-box__directions__heder__name rs-titles">Пассажиры</div>
                    <img src={showToltipPas ? Minus : Plus } className="trip-details-box__directions__heder__btn" />
                </div>
                    <div className="trip-details-box__directions__toltip" style={showToltipPas ? {display: 'inline-block'} : {display: 'none'}}>
                </div>
            </div>
            <div className="trip-details-box__total-cost">
                <div className="trip-details-box__total-cost__title">Итог</div>
                <div className="trip-details-box__total-cost__cost">7500<p>₽</p></div>
            </div>
        </div>
    )
}
