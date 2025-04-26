import './ReviewsItem.css';
import avatar from './img/avatar.svg';


export function ReviewsItem({foto, clientName, text}) {


    return (
        <div className="reviews-item-box">
            <div className="reviews-item-box__foto">{/* <img src={foto} alt="Фото клиента" /> */}</div>
            <div className="reviews-item-box__content">
                <div className="reviews-item-box__content__name">{clientName}</div>
                <div className="reviews-item-box__content__text">{text}</div>
            </div>
        </div>
    );
}