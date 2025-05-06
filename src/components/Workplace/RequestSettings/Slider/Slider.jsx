import { useState } from 'react'
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import './Slider.css';

export function Slider({ type }) {
    const [minValue, setMinValue] = useState(type == 'time'? 0 : '1920');
    const [maxValue, setMaxValue] = useState(type == 'time'? 86400000 : '4500' );


    const displayMinMax = (event) => {
        setMinValue(Math.trunc(event[0]));
        setMaxValue(Math.trunc(event[1]));
    }

    function msToHMS( ms ) {
        // 1- Convert to seconds:
        let seconds = ms / 1000;
        // 2- Extract hours:
        const hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
        seconds = seconds % 3600; // seconds remaining after extracting hours
        // 3- Extract minutes:
        const minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
        // 4- Keep only seconds not extracted to minutes:
        seconds = seconds % 60;
        return ( hours+":"+minutes);
    }
  
    const Slider = () => (
        <Nouislider
            /* range={{ min: 1920, max: 7000 }} start={[1920, 4500]} */
            /* range={{ min: 0, max: 86400000 }} start={[0, 39600000]}  */    //3600000 - 1ч
            range={type == 'time'? { min: 0, max: 86400000 } : { min: 1920, max: 7000 }}
            start={type == 'time'? [0, 39600000] : [1920, 4500]}
            /* connect onChange={displayMinMax} */
            connect onUpdate={displayMinMax} />
    );

    return (
        <div style={{width: '296px'}}>
            <div className="slider-compoent top-content" style={type == 'time' ? {display: 'none'} : {}}>
                    <div className="slider-compoent__value value-left" >
                        от
                    </div>
                    <div className="slider-compoent__value value-right2" >
                        до
                    </div>
            </div>
            {Slider()}
                <div className="slider-compoent" >
                    <br/>
                    <div className="slider-compoent__value value-left" >
                        { type == 'time'? msToHMS( minValue ) : minValue }
                    </div>
                    <div className="slider-compoent__value value-right" >
                        { type == 'time'? msToHMS( maxValue ) : maxValue }
                    </div>
                </div>
        </div>
    )
}