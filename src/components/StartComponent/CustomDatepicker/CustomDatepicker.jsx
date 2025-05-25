import './CustomDatepicker.css';
import { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker"; // Добавьте этот импорт
import { ru } from 'date-fns/locale'; // Для date-fns v3
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "./img/Calendar.svg";


// Для date-fns v2.x используйте:
// import ru from 'date-fns/locale/ru';

registerLocale("ru", ru);

export function CustomDatepicker({RequestSettings=false}) {
  const [startDate, setStartDate] = useState(null);
  let styleRS = RequestSettings ? 'request-settings-mod' : 'start-component-box-input-data';
  let styleRSicon = RequestSettings ? 'request-settings-mod-icon' : 'calendar-icon';

  
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale="ru"
      className="start-component-box-input-data"
      dateFormat="dd.MM.yy"
      popperClassName="custom-popper"
      showPopperArrow={false}
      popperPlacement="bottom-start"
      placeholderText="ДД/ММ/ГГ"
       renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        fontWeight: '500',
        fontSize: '24px',
        textTransform: 'capitalize'
        }}>
            <button onClick={decreaseMonth} style={{ border: 'none', background: 'none', fontSize: '30px', marginTop: '-7px' }}>🢐</button>
            <span style={{ margin: '0 30px', fontWeight: 'bold' }}>
                {monthDate.toLocaleString('ru', { month: 'long' })}
                </span>
                <button onClick={increaseMonth} style={{ border: 'none', background: 'none', fontSize: '30px', marginTop: '-7px' }}>🢒</button>
                </div>
        )}
      customInput={
        <div className="input-with-icon">
          <input type="text" className={styleRS} value={startDate 
            ? startDate.toLocaleDateString('ru-RU') 
            : "ДД/ММ/ГГ"}
          readOnly />
          <img src={Calendar} className={styleRSicon} />
        </div>
      }
    />
  );
}