import styles from './styles.module.scss';
import { MONTHS, WEEK_DAYS } from '../../../constants/Date';
import { getKeyByValue } from '../../../services/getKeyByValue';
import ArrowLeft from '/public/icons/arrow_left.svg';
import ArrowRight from '/public/icons/arrow_right.svg';
import { DatePickerProps } from './Types';
import Image from 'next/image';
import { useState } from 'react';

const DatePicker = ({isShow, changeFunction, setClose, currentDate}:DatePickerProps)=>{

  
    const [shiftDate, setShiftDate] = useState<number>(0);
    // const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const current_date = new Date(currentDate);
    const [title, setTitle] = useState();
    const shift = 35;
    const days = [];
    let start_days = new Date();
    let end_days = new Date();
    const getTitle = ()=>{

  
        return getKeyByValue<number>(MONTHS, start_days.getMonth()+1) + ' ' + Number(start_days.getFullYear());

    }
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
        days.push(
            <span 
            className={dateStyleClass}
            id={`${start_days.getFullYear()}-${start_days.getMonth()+1}-${start_days.getDate()}`}
            onClick={(e)=>{
                
                //@ts-ignore
                const new_date_str = e.target.id;
                console.log(new_date_str)
                changeFunction(new_date_str);
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

                        setShiftDate(shiftDate-shift);
                    }}
                    />
                    <h5>
                        {getTitle()}
                    </h5>
                    <Image
                    src={ArrowRight}
                    objectFit="fill"
                    onClick={()=>{

                        setShiftDate(shiftDate+shift);
                    }}
                    />
                </div>
                <div
                className={styles.date_body}
                >
                    {WEEK_DAYS.map(day=><span className={styles.week}>{day}</span>)}
                    {days}
                </div>
            </div>
        )
    }
    
    return <></>
}

export default DatePicker