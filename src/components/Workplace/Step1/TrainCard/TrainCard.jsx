import './TrainCard.css';

export function TrainCard({trainInfo}) {

    let dataTrain = {
        trainNum: trainInfo.departure.train.name,
        startCity: 'none',                           // trainInfo.arrival ? trainInfo.arrival.from.city.name :'none',
        cityFrom: trainInfo.departure.from.city.name,
        cityTo: trainInfo.departure.to.city.name,
        wiFi: trainInfo.have_wifi,
        express: trainInfo.is_express,
        conditioning: trainInfo.have_air_conditioning,
        stationFrom: trainInfo.departure.from.railway_station_name,
        stationTo: trainInfo.departure.to.railway_station_name,
        timeFrom: trainInfo.departure.from.datetime,
        timeTo: trainInfo.departure.to.datetime,
        timeWay: trainInfo.departure.duration,
        haveFourthClass: trainInfo.departure.have_fourth_class, // Сидячее место (true/false)
        haveThirdClass: trainInfo.departure.have_third_class, // Плацкарт (true/false)
        haveSecondClass: trainInfo.departure.have_second_class, // Купе (true/false)
        haveFirstClass: trainInfo.departure.have_first_class, // Люкс (true/false)
        seatsInfo: trainInfo.departure.available_seats_info,  // Кол-во {Сидячее Плацкарт Купе Люкс}
        minPrice: trainInfo.departure.price_info.fourth.bottom_price//.bottom_price, // Цены обьектом {Сидячее Плацкарт Купе Люкс} брать: .bottom_price
    }
    

    function msToTime(duration) {
        var milliseconds = parseInt((duration%1000)/100),
            seconds = parseInt((duration/1000)%60),
            minutes = parseInt((duration/(1000*60))%60),
            hours = parseInt((duration/(1000*60*60))%24); 
        hours = (hours < 10) ? "0" + hours : hours; 
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds; 
        return hours + ":" + minutes;
    }

    return (
        <div className="train-card-box">
            <div className="train-card-box__left">
                <div className="train-card-box__left__logo" ></div>
                <div className="train-card-box__left__train-num" >{dataTrain.trainNum}</div>
                <div className="train-card-box__left__start-city" style={{display: dataTrain.startCity=='none' ?'none':'inline'}} >{dataTrain.startCity} →</div>
                <div className="train-card-box__left__city-from"  >{dataTrain.cityFrom} →</div>
                <div className="train-card-box__left__city-to"  >{dataTrain.cityTo}</div>
            </div>
            <div className="train-card-box__center">
                <div className="train-card-box__center__direction">
                    <div className="train-card-box__center__direction__info"><p className="info-time">{msToTime( dataTrain.timeFrom )}</p><p className="info-city">{dataTrain.cityFrom}</p><p className="info-station">{dataTrain.stationFrom}<br/><span style={{textTransform: 'lowercase'}}>вокзал</span></p></div>
                    <div className="train-card-box__center__direction__info"><p className="info-way-time">{msToTime( dataTrain.timeWay )}</p><p className="info-arr">→</p></div>
                    <div className="train-card-box__center__direction__info"><p className="info-time">{msToTime( dataTrain.timeTo )}</p><p className="info-city">{dataTrain.cityTo}</p><p className="info-station">{dataTrain.stationTo}<br/><span style={{textTransform: 'lowercase'}}>вокзал</span></p></div>
                </div>

            </div>
            <div className="train-card-box__right">
                <div className="train-card-box__right__item" style={ {display: dataTrain.haveFourthClass==true ?'block' : 'none'}}><p className="tr-typr">Сидячие</p> <p className="tr-volume">{trainInfo.departure.price_info.fourth.bottom_price}</p> <div className="tr-div">от <p className="tr-price">{/* {dataTrain.minPrice} */}2055</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item" style={ {display: dataTrain.haveThirdClass==true ?'block' : 'none'}}><p className="tr-typr">Плацкарт</p> <p className="tr-volume">{/* dataTrain.seatsInfo.third */}</p> <div className="tr-div">от <p className="tr-price">205</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item" style={ {display: dataTrain.haveSecondClass==true ?'block' : 'none'}}><p className="tr-typr">Купе</p> <p className="tr-volume">{/* dataTrain.seatsInfo.second */}</p> <div className="tr-div">от <p className="tr-price">2055</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item" style={ {display: dataTrain.haveFirstClass==true ?'block' : 'none'}}><p className="tr-typr">Люкс</p> <p className="tr-volume">{/* dataTrain.seatsInfo.first */}</p> <div className="tr-div">от <p className="tr-price">2055</p> <p className="tr-rub">₽</p></div></div>
                    <div className="ticket-box__bottom__left mod-for-train-card">
                        <div className="ticket-box__bottom__left__wi-fi" style={ {display: dataTrain.wiFi==true ?'inline' : 'none'}}></div>
                        <div className="ticket-box__bottom__left__express" style={ {display: dataTrain.express==true ?'inline' : 'none'}}></div>
                        <div className="ticket-box__bottom__left__conditioning" style={ {display: dataTrain.conditioning==true ?'inline' : 'none'}}></div>
                    </div>
                <div className="train-card-box__right__btn" onClick={()=>{console.log( dataTrain.minPrice)}}>Выбрать места</div>
            </div>
        </div>
    )
}