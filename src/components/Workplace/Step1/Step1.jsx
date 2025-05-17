import './Step1.css';
import {useState, useEffect} from 'react';
import {TrainCard} from './TrainCard/TrainCard.jsx';
import {PageSwitcher} from './PageSwitcher/PageSwitcher.jsx';




export function Step1({Step, fromCity, toCity, setIdSelectedDirection, setIdSelectedDirectionArrival, show }) {
    /* Step(1); */
    let [elem, setElem] = useState([]);
    let [totalCount, setTotalCount] = useState(0);
    let [itemShow, setItemShow] = useState(5);
/*     let [fCity, setFromCity] = useState(fromCity);
    let [tCity, setToCity] = useState(fromCity); */
    

    let d = {
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: false,
        have_air_conditioning: false,
        is_express: false,
        min_price: 2265,
        available_seats: 82,
        available_seats_info: {
            first: 18,
            second: 64
        },
        departure: {
            _id: "67ceb6778c75f00047c91a37",
            have_first_class: true,
            have_second_class: true,
            have_third_class: false,
            have_fourth_class: false,
            have_wifi: true,
            have_air_conditioning: false,
            is_express: false,
            min_price: 2265,
            duration: 385080,
            available_seats: 82,
            available_seats_info: {
                first: 18,
                second: 64
            },
            train: {
                _id: "67ceb6578c75f00047c900b0",
                name: "Иволга - 10"
            },
            from: {
                railway_station_name: "Московский",
                city: {
                    _id: "67ceb6548c75f00047c8f78e",
                    name: "санкт-петербург"
                },
                datetime: 1704978475
            },
            to: {
                railway_station_name: "Архангельск",
                city: {
                    _id: "67ceb6548c75f00047c8f794",
                    name: "архангельск"
                },
                datetime: 1705363555
            },
            price_info: {
                first: {
                    price: 4060,
                    top_price: 2520,
                    bottom_price: 3095
                },
                second: {
                    top_price: 2727,
                    bottom_price: 2265
                }
            }
        }
    }

    function test() {
        
            fetch( `https://students.netoservices.ru/fe-diplom/routes?from_city_id=67ceb6548c75f00047c8f78e&to_city_id=67ceb6548c75f00047c8f78d&limit=${itemShow}&date_start=2024-01-11&date_end=2024-01-12` )
            .then( response => response.json()
                .then( data => { setElem(data.items); setTotalCount(data.total_count); /* Step(1) */; console.log(data.items)})
            );
        }

    useEffect(()=>{
        fetch( `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${fromCity}&to_city_id=${toCity}&limit=${itemShow}` )
        .then( response => response.json()
        .then( data => { setElem(data.items); setTotalCount(data.total_count); /* Step(1) */;})
        .then(console.log(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${fromCity}&to_city_id=${toCity}&limit=${itemShow}`))
        );
    },[])

    function updateFun(offset) {
        fetch( `https://students.netoservices.ru/fe-diplom/routes?from_city_id=67ceb6548c75f00047c8f78e&to_city_id=67ceb6548c75f00047c8f78d&limit=${itemShow}&offset=${offset}` )
        .then( response => response.json()
            .then( data => { setElem(data.items);})
        );
    }

    return (
        <div style={{display: show ? 'block' : 'none'}}>
            <div className="step1-filter" >
                <div className="step1-filter__total-count">найднно {totalCount}</div>
                <div className="step1-filter__sorting">сортировать по: времени</div>
                <div className="step1-filter__show">показывать по: <span onClick={()=>{setItemShow(5)}} style={itemShow==5 ? {color:'#000000'} : {color:'#928F94'}}>5</span> <span onClick={()=>{setItemShow(10)}} style={itemShow==10 ? {color:'#000000'} : {color:'#928F94'}}>10</span> <span onClick={()=>{setItemShow(20)}} style={itemShow==20 ? {color:'#000000'} : {color:'#928F94'}}>20</span></div>
            </div>
        <br/><button onClick={test}>Загрузить</button>
            {/* <TrainCard trainInfo = {d}/> */}
            {elem.map( e => {
                return (
                    <TrainCard key={e.departure._id} trainInfo = {e} setIdSelectedDirection = {setIdSelectedDirection} setIdSelectedDirectionArrival = {setIdSelectedDirectionArrival}/>
                )
            })}
            <PageSwitcher totalCount={totalCount} limit={itemShow} updateFun={updateFun}/>
        </div>
    )
}