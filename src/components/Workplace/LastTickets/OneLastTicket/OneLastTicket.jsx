import './OneLastTicket.css';

export function OneLastTicket({citieFrom, citieTo, stationFrom, stationTo, wiFi, express, conditioning, price }) {
    return (
        <div className="ticket-box">
            <div className="ticket-box__top">
                <div className="ticket-box__top__left">
                    <p className="ticket-box__top__left__citie-from cities">{citieFrom}</p>
                    <p className="ticket-box__top__left__station-from stations">{stationFrom}<br/>вокзал</p>     
                </div>
                <div className="ticket-box__top__right">
                <p className="ticket-box__top__left__citie-to cities">{citieTo}</p>
                <p className="ticket-box__top__left__station-to stations">{stationTo}<br/>вокзал</p> 
                </div>
            </div>
            <div className="ticket-box__bottom">
            <div className="ticket-box__bottom__left">
                <div className="ticket-box__bottom__left__wi-fi" style={ {display: wiFi==true ?'inline' : 'none'}}></div>
                <div className="ticket-box__bottom__left__express" style={ {display: express==true ?'inline' : 'none'}}></div>
                <div className="ticket-box__bottom__left__conditioning" style={ {display: conditioning==true ?'inline' : 'none'}}></div>
            </div>
            <div className="ticket-box__bottom__right">
                <p className="pref">от</p> <p className="price">{' ' + price + ' '}</p> <p className="rub">₽</p> 
            </div>
            </div>
        </div>
    )
}