import './Step4.css';
import {PassengersInfo} from './PassengersInfo/PassengersInfo.jsx'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';




export function Step4({Step, show, tiketInfo, payerInf }) {
    /* Step(3); */


    return (
        <div className="step4-box" style={{display: show ? 'block' : 'none'}}>
            <div className="step4-box__content">
                <div className="step4-box__content__heder">Поезд</div>
                <div className="step4-box__content__feelde"></div>
            </div>
            <div className="step4-box__content">
                <div className="step4-box__content__heder">Пассажиры</div>
                <div className="step4-box__content__feelde content-feelde-flex">
                    <div className="step4-box__content__feelde__passengers-items">
                        <PassengersInfo type='Взрослый' fName={payerInf?.fName} name={payerInf?._name} oName={payerInf?.oName} gen='женский' birthDate='17.02.1985' docNum='4204 380694' />
                        {/* <PassengersInfo type='Детский' fName='Мартынюк' name='Кирилл' oName='Сергеевич' gen='мужской' birthDate='25.01.2006' docNum='VIII УН 256319'  isLast={true}/> */}
                    </div>
                    <div className="step4-box__content__feelde__right-part">
                        <div className="step4-box__content__feelde__right-part__space">
                            <div className="step4-box__content__feelde__right-part__space__cost"> 
                                <div className="step4-box__content__feelde__right-part__space__cost__item">Всего</div>
                                <div className="step4-box__content__feelde__right-part__space__cost__item content-feelde-flex"><p style={{fontWeight:'700'}}>{tiketInfo?.totalCost}</p> <p style={{color:'#928F94',marginLeft:'8px'}}>₽</p></div>
                            </div>
                        </div>
                        <div className="step4-box__content__feelde__right-part__btn">Изменить</div>
                    </div>
                </div>
            </div>
            <div className="step4-box__content">
                <div className="step4-box__content__heder">Способ оплаты</div>
                <div className="step4-box__content__feelde content-feelde-flex">
                    <div className="step4-box__content__feelde__passengers-items">
                        <div className="step4-box__content__feelde__type-pay">{payerInf?.typePay === 'cash' ? 'Наличными' : 'Онлайн'}</div>
                    </div>
                    
                    <div className="step4-box__content__feelde__right-part">
                        <div className="step4-box__content__feelde__right-part__space"></div>
                        <div className="step4-box__content__feelde__right-part__btn">Изменить</div>
                    </div>
                </div>
            </div>
            <Link className='menu-box__list__item__link' to='/last-page' state={payerInf}><div className="content-feelde-flex__btn">подтвердить</div></Link>
        </div>
    )
}