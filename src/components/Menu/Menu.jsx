import './Menu.css';
import { Link } from 'react-router-dom';


export function Menu() {


    return (
        <>
        <div className="logo"><Link className='menu-box__list__item__link' to='/'>Лого</Link></div>
        <div className='menu-box'>
            <ul className='menu-box__list'>
                <li className='menu-box__list__item' ><Link className='menu-box__list__item__link' to='/about-us'>О нас</Link></li>
                <li className='menu-box__list__item' ><Link className='menu-box__list__item__link' to='/how-it-works'>Как это работает</Link></li>
                <li className='menu-box__list__item' ><Link className='menu-box__list__item__link' to='/reviews'>Отзывы</Link></li>
                <li className='menu-box__list__item' ><Link className='menu-box__list__item__link' to='/footer'>Контакты</Link></li>
            </ul>
        </div>
        </>
    );
}