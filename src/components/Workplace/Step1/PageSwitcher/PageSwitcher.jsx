import './PageSwitcher.css';
import { useState, useRef } from 'react';

/* updateFun(30) */

export function PageSwitcher({totalCount, limit, updateFun}) {
    const screllRef = useRef(null);
    let [currentPage, setCurrentPage] = useState(1);
    let quantity = totalCount / limit;
    if (quantity - Math.trunc(quantity) > 0) {
        quantity = Math.trunc(quantity) + 1;
    }
    const currentStyle = {
        borderColor: '#FFA800',
        backgroundColor: '#FFA800',
        color: '#FFFFFF'
    }   

    let elems = [];

    for (let i = 1; i < quantity+1; i++) {
        if (i==currentPage) {
            elems.push(<div key={i} style={currentStyle} className="page-switcher-box__pages__btn" onClick={() => {setCurrentPage(i); updateFun(limCulc(i, limit)); window.scrollTo({top: 650, left: 0, behavior: "smooth"})}}>{i}</div>)
        } else {elems.push(<div key={i}  className="page-switcher-box__pages__btn" onClick={() => {setCurrentPage(i); updateFun(limCulc(i, limit)); window.scrollTo({top: 650, left: 0, behavior: "smooth"})}}>{i}</div>)}
        
    }

    function limCulc (page, limit) {
        return (page * limit -limit)
    }


    return (
        <div className="page-switcher-box">
            <div className="page-switcher-box__move move-left" onClick={()=>{screllRef.current.scrollBy(-110,0)}}></div>
            <div className="page-switcher-box__pages" ref={screllRef}>
                {elems}
            </div>
            <div className="page-switcher-box__move move-right" onClick={()=>{screllRef.current.scrollBy(110,0)}} ></div>
        </div>
    )
}