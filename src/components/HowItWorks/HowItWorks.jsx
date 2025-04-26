import './HowItWorks.css';
import logoPC from './img/PC.png';
import logoHouse from './img/house.png';
import logoMir from './img/Mir.png';


export function HowItWorks() {


    return (
    <>
        <div className='how-it-works-cor'></div>
        <div className="how-it-works-heder">
                <div className="how-it-works-heder__title">Как это работает</div>
                <div className="how-it-works-heder__btn">Узнать больше</div>
        </div>
        <div className="how-it-works-body">

            <div className="how-it-works-body__item">
                <div className="how-it-works-body__item__logo">
                    <div className="how-it-works-body__item__logo__insit">
                        <img src={logoPC} alt="Лого" />
                    </div>
                </div>
                <div className="how-it-works-body__item__text">Удобный заказ на сайте</div>
            </div>

            <div className="how-it-works-body__item">
                <div className="how-it-works-body__item__logo">
                    <div className="how-it-works-body__item__logo__insit">
                        <img src={logoHouse} alt="Лого" />
                    </div>
                </div>
                <div className="how-it-works-body__item__text">Нет необходимости ехать в офис</div>
            </div>

            <div className="how-it-works-body__item">
                <div className="how-it-works-body__item__logo">
                    <div className="how-it-works-body__item__logo__insit">
                        <img src={logoMir} alt="Лого" />
                    </div>
                </div>
                <div className="how-it-works-body__item__text">Огромный выбор направлений</div>
            </div>
            
        </div>
    </>
    );
}