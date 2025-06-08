import './Step3.css';
import {useState, useEffect} from 'react';




export function Step3({Step, show, setPayerInf }) {
    /* Step(3); */
    let [status, setStatus] = useState(false);
    let [fName, setfName] = useState(undefined);
    let [name, setName] = useState(undefined);
    let [oName, setoName] = useState(undefined);
    let [telephone, setTelephone] = useState(undefined);
    let [email, setEmail] = useState(undefined);
    let [typePay, setTypePay] = useState(undefined);

    useEffect(()=>{
        setPayerInf({
        fName: fName,
        _name: name,
        oName: oName,
        telephone: telephone,
        email: email,
        typePay: typePay
     })

     if (fName, name, oName, telephone, email, typePay) {setStatus(true)}
       
    },[fName, name, oName, telephone, email, typePay])


    return (
        <div className="step3-box" style={{display: show ? 'block' : 'none'}}>
            <div className="step3-box__content">
                <div className="step3-box__content__heder">Персональные данные</div>
                <div className="step3-box__content__feelde">
                    <div className="step3-box__content__feelde__FIO">
                        <div className="step3-box__content__feelde__FIO-item">
                            <div className="step3-box__content__feelde__FIO__title FIO-title">Фамилия</div>
                            <input type="text" className="step3-box__content__feelde__FIO__input"  onChange={(e) => {setfName(e.target.value)}}/>
                        </div>
                        <div className="step3-box__content__feelde__FIO-item"> 
                            <div className="step3-box__content__feelde__FIO__title FIO-title">Имя</div>
                            <input type="text" className="step3-box__content__feelde__FIO__input" onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        <div className="step3-box__content__feelde__FIO-item">
                            <div className="step3-box__content__feelde__FIO__title FIO-title">Отчество</div>
                            <input type="text" className="step3-box__content__feelde__FIO__input" onChange={(e) => {setoName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="step3-box__content__feelde__FIO">
                        <div className="step3-box__content__feelde__FIO-item">
                            <div className="step3-box__content__feelde__FIO__title FIO-title">Контактный телефон</div>
                            <input type="text" placeholder='+7 ___ ___ __ __' className="step3-box__content__feelde__FIO__input" style={{while: '360px'}} onChange={(e) => {setTelephone(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="step3-box__content__feelde__FIO" style={{marginBottom: '88px'}}>
                        <div className="step3-box__content__feelde__FIO-item">
                            <div className="step3-box__content__feelde__FIO__title FIO-title">E-mail</div>
                            <input type="text" placeholder='inbox@gmail.ru' className="step3-box__content__feelde__FIO__input" style={{while: '360px'}} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                    </div>
                </div>
                <div className="step3-box__content__heder">Способ оплаты</div>
                <div className="step3-box__content__feelde">
                    <div className="step3-box__content__feelde__pay-var">
                        <div className="step3-box__content__feelde__pay-var__checker">
                            <input type="checkbox" id="pay-var1" className="step3-box__content__feelde__pay-var__checker__iput" onChange={() => {setTypePay('online')}}/>
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
                            <input type="checkbox" id="pay-var2" className="step3-box__content__feelde__pay-var__checker__iput" onChange={() => {setTypePay('cash')}}/>
                            <label htmlFor="pay-var2"className="step3-box__content__feelde__pay-var__checker__check"></label>
                            <div className="step3-box__content__feelde__pay-var__checker__title">Наличными</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choosing-place-box__btn-to-go btn-mod" style={{backgroundColor: !status ? '#928F94' : '', border: !status ? '#928F94' : ''}} onClick={() => {if (status){Step(4); window.scrollTo(0, 150)}}}>КУПИТЬ БИЛЕТЫ</div>
        </div>
    )
}