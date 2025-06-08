import './Step3.css';
import {useState, useEffect} from 'react';




export function Step3({Step, show }) {
    /* Step(3); */


    return (
        <div className="step3-box" style={{display: show ? 'block' : 'none'}}>
            <div className="step3-box__content">
                <div className="step3-box__content__heder">Персональные данные</div>
                <div className="step3-box__content__feelde">
                    <div className="step3-box__content__feelde__FIO">
                        <div className="step3-box__content__feelde__FIO-item">
                            <div className="step3-box__content__feelde__FIO__title FIO-title">Фамилия</div>
                            <input type="text" className="step3-box__content__feelde__FIO__input" />
                        </div>
                        <div className="step3-box__content__feelde__FIO-item"> 
                            <div className="step3-box__content__feelde__FIO__title FIO-title">Имя</div>
                            <input type="text" className="step3-box__content__feelde__FIO__input" />
                        </div>
                        <div className="step3-box__content__feelde__FIO-item">
                            <div className="step3-box__content__feelde__FIO__title FIO-title">Отчество</div>
                            <input type="text" className="step3-box__content__feelde__FIO__input" />
                        </div>
                    </div>
                    <div className="step3-box__content__feelde__FIO">
                        <div className="step3-box__content__feelde__FIO-item">
                            <div className="step3-box__content__feelde__FIO__title FIO-title">Контактный телефон</div>
                            <input type="text" placeholder='+7 ___ ___ __ __' className="step3-box__content__feelde__FIO__input" style={{while: '360px'}}/>
                        </div>
                    </div>
                    <div className="step3-box__content__feelde__FIO" style={{marginBottom: '88px'}}>
                        <div className="step3-box__content__feelde__FIO-item">
                            <div className="step3-box__content__feelde__FIO__title FIO-title">E-mail</div>
                            <input type="text" placeholder='inbox@gmail.ru' className="step3-box__content__feelde__FIO__input" style={{while: '360px'}}/>
                        </div>
                    </div>
                </div>
                <div className="step3-box__content__heder">Способ оплаты</div>
                <div className="step3-box__content__feelde">
                    <div className="step3-box__content__feelde__pay-var">
                        <div className="step3-box__content__feelde__pay-var__checker">
                            <input type="checkbox" id="pay-var1" className="step3-box__content__feelde__pay-var__checker__iput"/>
                            <label htmlFor="pay-var1"className="step3-box__content__feelde__pay-var__checker__check"></label>
                            <div className="step3-box__content__feelde__pay-var__checker__title">Онлайн</div>
                        </div>
                        <div className="step3-box__content__feelde__pay-var__online-var">
                            <div className="step3-box__content__feelde__pay-var__online-var__item">Банковской картой</div>
                            <div className="step3-box__content__feelde__pay-var__online-var__item">PayPal</div>
                            <div className="step3-box__content__feelde__pay-var__online-var__item">Visa QIWI Wallet</div>
                        </div>
                    </div>
                    <div className="step3-box__content__feelde__pay-var bottom-space">
                        <div className="step3-box__content__feelde__pay-var__checker">
                            <input type="checkbox" id="pay-var2" className="step3-box__content__feelde__pay-var__checker__iput"/>
                            <label htmlFor="pay-var2"className="step3-box__content__feelde__pay-var__checker__check"></label>
                            <div className="step3-box__content__feelde__pay-var__checker__title">Наличными</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}