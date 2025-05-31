import './RequestSettings.css';
import { useState, useEffect } from 'react';
import Kupe from './img/Kupe.svg';
import Platscart from './img/Platscart.svg';
import Sit from './img/Sit.svg';
import Star from './img/Star.svg';
import WiFi from './img/WiFi.svg';
import exp from './img/exp.svg';
import timeTo from './img/timeTo.svg';
import timeBack from './img/timeBack.svg';
import Plus from './img/Plus.svg'; 
import Minus from './img/Minus.svg';
import  {Slider}  from './Slider/Slider.jsx';
import { CustomDatepicker } from '../../StartComponent/CustomDatepicker/CustomDatepicker.jsx';




export function RequestSettings({style, setFetchParams}) {
    let [showToltipTo, setShowToltipTo] = useState(false);
    let [showToltipBack, setShowToltipTBack] = useState(false);
    let [dateStart, setDateStart] = useState();
    let [dateEnd, setDateEnd] = useState();
    let [searchParameters, setSearchParameters] = useState({
        dates: {
            date_start: undefined,
            date_end: undefined
        },
        common: {
            first_class: false,
            second_class: false,
            third_class: false,
            fourth_class: false,
            wi_fi: false,
            expr: false,
        },
        cost: {
            min: undefined,
            max: undefined
        },
        time_to: {
            start: {
                min: undefined,
                max: undefined
            },
            finsh: {
                min: undefined,
                max: undefined
            }
        },
        time_back: {
            start: {
                min: undefined,
                max: undefined
            },
            finsh: {
                min: undefined,
                max: undefined
            }
        }
    });

    useEffect(() => {
        setFetchParams(searchParameters)
    }, [searchParameters])

    useEffect(() => {
        setSearchParameters(prevState => ({
            ...prevState,
            dates: {
                ...prevState.dates,
                date_end: dateEnd
            }
            }));
    }, [dateEnd])

    useEffect(() => {
        setSearchParameters(prevState => ({
            ...prevState,
            dates: {
                ...prevState.dates,
                date_start: dateStart
            }
            }));
    }, [dateStart])

    function commonParameters (name) {
        setSearchParameters(prevState => ({
            ...prevState,
            common: {
                ...prevState.common,
                [name]: !prevState.common[name]
            }
            }));
        }

    function costParameters (min_max, value) {
         setSearchParameters(prevState => ({
            ...prevState,
            cost: {
                ...prevState.cost,
                [min_max]: value
            }
            }));
        }

     function timeToStartParameters (min_max, value) {
         setSearchParameters(prevState => ({
            ...prevState,
            time_to: {
                ...prevState.time_to,
                start: {
                    ...prevState.time_to.start,
                    [min_max]: value
                }
            }
            }));
        }

     function timeToFinishParameters (min_max, value) {
         setSearchParameters(prevState => ({
            ...prevState,
            time_to: {
                ...prevState.time_to,
                finsh: {
                    ...prevState.time_to.finsh,
                    [min_max]: value
                }
            }
            }));
        }

     function timeBackStartParameters (min_max, value) {
         setSearchParameters(prevState => ({
            ...prevState,
            time_back: {
                ...prevState.time_back,
                start: {
                    ...prevState.time_back.start,
                    [min_max]: value
                }
            }
            }));
        }

    function timeBackFinishParameters (min_max, value) {
         setSearchParameters(prevState => ({
            ...prevState,
            time_back: {
                ...prevState.time_back,
                finsh: {
                    ...prevState.time_back.finsh,
                    [min_max]: value
                }
            }
            }));
        }

 function test () {
    console.log(dateStart)
 }


    function openTolytip (toltipType) {

        if ( toltipType === 'to' ) {
            if (showToltipTo) {
                setShowToltipTo(false)
            } else {
                setShowToltipTo(true)
            }
        } else {
            if (showToltipBack) {
                setShowToltipTBack(false)
            } else {
                setShowToltipTBack(true)
            }
        }
    }
    

    

    return (
        <div className="request-settings-box" style={style}>
            <div className="request-settings-box__dates">
                <p className="request-settings-box__dates__title rs-titles">Дата поездки</p>
                {/* <input type="date" className="request-settings-box__dates__input" /> */}
                <CustomDatepicker RequestSettings={true} takeDate ={setDateStart}/>
                <p className="request-settings-box__dates__title rs-titles">Дата возвращения</p>
                {/* <input type="date" className="request-settings-box__dates__input" /> */}
                <CustomDatepicker RequestSettings={true} takeDate ={setDateEnd}/>
            </div>
            <div className="request-settings-box__conveniences">
                <div className="request-settings-box__conveniences_item">
                    <img src={Kupe} className="request-settings-box__conveniences_item__logo" alt="" />
                    <div className="request-settings-box__conveniences_item__name">Купе</div>
                    <div className="request-settings-box__conveniences_item__switch" >
                        <input type="checkbox" id="switch1" className="request-settings-box__conveniences_item__switch__input" checked={searchParameters.common.second_class} onChange={() => commonParameters('second_class')} />
                        <label htmlFor="switch1"className="request-settings-box__conveniences_item__switch__lab">
                            <span className="insit-lab"></span>
                        </label>
                    </div>
                    
                </div>
                <div className="request-settings-box__conveniences_item">
                    <img src={Platscart} className="request-settings-box__conveniences_item__logo" alt="" />
                    <div className="request-settings-box__conveniences_item__name">Плацкарт</div>
                    <div className="request-settings-box__conveniences_item__switch" /* onClick={()=>{commonParameters('second_class')}} */>
                        <input type="checkbox" id="switch2" className="request-settings-box__conveniences_item__switch__input" checked={searchParameters.common.third_class} onChange={() => commonParameters('third_class')} />
                        <label htmlFor="switch2"className="request-settings-box__conveniences_item__switch__lab">
                            <span className="insit-lab"></span>
                        </label>
                    </div>
                </div>
                <div className="request-settings-box__conveniences_item">
                    <img src={Sit} className="request-settings-box__conveniences_item__logo" alt="" />
                    <div className="request-settings-box__conveniences_item__name">Сидячий</div>
                    <div className="request-settings-box__conveniences_item__switch">
                        <input type="checkbox" id="switch3" className="request-settings-box__conveniences_item__switch__input" checked={searchParameters.common.fourth_class} onChange={() => commonParameters('fourth_class')} />
                        <label htmlFor="switch3"className="request-settings-box__conveniences_item__switch__lab">
                            <span className="insit-lab"></span>
                        </label>
                    </div>
                </div>
                <div className="request-settings-box__conveniences_item">
                    <img src={Star} className="request-settings-box__conveniences_item__logo" alt="" />
                    <div className="request-settings-box__conveniences_item__name">Люкс</div>
                    <div className="request-settings-box__conveniences_item__switch">
                        <input type="checkbox" id="switch4" className="request-settings-box__conveniences_item__switch__input" checked={searchParameters.common.first_class} onChange={() => commonParameters('first_class')} />
                        <label htmlFor="switch4"className="request-settings-box__conveniences_item__switch__lab">
                            <span className="insit-lab"></span>
                        </label>
                    </div>
                </div>
                <div className="request-settings-box__conveniences_item">
                    <img src={WiFi} className="request-settings-box__conveniences_item__logo" alt="" />
                    <div className="request-settings-box__conveniences_item__name">Wi-Fi </div>
                    <div className="request-settings-box__conveniences_item__switch">
                        <input type="checkbox" id="switch5" className="request-settings-box__conveniences_item__switch__input" checked={searchParameters.common.wi_fi} onChange={() => commonParameters('wi_fi')} />
                        <label htmlFor="switch5"className="request-settings-box__conveniences_item__switch__lab">
                            <span className="insit-lab"></span>
                        </label>
                    </div>
                </div>
                <div className="request-settings-box__conveniences_item">
                    <img src={exp} className="request-settings-box__conveniences_item__logo" alt="" />
                    <div className="request-settings-box__conveniences_item__name">Экспресс</div>
                    <div className="request-settings-box__conveniences_item__switch">
                        <input type="checkbox" id="switch6" className="request-settings-box__conveniences_item__switch__input" checked={searchParameters.common.expr} onChange={() => commonParameters('expr')} />
                        <label htmlFor="switch6"className="request-settings-box__conveniences_item__switch__lab">
                            <span className="insit-lab"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="request-settings-box__cost">
                <p className="request-settings-box__cost__title rs-titles">Стоимость</p>
                <Slider paramSetter={costParameters}/>
            </div>
            <div className="request-settings-box__time-trip">
                <div className="request-settings-box__time-trip__heder" onClick={() => openTolytip('to')}>
                    <img src={timeTo} className="request-settings-box__time-trip__heder__logo" />
                    <div className="request-settings-box__time-trip__heder__name rs-titles">Туда</div>
                    <img src={showToltipTo ? Minus : Plus } className="request-settings-box__time-trip__heder__btn" />
                </div>
                <div className="request-settings-box__time-trip__toltip" style={showToltipTo ? {display: 'inline-block'} : {display: 'none'}}>
                    <p className="request-settings-box__time-trip__toltip__title ">Время отбытия</p>
                    <Slider type = 'time' paramSetter={timeToStartParameters}/>
                    <p className="request-settings-box__time-trip__toltip__title toltip-title-mode">Время прибытия</p>
                    <Slider type = 'time' paramSetter={timeToFinishParameters} />
                </div>
            </div>
            <div className="request-settings-box__time-trip">
                <div className="request-settings-box__time-trip__heder" onClick={() => openTolytip('back')}>
                    <img src={timeBack} className="request-settings-box__time-trip__heder__logo" />
                    <div className="request-settings-box__time-trip__heder__name rs-titles">Обратно</div>
                    <img src={showToltipBack ? Minus : Plus } className="request-settings-box__time-trip__heder__btn" />
                </div>
                <div className="request-settings-box__time-trip__toltip" style={showToltipBack ? {display: 'inline-block'} : {display: 'none'}}>
                    <p className="request-settings-box__time-trip__toltip__title ">Время отбытия</p>
                    <Slider type = 'time' paramSetter={timeBackStartParameters} />
                    <p className="request-settings-box__time-trip__toltip__title toltip-title-mode">Время прибытия</p>
                    <Slider type = 'time' paramSetter={timeBackFinishParameters}/>
                </div>
            </div>
            <button onClick={test}>ТЕСТ</button>
        </div>
    )
}
