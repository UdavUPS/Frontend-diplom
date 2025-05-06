import './LastTickets.css';
import {OneLastTicket} from './OneLastTicket/OneLastTicket.jsx';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';


export function LastTickets({style}) {
    let [lasts, setLasts] = useState([]);

    useEffect(() => {
        fetch( 'https://students.netoservices.ru/fe-diplom/routes/last' )
            .then( response => response.json())
            .then( data => { setLasts(data)});
    },[])
    

    return (
        <div className="last-tickets-box" style={style}>
            <h1 className="last-tickets-box_title">последние билеты</h1>
            {/* <OneLastTicket citieFrom='Варкута' citieTo='Могилев' stationFrom='Варкутский' stationTo='Могилевский' wiFi={true} express={false} conditioning={true} price='7 200' /> */}
            {lasts.slice(2, 5).map((e) => {
                return (
                    <OneLastTicket key={uniqid()} citieFrom={e.departure.from.city.name} citieTo={e.departure.to.city.name} stationFrom={e.departure.from.railway_station_name} stationTo={e.departure.to.railway_station_name} wiFi={e.have_wifi} express={e.is_express} conditioning={e.have_air_conditioning} price={e.min_price} />
                )
            })}
        </div>
    )
    
}
