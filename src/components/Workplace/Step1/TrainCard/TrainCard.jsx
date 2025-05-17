import './TrainCard.css';
import {checTrue, msToTime} from './functionsForTrainCard.js';

export function TrainCard({trainInfo, setIdSelectedDirection, setIdSelectedDirectionArrival}) {

    let dataTrain = {
        startCity: 'none',                           // trainInfo.arrival ? trainInfo.arrival.from.city.name :'none',
        /* departure (прямое направление) */
        trainNum: trainInfo.departure.train.name,
        IdSelectedDirection: trainInfo.departure._id,  //направление туда
        cityFrom: trainInfo.departure.from.city.name,
        cityTo: trainInfo.departure.to.city.name,
        wiFi: trainInfo.departure.have_wifi,
        express: trainInfo.departure.is_express,
        conditioning: trainInfo.departure.have_air_conditioning,
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
        minPrice: trainInfo.departure.price_info,  //.bottom_price, // Цены обьектом {Сидячее Плацкарт Купе Люкс} брать: .bottom_price
    }

  if (trainInfo.arrival) {
        /* arrival (обратное направление) */
        dataTrain.IdSelectedArrival = trainInfo.arrival._id; //направление обратное
        dataTrain.timeFromArrival = trainInfo.arrival.from.datetime
        dataTrain.timeWayArrival = trainInfo.arrival.duration
        dataTrain.timeToArrival = trainInfo.arrival.to.datetime
        dataTrain.cityFromArrival = trainInfo.arrival.from.city.name
        dataTrain.cityToArrival = trainInfo.arrival.to.city.name
        dataTrain.stationFromArrival = trainInfo.arrival.from.railway_station_name
        dataTrain.stationToArrival = trainInfo.arrival.to.railway_station_name
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

                <div className="train-card-box__center__direction">
                    <div className="train-card-box__center__direction__info"><p className="info-time">{msToTime( dataTrain.timeFromArrival )}</p><p className="info-city">{dataTrain.cityFromArrival}</p><p className="info-station">{dataTrain.stationFromArrival}<br/><span style={{textTransform: 'lowercase'}}>вокзал</span></p></div>
                    <div className="train-card-box__center__direction__info"><p className="info-way-time">{msToTime( dataTrain.timeWayArrival )}</p><p className="info-arr">←</p></div>
                    <div className="train-card-box__center__direction__info"><p className="info-time">{msToTime( dataTrain.timeToArrival )}</p><p className="info-city">{dataTrain.cityToArrival}</p><p className="info-station">{dataTrain.stationToArrival}<br/><span style={{textTransform: 'lowercase'}}>вокзал</span></p></div>
                </div>

            </div>
            <div className="train-card-box__right">
                <div className="train-card-box__right__item" style={ {display: dataTrain.haveFourthClass==true ?'block' : 'none'}}><p className="tr-typr">Сидячие</p> <p className="tr-volume">{dataTrain.seatsInfo.fourth }</p> <div className="tr-div">от <p className="tr-price">{checTrue(dataTrain.minPrice.fourth)}</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item" style={ {display: dataTrain.haveThirdClass==true ?'block' : 'none'}}><p className="tr-typr">Плацкарт</p> <p className="tr-volume">{dataTrain.seatsInfo.third}</p> <div className="tr-div">от <p className="tr-price">{checTrue(dataTrain.minPrice.third)}</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item" style={ {display: dataTrain.haveSecondClass==true ?'block' : 'none'}}><p className="tr-typr">Купе</p> <p className="tr-volume">{dataTrain.seatsInfo.second}</p> <div className="tr-div">от <p className="tr-price">{checTrue(dataTrain.minPrice.second)}</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item" style={ {display: dataTrain.haveFirstClass==true ?'block' : 'none'}}><p className="tr-typr">Люкс</p> <p className="tr-volume">{dataTrain.seatsInfo.first}</p> <div className="tr-div">от <p className="tr-price">{checTrue(dataTrain.minPrice.first)}</p> <p className="tr-rub">₽</p></div></div>
                    <div className="ticket-box__bottom__left mod-for-train-card">
                        <div className="ticket-box__bottom__left__wi-fi" style={ {display: dataTrain.wiFi==true ?'inline' : 'none'}}></div>
                        <div className="ticket-box__bottom__left__express" style={ {display: dataTrain.express==true ?'inline' : 'none'}}></div>
                        <div className="ticket-box__bottom__left__conditioning" style={ {display: dataTrain.conditioning==true ?'inline' : 'none'}}></div>
                    </div>
                <div className="train-card-box__right__btn" onClick={()=>{
                    setIdSelectedDirection(dataTrain.IdSelectedDirection);
                    if (dataTrain.IdSelectedArrival) {setIdSelectedDirectionArrival(dataTrain.IdSelectedArrival)};
                    //console.log(trainInfo)
                    }}>Выбрать места</div>
            </div>
        </div>
    )
}