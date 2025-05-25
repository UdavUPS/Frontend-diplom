import { useNavigate } from 'react-router-dom';

export function getCities(citie, setCities, setTooltipShow) {

    if (citie && validateIput(citie)) {
        fetch( `https://students.netoservices.ru/fe-diplom/routes/cities?name=${citie}` )
        .then( response => response.json())
        .then( data => setCities(data) );
         setTooltipShow(true);
    } else {
        setCities([]);
        setTooltipShow(false);
    }
}
    
function validateIput (text) {
    return /^[а-я А-Я]{2}/.test(text);
}

/* export function tryToGo(e, selestCities1, selestCities2, LDB, navigate) {
    if (!selestCities1 || !selestCities2) {
        e.preventDefault(); // Отменяем переход
        alert('Введитно неверное название города или его нет в базе');
        return
    } else {
         let city1, city2;

          try {
            fetch( `https://students.netoservices.ru/fe-diplom/routes/cities?name=${selestCities1}` )
            .then( response => response.json())
            .then( data => {
                city1 = selestCities1
                LDB.cities.startCitie = selestCities1;
                LDB.cities.startCitieID = data._id;
                // console.log(data._id)
            } );
        } catch (error) {
            alert('Указанного города отправления нет в базе');
        }
        try {
            fetch( `https://students.netoservices.ru/fe-diplom/routes/cities?name=${selestCities2}` )
            .then( response => response.json())
            .then( data => {
                city2 = selestCities2
                LDB.cities.finishCitie = selestCities2;
                LDB.cities.finishCitieID = data._id;
                // console.log(data._id)
            } );
        } catch (error) {
            alert('Указанного города прибытия нет в базе');
        }
        navigate(`/ticket-page?city1=${encodeURIComponent(city1)}&city2=${encodeURIComponent(city2)}`);
    }

    // Иначе переход произойдет нормально
}; */


export async function tryToGo(e, selestCities1, selestCities2, LDB, navigate) {
        if (!selestCities1 || !selestCities2) {
            e.preventDefault();
            alert('Введите название города');
            return;
        }
        try {
            // Параллельно выполняем оба запроса
            const [response1, response2] = await Promise.all([
                fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${selestCities1}`),
                fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${selestCities2}`)
            ]);
            
            const [data1, data2] = await Promise.all([
                response1.json(),
                response2.json()
            ]);
            
            // Сохраняем данные
            LDB.cities.startCitie = selestCities1;
            LDB.cities.startCitieID = data1._id;
            LDB.cities.finishCitie = selestCities2;
            LDB.cities.finishCitieID = data2._id;
            
            // Переходим на страницу
            navigate(`/ticket-page?city1=${encodeURIComponent(selestCities1)}&city2=${encodeURIComponent(selestCities2)}`);
        } catch (error) {
            alert('Ошибка при поиске городов');
            console.error(error);
        }
}

export function changeCities(inputFromRef, inputToRef, setSelestCities1, setSelestCities2) {
    let citie = inputFromRef.current.value;
    inputFromRef.current.value = inputToRef.current.value;
    inputToRef.current.value = citie;
    setSelestCities1(inputFromRef.current.value);
    setSelestCities2(inputToRef.current.value);

}