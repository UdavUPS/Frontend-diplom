import './PassengerCard.css';
import {useState, useRef} from 'react';
import pgMinus from './img/pg-minus.svg'
import pgPlus from './img/pg-plus.svg'





export function PassengerCard({cardNum, Ready }) {
    let [showCardInfo, setShowCardInfo] = useState(false);
    let [showList, setShowList] = useState(false);
    let [showListDoc, setShowListDoc] = useState(false);
    let [DocType, setDocType] = useState(undefined);
    let [gender, setGender] = useState('m');
    let [fName, setfName] = useState();
    let [name, setName] = useState();
    let [oName, setoName] = useState(); 
    let [reportStatus, setReportStatus] = useState(false);
    const inputRef = useRef(null);
    const inputRefDoc = useRef(null);


    function checkInf() {
        if (fName && name && oName && !reportStatus) {
            /* Ready(items.concat(1)); */
            Ready(prev => [...prev, 1]);
            setReportStatus(true)
            /* console.log(111) */
        }
    }

    function openCard () {
        if (showCardInfo) {
            setShowCardInfo(false)
        } else {
            setShowCardInfo(true)
            if (!inputRef.current.value) {
                inputRef.current.value = 'Взрослый';
            }
        }
    }

    function openList () {
        if (showList) {
            setShowList(false)
        } else {
            setShowList(true)
        }
    }

        function openListDoc () {
        if (showListDoc) {
            setShowListDoc(false)
        } else {
            setShowListDoc(true)
        }
    }

    function addVaInput(v) {
        inputRef.current.value = v;
    }

    function addDocType(v) {
        inputRefDoc.current.value = v;
        if (v=='Паспорт РФ') {
            inputRefDoc.current.style.width = '205px';
            setDocType('pasport')
        } else if (v=='Свидетельство о рождении') {
            inputRefDoc.current.style.width = '444px'
            setDocType('sv')
        } else {
            inputRefDoc.current.style.width = '280px'
            setDocType(undefined)
        }
    }

    function choiceGender() {
        if (gender == 'm') {
            setGender('f')
        } else {
            setGender('m')
        }
    }

    return (
        <div className='passenger-card'>
            <div className="passenger-card__heder" onClick={openCard}>
                <img src={showCardInfo ? pgMinus : pgPlus } className="passenger-card__heder__logo" />
                <div className="passenger-card__heder__title">Пассажиры {cardNum}</div>
            </div>
            <div className="passenger-card__info" style={showCardInfo ? {display: 'block'} : {display: 'none'}}>
                <div className="passenger-card__info__pas-tipe">
                    <input type="text"  className="passenger-card__info__pas-tipe__iput arrow-for-input" ref={inputRef} onFocus={openList} /* onBlur={openList} *//>
                    <div className="passenger-card__info__pas-tipe__list" style={showList ? {display: 'block'} : {display: 'none'}}>
                       <div className="passenger-card__info__pas-tipe__list__item" onClick={()=>{addVaInput('Взрослый'); openList()}}>Взрослый</div>
                       <div className="passenger-card__info__pas-tipe__list__item" onClick={()=>{addVaInput('Детский'); openList()}}>Детский</div> 
                    </div>
                </div>
                <div className="passenger-card__info__nams">
                    <div className="passenger-card__info__nams__name">
                        <div className="passenger-card__info__nams__name__title" >Фамилия</div>
                        <input type="text" className="passenger-card__info__nams__name__input" onChange={(e) => {setfName(e.target.value)}}/>
                    </div>
                    <div className="passenger-card__info__nams__name">
                         <div className="passenger-card__info__nams__name__title">Имя</div>
                        <input type="text" className="passenger-card__info__nams__name__input" onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className="passenger-card__info__nams__name">
                        <div className="passenger-card__info__nams__name__title">Отчество</div>
                        <input type="text" className="passenger-card__info__nams__name__input" onChange={(e) => {setoName(e.target.value)}}/>
                    </div>
                </div>
                <div className="passenger-card__info__gender-date">
                    <div className="passenger-card__info__gender-date__item">
                        <div className="passenger-card__info__gender-date__item__title">Пол</div>
                        <div className="passenger-card__info__gender-date__item__gender">
                            <div className="passenger-card__info__gender-date__item__gender__m" style={gender == 'm'? {backgroundColor: '#FFA800'} : {backgroundColor: '#ffffff'}} onClick={choiceGender}>М</div>
                            <div className="passenger-card__info__gender-date__item__gender__f" style={gender != 'm' ? {backgroundColor: '#FFA800'} : {backgroundColor: '#ffffff'}} onClick={choiceGender}>Ж</div>
                        </div>
                    </div>
                    <div className="passenger-card__info__gender-date__item">
                        <div className="passenger-card__info__gender-date__item__title">Дата рождения</div>
                        <input type="date" className="passenger-card__info__gender-date__item__input" />
                    </div>
                </div>
                <div className="passenger-card__info__move">
                    <input type="checkbox" className="passenger-card__info__move__iput" id="switchG" />
                    <label htmlFor="switchG"className="passenger-card__info__move__check"></label>
                    <div className="passenger-card__info__move__text">ограниченная подвижность</div>
                </div>
                <div className="passenger-card__info__doc-info">
                      <div className="passenger-card__info__doc-info__doc-item">
                        <div className="passenger-card__info__doc-info__doc-item__title">Тип документа</div>
                        <input type="text" className="passenger-card__info__doc-info__doc-item__input arrow-for-input" ref={inputRefDoc} onFocus={openListDoc} />
                        <div className="passenger-card__info__doc-info__doc-item__input-list" style={showListDoc ? {display: 'block'} : {display: 'none'}}>
                            <div className="passenger-card__info__doc-info__doc-item__input-list__item" onClick={()=>{addDocType('Паспорт РФ'); openListDoc()}}>Паспорт РФ</div>
                            <div className="passenger-card__info__doc-info__doc-item__input-list__item" onClick={()=>{addDocType('Свидетельство о рождении'); openListDoc()}}>Свидетельство о рождении</div> 
                        </div>
                    </div>
                    <div className="passenger-card__info__doc-info__doc-item" style={DocType=='sv' ? {display: 'block'} : {display: 'none'}}>
                         <div className="passenger-card__info__doc-info__doc-item__title" >Номер</div>
                        <input type="text" className="passenger-card__info__doc-info__doc-item__input" placeholder="12 символов" />
                    </div>
                    <div className="passenger-card__info__doc-info__doc-item" style={DocType=='pasport' ? {display: 'block'} : {display: 'none'}}>
                         <div className="passenger-card__info__doc-info__doc-item__title"  >Серия</div>
                        <input type="text" className="passenger-card__info__doc-info__doc-item__input" placeholder="_ _ _ _" />
                    </div>
                    <div className="passenger-card__info__doc-info__doc-item" style={DocType=='pasport' ? {display: 'block'} : {display: 'none'}}>
                         <div className="passenger-card__info__doc-info__doc-item__title"  >Номер</div>
                        <input type="text" className="passenger-card__info__doc-info__doc-item__input" placeholder="_ _ _ _ _ _ _" />
                    </div>
                </div>
                <div className="passenger-card__info__footer"  style={{backgroundColor: reportStatus ? '#B2F6A1' : '#FF3D0061'}}>
                    <div className="passenger-card__info__footer__btn"  onClick={checkInf}>Следующий пассажир</div>
                </div>
            </div>
            
        </div>
    )
}