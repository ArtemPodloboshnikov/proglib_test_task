import styles from './styles.module.scss';
import { MONTHS, WEEK_DAYS } from '../../../constants/Date';
import { getPickerTitle, getMonthByIndex } from './handlers';
import ArrowLeft from '/public/icons/arrow_left.svg';
import ArrowRight from '/public/icons/arrow_right.svg';
import { getFullDate } from '../../../services/getFullDate';
import { DatePickerProps } from './Types';
import Image from 'next/image';
import { useState } from 'react';

const DatePicker = ({isShow, changeFunction, setClose, setMonth, setDay, setYear, currentDate}:DatePickerProps)=>{

  
    
    const [shiftDate, setShiftDate] = useState<number>(0);
    // const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const current_date = new Date(currentDate);
    const offset = 35;
    const days = [];
    let start_days = new Date(currentDate);
    let end_days = new Date(currentDate);
    
    start_days.setDate(1 + shiftDate);
    end_days.setDate(36 + shiftDate);

    while (start_days.toLocaleDateString() != end_days.toLocaleDateString())
    {
        let next_day = start_days.getDate();
        const next_month = start_days.getMonth();
        const next_year = start_days.getFullYear();

        const current_month = current_date.getMonth();
        const current_year = current_date.getFullYear();
        const current_day = current_date.getDate();

        let dateStyleClass = (current_month != next_month || current_year != next_year)?styles.new_month:'';
        dateStyleClass = (current_day == next_day && current_month == next_month && current_year == next_year)?styles.current_date:dateStyleClass;
        const id_span = getFullDate(start_days);
        days.push(
            <span 
            className={dateStyleClass}
            id={id_span}
            key={id_span}
            onClick={(e)=>{
                
                //@ts-ignore
                const new_date_str: string = e.target.id;
                const new_date_arr: string[] = new_date_str.split('-');
                console.log(next_day);
                setDay(new_date_arr[2]);
                setMonth(getMonthByIndex(Number(new_date_arr[1])));
                setYear(new_date_arr[0]);
                changeFunction(new_date_str);
                setShiftDate(0);
                setClose();
            }}
            >
                {next_day}
            </span>
        );
        start_days.setDate(++next_day)
    }
    if (isShow)
    {

        return (
    
            <div
            className={styles.date_picker}
            >
                <div
                className={styles.date_title}
                >
                    <Image
                    src={ArrowLeft}
                    objectFit="fill"
                    onClick={()=>{

                        setShiftDate(shiftDate-offset);
                    }}
                    />
                    <h5>
                        {getMonthByIndex(current_date) + ' ' + start_days.getFullYear()}
                    </h5>
                    <Image
                    src={ArrowRight}
                    objectFit="fill"
                    onClick={()=>{

                        setShiftDate(shiftDate+offset);
                    }}
                    />
                </div>
                <div
                className={styles.date_body}
                >
                    {WEEK_DAYS.map((day, index)=><span key={`${day}_${index}`} className={styles.week}>{day}</span>)}
                    {days}
                </div>
            </div>
        )
    }
    
    return <></>
}

export default DatePicker