import './PassengersInfo.css'

export function PassengersInfo ({type='Взрослый', fName, name, oName, gen, birthDate, docNum, isLast=false}) {
    let docum;

    if (type=='Взрослый') {
        docum = 'Паспорт РФ '
    } else {
        docum = 'Свидетельство о рождении '
    }
    return (
        <div className="passengers-info-box" style={{borderBottom: isLast ? 'none' :'1px dashed #E5E5E5'}}>
            <div className="passengers-info-box__left">
                <div className="passengers-info-box__left__logo"></div>
                <div className="passengers-info-box__left__text">{type}</div>
            </div>
            <div className="passengers-info-box__right">
                <div className="passengers-info-box__right__name">{fName} {name} {oName}</div>
                <div className="passengers-info-box__right__gen">Пол {gen}</div>
                <div className="passengers-info-box__right__birth-date">Дата рождения {birthDate}</div>
                <div className="passengers-info-box__right__doc">{docum} {docNum}</div>
            </div>
        </div>
    )
}