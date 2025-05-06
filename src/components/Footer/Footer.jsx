import './Footer.css'; mail
import telephone from './img/telephone.svg';
import mail from './img/mail.svg';
import skype from './img/skype.svg';
import position from './img/position.svg'; 
import backBtn from './img/back-btn.svg';


export function Footer() {

  /*   function clearInput() {
        console.log('очистка')
        
    } */


    return (
        <div className="footer-box">
            <div className="footer-box__content">
                <div className="footer-box__content__left">
                    <div className="footer-box__content__left__common-title footer-title">Свяжитесь с нами</div>
                    <div className="footer-box__content__left__info">
                        <div className="footer-box__content__left__info__item">
                            <div className="footer-box__content__left__info__item__logo"><img src={telephone} alt="тедефон" /></div>
                            <div className="footer-box__content__left__info__item__text footer-text">8 (800) 000 00 00</div>
                        </div>
                        <div className="footer-box__content__left__info__item">
                            <div className="footer-box__content__left__info__item__logo"><img src={mail} alt="mail" /></div>
                            <div className="footer-box__content__left__info__item__text footer-text">inbox@mail.ru</div>
                        </div>
                        <div className="footer-box__content__left__info__item">
                            <div className="footer-box__content__left__info__item__logo"><img src={skype} alt="скайп" /></div>
                            <div className="footer-box__content__left__info__item__text footer-text">tu.train.tickets</div>
                        </div>
                        <div className="footer-box__content__left__info__item">
                            <div className="footer-box__content__left__info__item__logo"><img src={position} alt="локация" /></div>
                            <div className="footer-box__content__left__info__item__text footer-text">г. Москва<br/>ул. Московская 27-35<br/>555 555</div>
                        </div>
                    </div>
                </div>
                <div className="footer-box__content__right">
                    <div className="footer-box__content__right__title footer-title">Подписка</div>
                    <p className="footer-box__content__right__text footer-text">Будьте в курсе событий</p>
                    <div className="footer-box__content__right__for-subscribe">
                        <input type="email" placeholder="e-mail" className="footer-box__content__right__for-subscribe__input" />
                        <div className="footer-box__content__right__for-subscribe__btn">отправить</div>
                    </div>
                    <div className="footer-box__content__right__title footer-title">Подписывайтесь на нас</div>
                    <div className="footer-box__content__right__a-block">
                        <a href="#"><div className="footer-box__content__right__a-block__YouTube"></div></a>
                        <a href="#"><div className="footer-box__content__right__a-block__in"></div></a>
                        <a href="#"><div className="footer-box__content__right__a-block__g"></div></a>
                        <a href="#"><div className="footer-box__content__right__a-block__f"></div></a>
                        <a href="#"><div className="footer-box__content__right__a-block__twitter"></div></a>
                    </div>    
                </div>
            </div>
            <div className="footer-box__end">
                <div className="footer-box__end__logo">Лого</div>
                <div className="footer-box__end__back-btn"><img src={backBtn} alt="кнопка вверх" onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: "smooth"});}} /></div> 
                <div className="footer-box__end__year footer-text">2025 WEB</div>
            </div>
        </div>
    );
}