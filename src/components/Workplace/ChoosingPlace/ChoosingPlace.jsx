import './ChoosingPlace.css';
import { useEffect } from 'react';
import {VanMap} from './VanMap/VanMap.jsx';
import SitV from './img/SitV.svg';
import PlatV from './img/PlatV.svg';
import KupeV from './img/KupeV.svg';
import LucsV from './img/LucsV.svg';
import arrowL from './img/arrowL.svg';
import arrowR from './img/arrowR.svg';

export function ChoosingPlace({idDirection, idArrival}) {

    useEffect(()=>{
        fetch( `https://students.netoservices.ru/fe-diplom/routes/${idDirection}/seats` )
            .then( response => response.json())
            .then( data => {
                console.log( data );
            });
    }, [idDirection, idArrival])

    return (
        <div className="choosing-place-box">
            <div className="choosing-place-box__title">Выбор мест</div>
            {/* Direction */}
            <div className="choosing-place-box__item">
                <div style={{display:'flex'}}>
                    <div className="choosing-place-box__item__btn-logo"><img src={arrowR} style={{width:'40px', height: '30px'}} /></div>
                    <div className="choosing-place-box__item__btn">Выбрать другой поезд</div>
                </div>
                <div className="choosing-place-box__item__trin-info"></div>
                <div className="choosing-place-box__item__title">Количество билетов</div>
                <div className="choosing-place-box__item__quantity">
                    <div className="choosing-place-box__item__quantity__item">
                        <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Взрослых" />
                        <div className="choosing-place-box__item__quantity__item__explanation">Можно добавить еще 3 пассажиров</div>
                    </div>
                    <div className="choosing-place-box__item__quantity__item">
                        <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Детских" />
                        <div className="choosing-place-box__item__quantity__item__explanation">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</div>
                    </div>
                    <div className="choosing-place-box__item__quantity__item">
                        <input type="text" className="choosing-place-box__item__quantity__item__input" placeholder="Детских «без места»" />
                    </div>                    
                </div>
                <div className="choosing-place-box__item__title">Тип вагона</div>
                <div className="choosing-place-box__item__van-type">
                    <div className="choosing-place-box__item__van-type__item"> <img src={SitV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center'}}>Сидячий</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={PlatV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center'}}>Плацкарт</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={KupeV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center'}}>Купе</p></div>
                    <div className="choosing-place-box__item__van-type__item"> <img src={LucsV} className="choosing-place-box__item__van-type__item__img"/><br/><p style={{textAlign:'center'}}>Люкс</p></div>
                </div>
                <div className="choosing-place-box__item__van-num"></div>
                <div className="choosing-place-box__item__van-info">
                    <div className="choosing-place-box__item__van-info__num"></div>
                </div>
                <div className="choosing-place-box__item__van-hr">
                    <div className="choosing-place-box__item__van-hr__text">11 человек выбирают места в этом поезде</div>
                </div>
                <VanMap />                    
            </div>
            {/* Arriva */}
            <div className="choosing-place-box__item" style={{display: idArrival ? 'block' : 'none'}}>
                <div style={{display:'flex', justifyContent: 'end'}}>
                    <div className="choosing-place-box__item__btn-logo"><img src={arrowL} style={{width:'30px', height: '20px'}} /></div>
                    <div className="choosing-place-box__item__btn">Выбрать другой поезд</div>
                </div>
                <div className="choosing-place-box__item__trin-info"></div>
                <div className="choosing-place-box__item__title">Количество билетов</div>
                <div className="choosing-place-box__item__quantity">
                    <div className="choosing-place-box__item__quantity__item"></div>
                    <div className="choosing-place-box__item__quantity__item"></div>
                    <div className="choosing-place-box__item__quantity__item"></div>                    
                </div>
                <div className="choosing-place-box__item__title">Тип вагона</div>
                <div className="choosing-place-box__item__van-type">
                    <div className="choosing-place-box__item__van-type__item">Сидячий</div>
                    <div className="choosing-place-box__item__van-type__item">Плацкарт</div>
                    <div className="choosing-place-box__item__van-type__item">Купе</div>
                    <div className="choosing-place-box__item__van-type__item">Люкс</div>
                </div>
                <div className="choosing-place-box__item__van-num"></div>
                <div className="choosing-place-box__item__van-info">
                    <div className="choosing-place-box__item__van-info__num"></div>
                </div>
                <div className="choosing-place-box__item__van-hr">
                    <div className="choosing-place-box__item__van-hr__text">11 человек выбирают места в этом поезде</div>
                </div>
                <VanMap />                    
            </div>
        </div>
    )
}
