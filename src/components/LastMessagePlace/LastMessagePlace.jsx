import './LastMessagePlace.css';
import { Link, useLocation } from 'react-router-dom';
import StarRating from "./StarRating/StarRating.jsx";


export function LastMessagePlace() {
    const location = useLocation();
    const payerInf = location.state || {};


    return (
        <div className='last-mes-cor'>
            <div className="last-mes-cor__content">
                <div className="last-mes-cor__content__title">Благодарим Вас за заказ!</div>
                <div className="last-mes-cor__content__cart">
                    <div className="last-mes-cor__content__cart__heder">
                        <div className="last-mes-cor__content__cart__heder__num">№Заказа {Math.floor(Math.random() * 1000)}АА</div>
                        <div className="last-mes-cor__content__cart__heder__cost"><p style={{fontWeight: '400', color: '#928F94', marginRight:'8px'}}>сумма</p><p>7760</p><p style={{fontWeight: '400', color: '#928F94', marginLeft:'8px'}}>₽</p></div>
                    </div>
                    <div className="last-mes-cor__content__cart__tip">
                        <div className="last-mes-cor__content__cart__tip__item">
                            <div className="last-mes-cor__content__cart__tip__item__logo pc"></div>
                            <div className="last-mes-cor__content__cart__tip__item__text" style={{width: '152px'}}>билеты будут отправлены на ваш <samp style={{fontWeight: '500'}}>e-mail</samp></div>
                        </div>
                        <div className="last-mes-cor__content__cart__tip__item">
                            <div className="last-mes-cor__content__cart__tip__item__logo print"></div>
                            <div className="last-mes-cor__content__cart__tip__item__text"><p style={{fontWeight: '500'}}>распечатайте</p> и сохраняйте билеты до даты поездки</div>
                        </div>
                        <div className="last-mes-cor__content__cart__tip__item">
                            <div className="last-mes-cor__content__cart__tip__item__logo control"></div>
                            <div className="last-mes-cor__content__cart__tip__item__text"><samp style={{fontWeight: '500'}}>предьявите</samp> распечатанные билеты при посадке</div>
                        </div>
                    </div>
                    <div className="last-mes-cor__content__cart__content">
                        <div className="last-mes-cor__content__cart__content__pas-name">{payerInf._name} {payerInf.oName}!</div>
                        <div className="last-mes-cor__content__cart__content__message">Ваш заказ успешно оформлен.<br /> В ближайшее время с вами свяжется наш оператор для подтверждения.</div>
                        <div className="last-mes-cor__content__cart__content__thanks">Благодарим Вас за оказанное доверие и желаем приятного путешествия!</div>
                    </div>
                    <div className="last-mes-cor__content__cart__footer">
                        <div className="last-mes-cor__content__cart__footer__quality">
                            <div className="last-mes-cor__content__cart__footer__quality__messagr">Оценить сервис</div>
                            <div className="last-mes-cor__content__cart__footer__quality__stars">
                                <StarRating />
                            </div>
                        </div>
                        <Link className='menu-box__list__item__link' to='/'><div className="last-mes-cor__content__cart__footer__btn">вернуться на главную</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}