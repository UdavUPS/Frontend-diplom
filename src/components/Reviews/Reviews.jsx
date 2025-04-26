import './Reviews.css';
import {ReviewsItem} from './ReviewsItem/ReviewsItem.jsx'; 
import {reviewsCollection} from './ReviewsCollection.js';
import uniqid from 'uniqid';



export function Reviews() {


    return (
        <div className="reviews-box">
            <div className="reviews-box__title">отзывы</div>
            <ul className="reviews-box__reviewsList">
                {
                    reviewsCollection.map((e) => {
                        return (
                            <li key={uniqid()} className="reviews-box__reviewsList__item"><ReviewsItem  clientName = {e.name} text = {e.text} /></li>
                        )
                    })
                }
            </ul>
        </div>
    );
}