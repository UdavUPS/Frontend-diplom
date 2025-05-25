import './Tooltip.css';

export function Tooltip ({citys, type, leftF, leftH, visibility = false, setSelestCities, setTooltipShow }) {
    let style;

    if (type == 'folded') {
        style = {
            top: '560px',
            left: leftF, //'1331px',
            display: visibility == true ? 'inline' : 'none'
        }
    } else {
        style = {
            top: '370px',
            left: leftH, //'597px',
            display: visibility == true ? 'inline' : 'none'
        }
    }

    

    return (
        <div className="tooltip-box" style = {style}>
            {citys.map(c => {
                return (
                    <div key={c._id} className="tooltip-box__item" id = {c._id} onClick={() =>{
                        setSelestCities(c.name);
                        setTooltipShow(false);
                    }}>{c.name}</div>
                )
            })}
            
        </div>
    )
}
