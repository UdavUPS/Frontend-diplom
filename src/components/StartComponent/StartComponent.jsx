import './StartComponent.css';
import { getCities, tryToGo, changeCities } from './functionsForStartComponent.js';
import { Tooltip } from './Tooltip/Tooltip.jsx';
/* import { Link } from 'react-router-dom'; */
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect} from 'react';
import { CustomDatepicker } from './CustomDatepicker/CustomDatepicker.jsx';
import "react-datepicker/dist/react-datepicker.css"; 
import wayIcon from './img/wayIcon.svg'; 
import Chen from './img/Chen.png';
import {LDB} from '../Workplace/LocalDatabase.js';




export function StartComponent({type}) {
    let style, dateMargin, btnMargin;

    const inputFromRef = useRef(0);
    const inputToRef = useRef(0);

    let [cities, setCities] = useState([]);
    let [selestCities1, setSelestCities1] = useState(null);
    let [selestCities2, setSelestCities2] = useState(null);
    let [tooltipShow1, setTooltipShow1] = useState(false);
    let [tooltipShow2, setTooltipShow2] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if (selestCities1) {
            inputFromRef.current.value = selestCities1;
        }
    },[selestCities1])

    useEffect(()=>{
        if (selestCities2) {
            inputToRef.current.value = selestCities2;
        }
    },[selestCities2])

    if (type == 'folded') {
        style = {
            width: '729px',                         
            height: '574px',
            marginTop: '-582px',
            marginLeft: '958px',
            paddingTop: '79px'
        }
        dateMargin = {
            marginTop: '60px'
        }
        btnMargin = {
            marginRight: '22px'
        }
    } else {
        style = {
            width: '1490px',                         
            height: '350px',
            marginTop: '-350px',
            marginLeft: '215px',
            paddingTop: '52px'
        }
        dateMargin = {
            marginTop: '0'
        }
        btnMargin = {
            marginRight: '41px'
        }
    }


    return (
        <div style = {style} className="start-component-box">
            <div className="start-component-box__content">
                <div className="start-component-box__content__direction">
                    <p className="start-component-box__content__direction__title start-component-box-titles">Направление</p>
                    <div className="start-component-box__content__direction__iput-box">
                    <input type="text" placeholder="Откуда" className="start-component-box__content__direction__iput-box__to start-component-box-input" ref={inputFromRef} onChange = {e => getCities(e.target.value, setCities, setTooltipShow1)} /* onBlur={()=>{setTooltipShow1(false)}} */ />
                    <img src={wayIcon} className="way-icon" />
                    <Tooltip citys ={cities} type={type} leftF = '990px' leftH = '256px' visibility = {tooltipShow1} setSelestCities={setSelestCities1} setTooltipShow={setTooltipShow1} />
                    <div className="start-component-box__content__direction__iput-box__change" onClick={()=>{changeCities(inputFromRef, inputToRef, setSelestCities1, setSelestCities2)}}></div>
                    <input type="text" placeholder="Куда" className="start-component-box__content__direction__iput-box__back start-component-box-input" ref={inputToRef} onChange = {e => getCities(e.target.value, setCities, setTooltipShow2)} /* onBlur={()=>{setTooltipShow2(false)}} */ />
                    <img src={wayIcon} className="way-icon" />
                    <Tooltip citys ={cities} type={type} leftF = '1339px' leftH = '605px' visibility = {tooltipShow2} setSelestCities={setSelestCities2} setTooltipShow={setTooltipShow2} />
                </div>
                    
                </div>
                <div style = {dateMargin} className="start-component-box__content__date">
                <p className="start-component-box__content__date__title start-component-box-titles">Дата</p>
                <div className="start-component-box__content__date__iput-box">
                    {/* <input type="date" className="start-component-box__content__date__iput-box__to start-component-box-input"/> */}
                    <CustomDatepicker />
                    <CustomDatepicker />
                </div>
                </div>
            </div>
           {/*  <Link className='start-component-box__btn__link' to='/ticket-page' onClick={(e)=>{tryToGo(e, selestCities1, selestCities2, LDB)}}><div style = {btnMargin} className="start-component-box__btn">Найти билет</div></Link> */}
            <div style = {btnMargin} className="start-component-box__btn" onClick={(e)=>{tryToGo(e, selestCities1, selestCities2, LDB, navigate)}}>Найти билет</div>
            
        </div>
    );
}


