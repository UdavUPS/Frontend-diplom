import './Menu.css';


export function Menu() {


    return (
        <>
        <div className="logo">Лого</div>
        <div className='menu-box'>
            <ul className='menu-box__list'>
                <li className='menu-box__list__item' >О нас</li>
                <li className='menu-box__list__item' >Как это работает</li>
                <li className='menu-box__list__item' >Отзывы</li>
                <li className='menu-box__list__item' >Контакты</li>
            </ul>
        </div>
        </>
    );
}