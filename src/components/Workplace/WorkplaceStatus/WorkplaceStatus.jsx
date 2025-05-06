import './WorkplaceStatus.css';


export function WorkplaceStatus({step}) {
   

    return (
        <div className="workplace-status">
            <div className={step >= 1 ? "workplace-status__text bgc-mod" : "workplace-status__text"}><p className="step-number">1</p>Билеты</div>
            <div className={step >= 1 ? "workplace-status__arrow bgc-mod" : "workplace-status__arrow"}></div>
            <div className={step >= 2 ? "workplace-status__text bgc-mod" : "workplace-status__text"}><p className="step-number">2</p>Пассажиры</div>
            <div className={step >= 2 ? "workplace-status__arrow bgc-mod" : "workplace-status__arrow"}></div>
            <div className={step >= 3 ? "workplace-status__text bgc-mod" : "workplace-status__text"}><p className="step-number">3</p>Оплата</div>
            <div className={step >= 3 ? "workplace-status__arrow bgc-mod" : "workplace-status__arrow"}></div>
            <div className={step >= 4 ? "workplace-status__text bgc-mod" : "workplace-status__text"}><p className="step-number">4</p>Проверка</div>
        </div>
    );
}