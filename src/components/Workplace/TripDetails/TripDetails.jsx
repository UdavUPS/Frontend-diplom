import './TripDetails.css';
import { useState, useEffect } from 'react';
import timeTo from './img/timeTo.svg';
import timeBack from './img/timeBack.svg';
import Plus from './img/Plus.svg'; 
import Minus from './img/Minus.svg';
import Pas from './img/Pas.svg'; 
import arrowDir from './img/arrowDir.svg';
import arrowArr from './img/arrowArr.svg';





export function TripDetails({style, ChoosingPlaceInfo, tiketInfo}) {
    let [showToltipTo, setShowToltipTo] = useState(false);
    let [showToltipBack, setShowToltipTBack] = useState(false);
    let [showToltipPas, setShowToltipTPas] = useState(false);

/*     useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */

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
                    <div className="trip-details-box__directions__toltip__item"><span>№ Поезда</span> <span style={{fontWeight: '700', fontSize: '24px', color: '#FFFFFF'}}>{ChoosingPlaceInfo?.trainNum}</span></div>
                    <div className="trip-details-box__directions__toltip__item"><span>Название</span> <span style={{fontWeight: '700', fontSize: '16px', color: '#FFFFFF', textTransform: 'capitalize'}}>{ChoosingPlaceInfo?.cityFrom}{<br/>}{ChoosingPlaceInfo?.cityTo}</span></div>
                    <div className="trip-details-box__directions__toltip__item mod-for-time">{ChoosingPlaceInfo?.Direction?.timeWay}</div>
                    <div className="trip-details-box__directions__toltip__item" style={{fontWeight: '700', fontSize: '24px', color: '#FFFFFF'}}>{ChoosingPlaceInfo?.Direction?.timeFrom}<img src={arrowDir}/>{ChoosingPlaceInfo?.Direction?.timeTo}</div>
                    <div className="trip-details-box__directions__toltip__item line-mod" style={{fontWeight: '700', fontSize: '18px', color: '#FFFFFF', textTransform: 'capitalize'}}><span>{ChoosingPlaceInfo?.cityFrom}</span><span>{ChoosingPlaceInfo?.cityTo}</span></div>
                    <div className="trip-details-box__directions__toltip__item line-mod" ><span>{ChoosingPlaceInfo?.Direction?.stationFrom}</span><span>{ChoosingPlaceInfo?.Direction?.stationTo}</span></div>
                    <div className="trip-details-box__directions__toltip__item line-mod" ><span>вокзал</span><span>вокзал</span></div>
                </div>
            </div>
            <div className="trip-details-box__directions">
                <div className="trip-details-box__directions__heder" onClick={() => openTolytip('back')}>
                    <img src={timeBack} className="trip-details-box__directions__heder__logo" />
                    <div className="trip-details-box__directions__heder__name rs-titles">Обратно</div>
                    <img src={showToltipBack ? Minus : Plus } className="trip-details-box__directions__heder__btn" />
                </div>
                <div className="trip-details-box__directions__toltip" style={showToltipBack ? {display: 'inline-block'} : {display: 'none'}}>
                    <div style={{display: ChoosingPlaceInfo?.Arrival ? 'block' : 'none'}}>
                        <div className="trip-details-box__directions__toltip__item"><span>№ Поезда</span> <span style={{fontWeight: '700', fontSize: '24px', color: '#FFFFFF'}}>{ChoosingPlaceInfo?.trainNum}</span></div>
                        <div className="trip-details-box__directions__toltip__item"><span>Название</span> <span style={{fontWeight: '700', fontSize: '16px', color: '#FFFFFF', textTransform: 'capitalize'}}>{ChoosingPlaceInfo?.cityFrom}{<br/>}{ChoosingPlaceInfo?.cityTo}</span></div>
                        <div className="trip-details-box__directions__toltip__item mod-for-time">{ChoosingPlaceInfo?.Arrival?.timeWayArrival}</div>
                        <div className="trip-details-box__directions__toltip__item" style={{fontWeight: '700', fontSize: '24px', color: '#FFFFFF'}}>{ChoosingPlaceInfo?.Arrival?.timeFromArrival}<img src={arrowArr}/>{ChoosingPlaceInfo?.Arrival?.timeToArrival}</div>
                        <div className="trip-details-box__directions__toltip__item line-mod" style={{fontWeight: '700', fontSize: '18px', color: '#FFFFFF', textTransform: 'capitalize'}}><span>{ChoosingPlaceInfo?.cityFrom}</span><span>{ChoosingPlaceInfo?.cityTo}</span></div>
                        <div className="trip-details-box__directions__toltip__item line-mod" ><span>{ChoosingPlaceInfo?.Arrival?.stationFromArrival}</span><span>{ChoosingPlaceInfo?.Arrival?.stationToArrival}</span></div>
                        <div className="trip-details-box__directions__toltip__item line-mod" ><span>вокзал</span><span>вокзал</span></div>
                    </div>
                    <div style={{display: ChoosingPlaceInfo?.Arrival ? 'none' : 'block'}}>
                        <div className="trip-details-box__directions__toltip__item"><span>ОБРАТНЫЙ ПУТЬ НЕ ВЫБРАН</span></div>
                    </div>
                </div>
            </div>
                <div className="trip-details-box__directions">
                <div className="trip-details-box__directions__heder" onClick={() => openTolytip('pas')}>
                    <img src={Pas} className="trip-details-box__directions__heder__logo" />
                    <div className="trip-details-box__directions__heder__name rs-titles">Пассажиры</div>
                    <img src={showToltipPas ? Minus : Plus } className="trip-details-box__directions__heder__btn" />
                </div>
                <div className="trip-details-box__directions__toltip" style={showToltipPas ? {display: 'inline-block'} : {display: 'none'}}>
                    <div className="trip-details-box__directions__toltip__item"><span>{tiketInfo?.tiketsType?.adult} Взрослых</span> <span style={{fontWeight: '700', fontSize: '24px', color: '#FFFFFF'}}>{tiketInfo?.costs?.adult} <span style={{color: '#928F94'}}>₽</span></span></div>
                    <div className="trip-details-box__directions__toltip__item"><span>{tiketInfo?.tiketsType?.kid} Детских</span> <span style={{fontWeight: '700', fontSize: '24px', color: '#FFFFFF'}}>{tiketInfo?.costs?.kid} <span style={{color: '#928F94'}}>₽</span></span></div>
                </div>
            </div>
            <div className="trip-details-box__total-cost">
                <div className="trip-details-box__total-cost__title">Итог</div>
                <div className="trip-details-box__total-cost__cost">{tiketInfo?.totalCost}<p>₽</p></div>
            </div>
        </div>
    )
}
