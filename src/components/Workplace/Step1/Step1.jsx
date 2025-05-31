import './Step1.css';
import {useState, useEffect, useRef} from 'react';
import {TrainCard} from './TrainCard/TrainCard.jsx';
import {PageSwitcher} from './PageSwitcher/PageSwitcher.jsx';
/* import { tr } from 'date-fns/locale'; */
import { useLocation } from 'react-router-dom';




export function Step1({Step, fromCity, toCity, setIdSelectedDirection, setIdSelectedDirectionArrival, show, fetchURL, setFetchURL, fetchParams }) {
    /* Step(1); */
    let [elem, setElem] = useState([]);
    let [totalCount, setTotalCount] = useState(0);
    let [itemShow, setItemShow] = useState(5);
    let [sort, setSort] = useState('date');  //запрос с 'price' к серверу не работает на стороне сервера!
    let [sortToltip, setSortToltip] = useState(false);
    const sortToltipRef = useRef()
    let [loading, setLoading] = useState(true);
    const location = useLocation();
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

/*     useEffect(()=>{
        fetch( `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${fromCity}&to_city_id=${toCity}&limit=${itemShow}` )
        .then( response => response.json()
        .then( data => { setElem(data.items); setTotalCount(data.total_count); /* Step(1) *;})
        .then(console.log(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${fromCity}&to_city_id=${toCity}&limit=${itemShow}`))
        );
    },[]) */

    function updateFun(offset) {
        fetch( `https://${fetchURL}&offset=${offset}` )
        .then( response => response.json()
            .then( data => { setElem(data.items);})
        );
    }

/*     useEffect(()=>{
        fetch( `https://${fetchURL}&sort=${sort}`)
        .then( response => response.json()
            .then( data => { setElem(data.items);})
        );
    },[sort]) */

    useEffect(() => {
        const fetchCities = async () => {
            try {
                // Получаем города из URL параметров
                const searchParams = new URLSearchParams(location.search);
                const city1 = searchParams.get('city1');
                const city2 = searchParams.get('city2');

                // 1. Запрос для получения ID городов
                const idsResponse = await Promise.all([
                    fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${city1}`),
                    fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${city2}`)
                ]);

                const idsData = await Promise.all(idsResponse.map(res => res.json()));

                if (!fetchURL) {
                    fetch( `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${idsData[0][0]._id}&to_city_id=${idsData[1][0]._id}&limit=${itemShow}&sort=${sort}` )
                    .then( response => response.json())
                    .then( data => { setElem(data.items); setTotalCount(data.total_count); Step(1) ;})
                    .then(setFetchURL(`students.netoservices.ru/fe-diplom/routes?from_city_id=${idsData[0][0]._id}&to_city_id=${idsData[1][0]._id}&limit=${itemShow}`))
                    //.then(setFetchURL(console.log(fetchURL)))
                } else {

                    let settings='';
                    settings = fetchParams?.common?.first_class ? settings + `&have_first_class=${fetchParams.common.first_class}` : settings;
                    settings = fetchParams?.common?.second_class ? settings + `&have_second_class=${fetchParams.common.second_class}` : settings;
                    settings = fetchParams?.common?.third_class ? settings + `&have_third_class=${fetchParams.common.third_class}` : settings;
                    settings = fetchParams?.common?.fourth_class ? settings + `&have_fourth_class=${fetchParams.common.fourth_class}` : settings;
                    settings = fetchParams?.common?.wi_fi ? settings + `&have_wifi=${fetchParams.common.wi_fi}` : settings;
                    settings = fetchParams?.common?.expr ? settings + `&have_express=${fetchParams.common.expr}` : settings;
                    settings = fetchParams?.cost?.min ? settings + `&price_from=${fetchParams.cost.min}` : settings;
                    settings = fetchParams?.cost?.max ? settings + `&price_to=${fetchParams.cost.max}` : settings;
                    settings = fetchParams?.time_to?.start?.min ? settings + `&start_departure_hour_from=${fetchParams.time_to.start.min}` : settings; //Час отбытия от (число)
                    settings = fetchParams?.time_to?.start?.max ? settings + `&start_departure_hour_to=${fetchParams.time_to.start.max}` : settings; //Час отбытия до (число)
                    settings = fetchParams?.time_to?.finsh?.min ? settings + `&start_arrival_hour_from=${fetchParams.time_to.finsh.min}` : settings; //Час прибытия от (число)
                    settings = fetchParams?.time_to?.finsh?.max ? settings + `&start_arrival_hour_to=${fetchParams.time_to.finsh.max}` : settings; //Час прибытия до (число)
                    settings = fetchParams?.time_back?.start?.min ? settings + `&end_departure_hour_from=${fetchParams.time_back.start.min}` : settings; //Час отбытия от (число) назад
                    settings = fetchParams?.time_back?.start?.max ? settings + `&end_departure_hour_to=${fetchParams.time_back.start.max}` : settings; //Час отбытия до (число) назад
                    settings = fetchParams?.time_back?.finsh?.min ? settings + `&end_arrival_hour_from=${fetchParams.time_back.finsh.min}` : settings; //Час прибытия от (число) назад
                    settings = fetchParams?.time_back?.finsh?.max ? settings + `&end_arrival_hour_to=${fetchParams.time_back.finsh.max}` : settings; //Час прибытия до (число) назад
                    settings = fetchParams?.dates?.date_start ? settings + `&date_start=${fetchParams.dates.date_start}` : settings;
                    settings = fetchParams?.dates?.date_end ? settings + `&date_end=${fetchParams.dates.date_end}` : settings;
                    



                    fetch( `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${idsData[0][0]._id}&to_city_id=${idsData[1][0]._id}&limit=${itemShow}&sort=${sort}${settings}` ) // добавляем настройки поиска!
                    .then( response => response.json())
                    .then( data => { setElem(data.items); setTotalCount(data.total_count); Step(1) ;})
                    .then(setFetchURL(`students.netoservices.ru/fe-diplom/routes?from_city_id=${idsData[0][0]._id}&to_city_id=${idsData[1][0]._id}&limit=${itemShow}`))
                    console.log(settings)
                }

                
                
            } catch (error) {
                console.error('Error fetching cities:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchCities();
    },[loading, location, itemShow])

    /* useEffect(()=>{
        if (fetchParams.common.first_class) {
            setSearchSettings(`&have_first_class=${fetchParams.common.first_class}`)
        }
        
    },[fetchParams]) */

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{display: show ? 'block' : 'none'}}>
            <div className="step1-filter" >
                <div className="step1-filter__total-count">найднно {totalCount}</div>
                <div className="step1-filter__sorting">сортировать по: <span ref={sortToltipRef} style={{cursor: 'pointer', color: '#3E3C41'}} onClick={()=>{setSortToltip(true)}}>времени</span>
                    <div className="step1-filter__sorting__tooltip" style={{display: sortToltip ? 'block' : 'none'}}>
                        <div className="step1-filter__sorting__tooltip__item" onClick={()=>{setSort('date'); setSortToltip(false); sortToltipRef.current.innerHTML='времени' }}>времени</div>
                        <div className="step1-filter__sorting__tooltip__item" onClick={()=>{setSort('date'/* 'price' */); setSortToltip(false); sortToltipRef.current.innerHTML='стоимости'}}>стоимости</div> {/* запрос с 'price' к серверу не работает на стороне сервера! */}
                        <div className="step1-filter__sorting__tooltip__item" onClick={()=>{ setSort('duration'); setSortToltip(false); sortToltipRef.current.innerHTML='длительности'}}>длительности</div>
                    </div>
                </div>
                <div className="step1-filter__show">показывать по: <span onClick={()=>{setItemShow(5)}} style={itemShow==5 ? {color:'#000000'} : {color:'#928F94'}}>5</span> <span onClick={()=>{setItemShow(10)}} style={itemShow==10 ? {color:'#000000'} : {color:'#928F94'}}>10</span> <span onClick={()=>{setItemShow(20)}} style={itemShow==20 ? {color:'#000000'} : {color:'#928F94'}}>20</span></div>
            </div>
        {/* <br/><button onClick={test}>Загрузить</button> */}
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