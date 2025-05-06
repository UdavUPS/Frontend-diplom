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