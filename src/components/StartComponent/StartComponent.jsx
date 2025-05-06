import './StartComponent.css';
import { getCities } from './functionsForStartComponent.js';
import { Tooltip } from './Tooltip/Tooltip.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export function StartComponent({type}) {
    let style, dateMargin, btnMargin;

    let [cities, setCities] = useState([]);
    let [tooltipShow1, setTooltipShow1] = useState(false);
    let [tooltipShow2, setTooltipShow2] = useState(false);

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
                    <input type="text" placeholder="Откуда" className="start-component-box__content__direction__iput-box__to start-component-box-input" onChange = {e => getCities(e.target.value, setCities, setTooltipShow1)} onBlur={()=>{setTooltipShow1(false)}} />
                    <Tooltip citys ={cities} type={type} leftF = '990px' leftH = '256px' visibility = {tooltipShow1} />
                    <input type="text" placeholder="Куда" className="start-component-box__content__direction__iput-box__back start-component-box-input" onChange = {e => getCities(e.target.value, setCities, setTooltipShow2)} onBlur={()=>{setTooltipShow2(false)}} />
                    <Tooltip citys ={cities} type={type} leftF = '1331px' leftH = '597px' visibility = {tooltipShow2} />
                </div>
                    
                </div>
                <div style = {dateMargin} className="start-component-box__content__date">
                <p className="start-component-box__content__date__title start-component-box-titles">Дата</p>
                <div className="start-component-box__content__date__iput-box">
                    <input type="date" className="start-component-box__content__date__iput-box__to start-component-box-input"/>
                    <input type="date" className="start-component-box__content__date__iput-box__back start-component-box-input"/>
                </div>
                </div>
            </div>
            <Link className='start-component-box__btn__link' to='/ticket-page'><div style = {btnMargin} className="start-component-box__btn">Найти билет</div></Link>
            
        </div>
    );
}


