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
                    <div className="train-card-box__center__direction__info"><p className="info-time">10:30</p><p className="info-city">{dataTrain.cityFrom}</p><p className="info-station">{dataTrain.stationFrom}<br/><span style={{textTransform: 'lowercase'}}>вокзал</span></p></div>
                    <div className="train-card-box__center__direction__info"><p className="info-way-time">10:30</p><p className="info-arr">→</p></div>
                    <div className="train-card-box__center__direction__info"><p className="info-time">10:30</p><p className="info-city">{dataTrain.cityTo}</p><p className="info-station">{dataTrain.stationTo}<br/><span style={{textTransform: 'lowercase'}}>вокзал</span></p></div>
                </div>

            </div>
            <div className="train-card-box__right">
                <div className="train-card-box__right__item"><p className="tr-typr">Сидячие</p> <p className="tr-volume">53</p> <div className="tr-div">от <p className="tr-price">2055</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item"><p className="tr-typr">Сидячие</p> <p className="tr-volume">53</p> <div className="tr-div">от <p className="tr-price">2055</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item"><p className="tr-typr">Сидячие</p> <p className="tr-volume">53</p> <div className="tr-div">от <p className="tr-price">2055</p> <p className="tr-rub">₽</p></div></div>
                <div className="train-card-box__right__item"><p className="tr-typr">Сидячие</p> <p className="tr-volume">53</p> <div className="tr-div">от <p className="tr-price">2055</p> <p className="tr-rub">₽</p></div></div>
                    <div className="ticket-box__bottom__left mod-for-train-card">
                        <div className="ticket-box__bottom__left__wi-fi" style={ {display: dataTrain.wiFi==true ?'inline' : 'none'}}></div>
                        <div className="ticket-box__bottom__left__express" style={ {display: dataTrain.express==true ?'inline' : 'none'}}></div>
                        <div className="ticket-box__bottom__left__conditioning" style={ {display: dataTrain.conditioning==true ?'inline' : 'none'}}></div>
                    </div>
                <div className="train-card-box__right__btn">Выбрать места</div>
            </div>
        </div>
    )
}