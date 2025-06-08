import './ChoosingPlace.css';
import { add0 } from './functionForChoosingPlace.js';
import { useState, useEffect } from 'react';
import {VanMap} from './VanMap/VanMap.jsx';
import SitV from './img/SitV.svg';
import SitVch from './img/SitVch.svg';
import PlatV from './img/PlatV.svg';
import PlatVch from './img/PlatVch.svg';
import KupeV from './img/KupeV.svg';
import KupeVch from './img/KupeVch.svg';
import LucsV from './img/LucsV.svg';
import LucsVch from './img/LucsVch.svg';
import arrowL from './img/arrowL.svg';
import arrowR from './img/arrowR.svg';
import arrowOrL from './img/arrowOrL.svg';
import arrowOrR from './img/arrowOrR.svg';
import trLogo from './img/trLogo.svg'; 
import clock from './img/clock.svg'; 
import Condey from './img/Condey.svg';
import CondeySel from './img/CondeySel.svg';  
import WiFiForBut from './img/WiFiForBut.svg';
import WiFiForButSel from './img/WiFiForButSel.svg'; 
import underwear from './img/underwear.svg';
import underwearSel from './img/underwearSel.svg';  
import mug from './img/mug.svg';
import mugSel from './img/mugSel.svg';

export function ChoosingPlace({idDirection, idArrival, ChoosingPlaceInfo, toNextStep, show, step, setTiketInfo}) {
    let [Direction, setDirection] = useState();
    let [tiketTotalCost, setTiketTotalCost] = useState(0);
    let [Arrival, setArrival] = useState();
    let [numSelectedVanDir, setNumSelectedVanDir] = useState(1);
    let [numbersVanDir, setNumbersVanDir] = useState([]);
    let [numSelectedVanArr, setNumSelectedVanArr] = useState(1);
    let [numbersVanArr, setNumbersVanArr] = useState([]); 
    let [services, setServices] = useState({
        condey: {
            have: true,
            selected: false,
            included: false,
            haveArr: true,
            selectedArr: false,
            includedArr: false    
        },
        WiFiForBut: {
            have: true,
            selected: false,
            included: false,
            haveArr: true,
            selectedArr: false,
            includedArr: false
        },
        underwear: {
            have: true,
            selected: false,
            included: false,
            haveArr: true,
            selectedArr: false,
            includedArr: false
        },
        mug: {
            have: true,
            selected: false,
            included: false,
            haveArr: true,
            selectedArr: false,
            includedArr: false
        }
    });
    let [selectedPlace, setSelectedPlace] = useState({
        Dir: [],
        Arr: []
    });
    let [quantitySit, setQuantitySit] = useState({
        dir: {
            adult: 0,
            kid: 0,
            kidNoSid: 0
        },
        arr: {
            adult: 0,
            kid: 0,
            kidNoSid: 0
        }
    });  
    let [selectedTiketType, setSelectedTiketType] = useState({
        dir: {
            adult: true,
            kid: false,
            kidNoSid: false
        },
        arr: {
            adult: true,
            kid: false,
            kidNoSid: false
        }
    });


    function addNewPlace (num, way) {
        setSelectedPlace((sit) =>({
            ...sit,
            [way]:[...sit[way], num]
        }))
        /* console.log(selectedPlace); */
    }

    function changeTiketType (type, way) {
        setSelectedTiketType((tiket) => ({
            ...tiket,
             [way]:{
                adult: false,
                kid: false,
                kidNoSid: false,
                [type]: !tiket[way][type]
             }
        }))
    }

    useEffect(() => {
        if (selectedPlace.Dir.length != 0) {
            let cost = 0;
            if (Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'second' || Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'third') {
                if (selectedPlace.Dir.slice(-1) % 2 == 0) {cost = cost + Direction?.[numSelectedVanDir - 1]?.coach?.top_price} else {cost = cost + Direction?.[numSelectedVanDir - 1]?.coach?.bottom_price}
            } else {
                if (Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'first') {cost = cost + Direction?.[numSelectedVanDir - 1]?.coach?.price} else {cost = cost + Direction?.[numSelectedVanDir - 1]?.coach?.top_price}
            }
            if (selectedTiketType.dir.kid) {cost = cost * 0.5}
            if (services.condey.selected || services.condey.included) {cost = cost + 10}
            if (services.WiFiForBut.selected || services.WiFiForBut.included) {cost = cost + Direction?.[numSelectedVanDir - 1]?.coach?.wifi_price} 
            if (services.underwear.selected || services.underwear.included) {cost = cost + Direction?.[numSelectedVanDir - 1]?.coach?.linens_price}
            if (services.mug.selected || services.mug.included) {cost = cost + 10}

            if (selectedTiketType.dir.adult) {setQuantitySit((p) => ({
                ...p,
                dir: {
                    ...p.dir,
                    adult: p.dir.adult++
                }
            }))}
            if (selectedTiketType.dir.kid) {setQuantitySit((p) => ({
                ...p,
                dir: {
                    ...p.dir,
                    kid: p.dir.kid++
                }
            }))}
            if (selectedTiketType.dir.kidNoSid) {setQuantitySit((p) => ({
                ...p,
                dir: {
                    ...p.dir,
                    kidNoSid: p.dir.kidNoSid++
                }
            }))
            cost = 0
            }

            setTiketTotalCost(tiketTotalCost + cost);

            /* console.log (cost);
            console.log (tiketTotalCost ); */
        }
    }, [selectedPlace.Dir])

        useEffect(() => {
        if (selectedPlace.Arr.length != 0) {
            let cost = 0;
            if (Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'second' || Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'third') {
                if (selectedPlace.Arr.slice(-1) % 2 == 0) {cost = cost + Arrival?.[numSelectedVanArr - 1]?.coach?.top_price} else {cost = cost + Arrival?.[numSelectedVanArr - 1]?.coach?.bottom_price}
            } else {
                if (Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'first') {cost = cost + Arrival?.[numSelectedVanArr - 1]?.coach?.price} else {cost = cost + Arrival?.[numSelectedVanArr - 1]?.coach?.top_price}
            }
            if (selectedTiketType.arr.kid) {cost = cost * 0.5}
            if (services.condey.selectedArr || services.condey.includedArr) {cost = cost + 10}
            if (services.WiFiForBut.selectedArr || services.WiFiForBut.includedArr) {cost = cost + Arrival?.[numSelectedVanArr - 1]?.coach?.wifi_price} 
            if (services.underwear.selectedArr || services.underwear.includedArr) {cost = cost + Arrival?.[numSelectedVanDir - 1]?.coach?.linens_price}
            if (services.mug.selectedArr || services.mug.includedArr) {cost = cost + 10}

            if (selectedTiketType.arr.adult) {setQuantitySit((p) => ({
                ...p,
                arr: {
                    ...p.arr,
                    adult: p.arr.adult++
                }
            }))}
            if (selectedTiketType.arr.kid) {setQuantitySit((p) => ({
                ...p,
                arr: {
                    ...p.arr,
                    kid: p.arr.kid++
                }
            }))}
            if (selectedTiketType.arr.kidNoSid) {setQuantitySit((p) => ({
                ...p,
                arr: {
                    ...p.arr,
                    kidNoSid: p.arr.kidNoSid++
                }
            }))
            cost = 0
            }

            setTiketTotalCost(tiketTotalCost + cost);

            console.log (cost);
            console.log (tiketTotalCost );
        }
    }, [selectedPlace.Arr])

    useEffect(()=>{
        setTiketInfo((e)=>({
            ...e,
            totalCost: tiketTotalCost
        }))
    },[tiketTotalCost])


    useEffect(()=>{
        if (!idDirection) {return} //idDirection всегда должен быть
        try {
            fetch( `https://students.netoservices.ru/fe-diplom/routes/${idDirection}/seats` )
            .then( response => response.json())
            .then( data => {
                setDirection(data)
            });

            if (idArrival) {
                try {
                    fetch( `https://students.netoservices.ru/fe-diplom/routes/${idArrival}/seats`)
                    .then( response => response.json())
                    .then( data2 => {
                        setArrival(data2)
                    });
                    
                } catch (error) {
                    console.error('Ошибка запроса в обратном направлении(idArrival):', error);
                }
            }
            
        } catch (error) {
            console.error('Ошибка запроса:', error);
        }
    }, [idDirection, idArrival])

    useEffect(()=>{
        if (Direction) {   /* console.log(Direction?.[numSelectedVanDir - 1]?.coach) */  
            doNumbersVan(Direction, setNumbersVanDir, numSelectedVanDir, setNumSelectedVanDir);
            setServices((prev) => ({
                ...prev,
                condey: {
                    ...prev.condey,
                    have: Direction?.[numSelectedVanDir - 1]?.coach?.have_air_conditioning,
                    included: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'first' ? true : false
                },
                WiFiForBut: {
                    ...prev.WiFiForBut,
                    have: Direction?.[numSelectedVanDir - 1]?.coach?.have_wifi,
                    included: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'first' ? true : false
                },
                underwear: {
                    ...prev.underwear,
                    have: Direction?.[numSelectedVanDir - 1]?.coach?.linens_price ? true : false,
                    included: Direction?.[numSelectedVanDir - 1]?.coach?.is_linens_included
                }
            }))
        }
    },[Direction, numSelectedVanDir])

    useEffect(()=>{
        if (Arrival) {
            doNumbersVan(Arrival, setNumbersVanArr, numSelectedVanArr, setNumSelectedVanArr);
            setServices((prev) => ({
                ...prev,
                condey: {
                    ...prev.condey,
                    haveArr: Arrival?.[numSelectedVanArr - 1]?.coach?.have_air_conditioning,
                    includedArr: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'first' ? true : false
                },
                WiFiForBut: {
                    ...prev.WiFiForBut,
                    haveArr: Arrival?.[numSelectedVanArr - 1]?.coach?.have_wifi,
                    includedArr: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'first' ? true : false
                },
                underwear: {
                    ...prev.underwear,
                    haveArr: Arrival?.[numSelectedVanArr - 1]?.coach?.linens_price ? true : false,
                    includedArr: Arrival?.[numSelectedVanArr - 1]?.coach?.is_linens_included
                }
            }))
        }
    },[Arrival, numSelectedVanArr])

    function doNumbersVan(orientation, setFunction, numSelectedVan, setNumSelectedVan) {
    let mas = [];
    const forKey = orientation == Direction ? 'd' : 'a';
    for (let i = 1; i < orientation.length + 1; i++) {
        let col = numSelectedVan == i ? '#000000' : '#ffffff';
        let prefix = i < 10 ? '0' : '';
        mas.push(
            <span key={forKey + i} className='choosing-place-box__item__van-num__nums' style={{color: col}} onClick={()=>{setNumSelectedVan(i)}}>{prefix}{i} </span>
        );
    }
        setFunction(mas);
    }

    

    function serviceSelect (service, name, arr = false) {
        if (!service.classList.contains('choosing-place-box__item__van-info__service_btns__item')) {
           service = service.parentElement;
        }
        if (services[name].included) {return}
        if (service.classList.contains('btn-selected')) {
            service.classList.remove('btn-selected')
        } else {
            service.classList.add('btn-selected')
        }

        if (!arr) {
            setServices((prev) => ({
            ...prev,
             [name]: {
                ...prev[name],
                selected: !prev[name]?.selected
             }
        }))
        } else {
            setServices((prev) => ({
            ...prev,
             [name]: {
                ...prev[name],
                selectedArr: !prev[name]?.selectedArr
             }
        }))
        }

        
    }


    return (
        <div style={{display: !show && step == 1 ? 'block' : 'none'}}>
        <div className="choosing-place-box"  style={{display: idDirection ? 'block' : 'none'}} >
            <div className="choosing-place-box__title">Выбор мест</div>
            {/* Direction */}
            <div className="choosing-place-box__item">
                <div style={{display:'flex'}}>
                    <div className="choosing-place-box__item__btn-logo"><img src={arrowR} style={{width:'40px', height: '30px'}} /></div>
                    <div className="choosing-place-box__item__btn">Выбрать другой поезд</div>
                </div>
                <div className="choosing-place-box__item__trin-info">
                    <div className="choosing-place-box__item__trin-info__part">
                        <img src={trLogo} className="choosing-place-box__item__trin-info__part__logo" />
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <div className="choosing-place-box__item__trin-info__part__title">{ChoosingPlaceInfo?.trainNum}</div>
                        <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.cityFrom} →</div>
                        <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.cityTo}</div>
                        
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <div className="choosing-place-box__item__trin-info__part__title">{ChoosingPlaceInfo?.Direction?.timeFrom}</div>
                        <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.cityFrom}</div>
                        <div className="choosing-place-box__item__trin-info__part__text grey-text">{ChoosingPlaceInfo?.Direction?.stationFrom} <span style={{textTransform: 'lowercase'}}>вокзал</span></div>
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <img src={arrowOrR} alt="" className="choosing-place-box__item__trin-info__part__arrow" />
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <div className="choosing-place-box__item__trin-info__part__title">{ChoosingPlaceInfo?.Direction?.timeTo}</div>
                        <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.cityTo}</div>
                        <div className="choosing-place-box__item__trin-info__part__text grey-text">{ChoosingPlaceInfo?.Direction?.stationTo} <span style={{textTransform: 'lowercase'}}>вокзал</span></div>
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <img src={clock} className="choosing-place-box__item__trin-info__part__logo" />
                        <div className="text-blokc">
                            <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.Direction?.timeWay.substring(0, 2)} <span style={{textTransform: 'lowercase'}}>часов</span></div>
                            <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.Direction?.timeWay.substring(3, 5)} <span style={{textTransform: 'lowercase'}}>минут</span></div>
                        </div>
                    </div>
                </div>
                <div className="choosing-place-box__item__title">Количество билетов</div>
                <div className="choosing-place-box__item__quantity">
                    <div className="choosing-place-box__item__quantity__item" style={{backgroundColor: quantitySit.dir.adult != 0 ? '#F7F6F6' : '#FFFFFF', border: selectedTiketType.dir.adult ? '1px solid #FFA800C9' : '1px solid rgb(255, 255, 255)'}} onClick={()=>{changeTiketType ('adult', 'dir')}} >
                        {/* <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Взрослых" /> */}
                        <div className="choosing-place-box__item__quantity__item__input" >Взрослых - {quantitySit.dir.adult}</div>
                        <div className="choosing-place-box__item__quantity__item__explanation">Можно добавить еще {5 - quantitySit.dir.adult} пассажиров</div>
                    </div>
                    <div className="choosing-place-box__item__quantity__item" style={{backgroundColor: quantitySit.dir.kid != 0 ? '#F7F6F6' : '#FFFFFF', border: selectedTiketType.dir.kid ? '1px solid #FFA800C9' : '1px solid rgb(255, 255, 255)'}} onClick={()=>{changeTiketType ('kid', 'dir')}}>
                        {/* <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Детских" /> */}
                        <div className="choosing-place-box__item__quantity__item__input">Детских - {quantitySit.dir.kid}</div>
                        <div className="choosing-place-box__item__quantity__item__explanation">Можно добавить еще {4 - quantitySit.dir.kid} детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</div>
                    </div>
                    <div className="choosing-place-box__item__quantity__item" style={{backgroundColor: quantitySit.dir.kidNoSid != 0 ? '#F7F6F6' : '#FFFFFF', border: selectedTiketType.dir.kidNoSid ? '1px solid #FFA800C9' : '1px solid rgb(255, 255, 255)'}} onClick={()=>{changeTiketType ('kidNoSid', 'dir')}}>
                        {/* <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Детских «без места»" /> */}
                        <div className="choosing-place-box__item__quantity__item__input">Детских «без места» - {quantitySit.dir.kidNoSid}</div>
                    </div>                    
                </div>
                <div className="choosing-place-box__item__title">Тип вагона</div>
                <div className="choosing-place-box__item__van-type">
                    <div className="choosing-place-box__item__van-type__item"> <img src={Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'fourth' ? SitVch : SitV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center', color: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'fourth' ? '#FFA800' : '#928F94'}}>Сидячий</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'third' ? PlatVch : PlatV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center', color: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'third' ? '#FFA800' : '#928F94'}}>Плацкарт</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'second' ? KupeVch : KupeV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center', color: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'second' ? '#FFA800' : '#928F94'}}>Купе</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'first' ? LucsVch : LucsV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center', color: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'first' ? '#FFA800' : '#928F94'}}>Люкс</p></div>
                </div>
                <div className="choosing-place-box__item__van-num">Вагоны {numbersVanDir}</div>
                <div className="choosing-place-box__item__van-info">
                    <div className="choosing-place-box__item__van-info__num">{add0(numSelectedVanDir)}
                        <div className="choosing-place-box__item__van-info__num__text">вагон</div>
                    </div>
                    <div className="choosing-place-box__item__van-info__sits">
                        <div className="choosing-place-box__item__van-info__sits__box">
                            <div className="choosing-place-box__item__van-info__sits__box__title">Места <span className="choosing-place-box__item__van-info__sits__box__title__span">{Direction?.[numSelectedVanDir - 1]?.coach?.available_seats}</span></div>
                            <div className="choosing-place-box__item__van-info__sits__box__text" style={{display: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'second' || Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'third' ? 'block' : 'none'}}>Верхние</div>
                            <div className="choosing-place-box__item__van-info__sits__box__text" style={{display: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'second' || Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'third' ? 'block' : 'none'}}>Нижние</div>
                        </div>
                        <div className="choosing-place-box__item__van-info__sits__box">
                            <div className="choosing-place-box__item__van-info__sits__box__title">Стоимость</div>
                            <div className="choosing-place-box__item__van-info__sits__box__cost" style={{display: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'second' || Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'third' || Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'fourth' ? 'block' : 'none'}}>{Direction?.[numSelectedVanDir - 1]?.coach?.top_price}</div> {/* Верхние места */}
                            <div className="choosing-place-box__item__van-info__sits__box__cost" style={{display: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'second' || Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'third' ? 'block' : 'none'}}>{Direction?.[numSelectedVanDir - 1]?.coach?.bottom_price}</div> {/* Нижние места */}
                            <div className="choosing-place-box__item__van-info__sits__box__cost" style={{display: Direction?.[numSelectedVanDir - 1]?.coach?.class_type == 'first' ? 'block' : 'none'}}>{Direction?.[numSelectedVanDir - 1]?.coach?.price}</div>
                        </div>
                    </div>
                    <div className="choosing-place-box__item__van-info__service">
                        <div className="choosing-place-box__item__van-info__sits__box__title">Обслуживание <span style={{textTransform:'uppercase', color:'#C4C4C4'}}>фпк</span></div>
                        <div className="choosing-place-box__item__van-info__service_btns">
                            <div className={services.condey.included ? "choosing-place-box__item__van-info__service_btns__item btn-included" : "choosing-place-box__item__van-info__service_btns__item"} style = {{display: services.condey.have ? "flex" : "none" }} onClick={(e) => {serviceSelect (e.target, 'condey')}}><img src={services.condey.selected ? CondeySel : Condey} /></div>
                            <div className={services.WiFiForBut.included ? "choosing-place-box__item__van-info__service_btns__item btn-included" : "choosing-place-box__item__van-info__service_btns__item"} style = {{display: services.WiFiForBut.have ? "flex" : "none"}} onClick={(e) => {serviceSelect (e.target, 'WiFiForBut')}}><img src={services.WiFiForBut.selected ? WiFiForButSel : WiFiForBut} /></div>
                            <div className={services.underwear.included ? "choosing-place-box__item__van-info__service_btns__item btn-included" : "choosing-place-box__item__van-info__service_btns__item"} style = {{display: services.underwear.have ? "flex" : "none"}} onClick={(e) => {serviceSelect (e.target, 'underwear')}}><img src={ services.underwear.selected ? underwearSel : underwear} /></div>
                            <div className={services.mug.included ? "choosing-place-box__item__van-info__service_btns__item btn-included" : "choosing-place-box__item__van-info__service_btns__item"} style = {{display: services.mug.have ? "flex" : "none"}} onClick={(e) => {serviceSelect (e.target, 'mug')}}><img src={services.mug.selected ? mugSel : mug} /></div>
                        </div>
                    </div>
                </div>
                <div className="choosing-place-box__item__van-hr">
                    <div className="choosing-place-box__item__van-hr__text">{Math.floor(Math.random() * 10)} человек выбирают места в этом поезде</div>
                </div>
                <VanMap classType={Direction?.[numSelectedVanDir - 1]?.coach?.class_type} vagNum={numSelectedVanDir} places={Direction?.[numSelectedVanDir - 1]?.seats} addNewPlace = {addNewPlace} way = 'Dir'/>                     
            </div>
            {/* Arrival */}
            <div className="choosing-place-box__item" style={{display: idArrival ? 'block' : 'none'}}>
                <div style={{display:'flex', justifyContent: 'end'}}>
                    <div className="choosing-place-box__item__btn-logo"><img src={arrowL} style={{width:'30px', height: '20px'}} /></div>
                    <div className="choosing-place-box__item__btn">Выбрать другой поезд</div>
                </div>
                <div className="choosing-place-box__item__trin-info">
                    <div className="choosing-place-box__item__trin-info__part">
                        <img src={trLogo} className="choosing-place-box__item__trin-info__part__logo" />
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <div className="choosing-place-box__item__trin-info__part__title">{ChoosingPlaceInfo?.trainNum}</div>
                        <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.cityFrom} →</div>
                        <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.cityTo}</div>
                        
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <div className="choosing-place-box__item__trin-info__part__title">{ChoosingPlaceInfo?.Arrival?.timeFromArrival}</div>
                        <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.cityTo}</div>
                        <div className="choosing-place-box__item__trin-info__part__text grey-text">{ChoosingPlaceInfo?.Arrival?.stationFromArrival} <span style={{textTransform: 'lowercase'}}>вокзал</span></div>
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <img src={arrowOrL} alt="" className="choosing-place-box__item__trin-info__part__arrow" />
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <div className="choosing-place-box__item__trin-info__part__title">{ChoosingPlaceInfo?.Arrival?.timeToArrival}</div>
                        <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.cityFrom}</div>
                        <div className="choosing-place-box__item__trin-info__part__text grey-text">{ChoosingPlaceInfo?.Arrival?.stationToArrival} <span style={{textTransform: 'lowercase'}}>вокзал</span></div>
                    </div>
                    <div className="choosing-place-box__item__trin-info__part">
                        <img src={clock} className="choosing-place-box__item__trin-info__part__logo" />
                        <div className="text-blokc">
                            <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.Arrival?.timeWayArrival.substring(0, 2)} <span style={{textTransform: 'lowercase'}}>часов</span></div>
                            <div className="choosing-place-box__item__trin-info__part__text">{ChoosingPlaceInfo?.Arrival?.timeWayArrival.substring(3, 5)} <span style={{textTransform: 'lowercase'}}>минут</span></div>
                        </div>
                    </div>
                </div>
                <div className="choosing-place-box__item__title">Количество билетов</div>
                <div className="choosing-place-box__item__quantity">
                    <div className="choosing-place-box__item__quantity__item" style={{backgroundColor: quantitySit.arr.adult != 0 ? '#F7F6F6' : '#FFFFFF', border: selectedTiketType.arr.adult ? '1px solid #FFA800C9' : '1px solid rgb(255, 255, 255)'}} onClick={()=>{changeTiketType ('adult', 'arr')}} >
                        {/* <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Взрослых" /> */}
                        <div className="choosing-place-box__item__quantity__item__input" >Взрослых - {quantitySit.arr.adult}</div>
                        <div className="choosing-place-box__item__quantity__item__explanation">Можно добавить еще {5 - quantitySit.arr.adult} пассажиров</div>
                    </div>
                    <div className="choosing-place-box__item__quantity__item" style={{backgroundColor: quantitySit.arr.kid != 0 ? '#F7F6F6' : '#FFFFFF', border: selectedTiketType.arr.kid ? '1px solid #FFA800C9' : '1px solid rgb(255, 255, 255)'}} onClick={()=>{changeTiketType ('kid', 'arr')}}>
                        {/* <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Детских" /> */}
                        <div className="choosing-place-box__item__quantity__item__input">Детских - {quantitySit.arr.kid}</div>
                        <div className="choosing-place-box__item__quantity__item__explanation">Можно добавить еще {4 - quantitySit.arr.kid} детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</div>
                    </div>
                    <div className="choosing-place-box__item__quantity__item" style={{backgroundColor: quantitySit.arr.kidNoSid != 0 ? '#F7F6F6' : '#FFFFFF', border: selectedTiketType.arr.kidNoSid ? '1px solid #FFA800C9' : '1px solid rgb(255, 255, 255)'}} onClick={()=>{changeTiketType ('kidNoSid', 'arr')}}>
                        {/* <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Детских «без места»" /> */}
                        <div className="choosing-place-box__item__quantity__item__input">Детских «без места» - {quantitySit.dir.kidNoSid}</div>
                    </div>                     
                </div>
                <div className="choosing-place-box__item__title">Тип вагона</div>
                <div className="choosing-place-box__item__van-type">
                    <div className="choosing-place-box__item__van-type__item"> <img src={Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'fourth' ? SitVch : SitV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center', color: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'fourth' ? '#FFA800' : '#928F94'}}>Сидячий</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'third' ? PlatVch : PlatV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center', color: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'third' ? '#FFA800' : '#928F94'}}>Плацкарт</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'second' ? KupeVch : KupeV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center', color: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'second' ? '#FFA800' : '#928F94'}}>Купе</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'first' ? LucsVch : LucsV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center', color: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'first' ? '#FFA800' : '#928F94'}}>Люкс</p></div>
                </div>
                 <div className="choosing-place-box__item__van-num">Вагоны {numbersVanArr}</div>
                <div className="choosing-place-box__item__van-info">
                    <div className="choosing-place-box__item__van-info__num">{add0(numSelectedVanArr)}
                        <div className="choosing-place-box__item__van-info__num__text">вагон</div>
                    </div>
                    <div className="choosing-place-box__item__van-info__sits">
                        <div className="choosing-place-box__item__van-info__sits__box">
                            <div className="choosing-place-box__item__van-info__sits__box__title">Места <span className="choosing-place-box__item__van-info__sits__box__title__span">{Arrival?.[numSelectedVanArr - 1]?.coach?.available_seats}</span></div>
                            <div className="choosing-place-box__item__van-info__sits__box__text" style={{display: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'second' || Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'third' ? 'block' : 'none'}}>Верхние</div>
                            <div className="choosing-place-box__item__van-info__sits__box__text" style={{display: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'second' || Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'third' ? 'block' : 'none'}}>Нижние</div>
                        </div>
                        <div className="choosing-place-box__item__van-info__sits__box">
                            <div className="choosing-place-box__item__van-info__sits__box__title">Стоимость</div>
                            <div className="choosing-place-box__item__van-info__sits__box__cost" style={{display: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'second' || Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'third' || Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'fourth' ? 'block' : 'none'}}>{Arrival?.[numSelectedVanArr - 1]?.coach?.top_price}</div> {/* Верхние места */}
                            <div className="choosing-place-box__item__van-info__sits__box__cost" style={{display: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'second' || Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'third' ? 'block' : 'none'}}>{Arrival?.[numSelectedVanArr - 1]?.coach?.bottom_price}</div> {/* Нижние места */}
                            <div className="choosing-place-box__item__van-info__sits__box__cost" style={{display: Arrival?.[numSelectedVanArr - 1]?.coach?.class_type == 'first' ? 'block' : 'none'}}>{Arrival?.[numSelectedVanArr - 1]?.coach?.price}</div>
                        </div>
                    </div>
                     <div className="choosing-place-box__item__van-info__service">
                        <div className="choosing-place-box__item__van-info__sits__box__title">Обслуживание <span style={{textTransform:'uppercase', color:'#C4C4C4'}}>фпк</span></div>
                        <div className="choosing-place-box__item__van-info__service_btns">
                            <div className={services.condey.includedArr ? "choosing-place-box__item__van-info__service_btns__item btn-included" : "choosing-place-box__item__van-info__service_btns__item"} style = {{display: services.condey.haveArr ? "flex" : "none" }} onClick={(e) => {serviceSelect (e.target, 'condey', true)}}><img src={services.condey.selectedArr ? CondeySel : Condey} /></div>
                            <div className={services.WiFiForBut.includedArr ? "choosing-place-box__item__van-info__service_btns__item btn-included" : "choosing-place-box__item__van-info__service_btns__item"} style = {{display: services.WiFiForBut.haveArr ? "flex" : "none"}} onClick={(e) => {serviceSelect (e.target, 'WiFiForBut', true)}}><img src={services.WiFiForBut.selectedArr ? WiFiForButSel : WiFiForBut} /></div>
                            <div className={services.underwear.includedArr ? "choosing-place-box__item__van-info__service_btns__item btn-included" : "choosing-place-box__item__van-info__service_btns__item"} style = {{display: services.underwear.haveArr ? "flex" : "none"}} onClick={(e) => {serviceSelect (e.target, 'underwear', true)}}><img src={ services.underwear.selectedArr ? underwearSel : underwear} /></div>
                            <div className={services.mug.includedArr ? "choosing-place-box__item__van-info__service_btns__item btn-included" : "choosing-place-box__item__van-info__service_btns__item"} style = {{display: services.mug.haveArr ? "flex" : "none"}} onClick={(e) => {serviceSelect (e.target, 'mug', true)}}><img src={services.mug.selectedArr ? mugSel : mug} /></div>
                        </div>
                    </div>
                </div>
                <div className="choosing-place-box__item__van-hr">
                    <div className="choosing-place-box__item__van-hr__text">{Math.floor(Math.random() * 10)} человек выбирают места в этом поезде</div>
                </div>
                <VanMap classType={Arrival?.[numSelectedVanArr - 1]?.coach?.class_type} vagNum={numSelectedVanArr} places={Arrival?.[numSelectedVanArr - 1]?.seats}  addNewPlace = {addNewPlace} way = 'Arr'/>                    
            </div>
            <div className="choosing-place-box__btn-to-go" onClick={() => {toNextStep(2)}}>ДАЛЕЕ</div>
        </div>
        </div >
    )
}
