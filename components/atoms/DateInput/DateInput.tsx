import { useState } from "react";
import Image from "next/image";

import CalendarGrey from '/public/icons/calender_grey.svg';
import CalendarWhite from '/public/icons/calender_white.svg';

import styles from './styles.module.scss';
import DatePicker from "./DatePicker";
import { DateInputProps } from "./Types";
import { getKeyByValue } from "../../../services/getKeyByValue";
import { MONTHS } from "../../../constants/Date";
import Select from "../Select";

const DateInput = ({changeFunction, name, dataDate}:DateInputProps)=>{

    const [clickIcon, setClickIcon] = useState({icon: CalendarGrey, classBack: styles.icon_simple});
    const date_name = `${name}_date`;
    const month_name = `${name}_month`;
    const year_name = `${name}_year`;
    let full_date_arr: string[] = dataDate.split('-');
    console.log(getKeyByValue<number>(MONTHS, Number(full_date_arr[1])))
    const setDate = (current_text: string, current_name: string)=>{
        
        const names_index = {

            [date_name]: 2,
            [month_name]: 1,
            [year_name]: 0
        }

        full_date_arr[names_index[current_name]] = (MONTHS[current_text])?String(MONTHS[current_text]):current_text;
        changeFunction(name, full_date_arr.join('-'));
    }
    return (

        <div
        className={styles.wrap_date}
        >
            <label
            className={styles.date} 
            htmlFor={name}
            >
                <input
                placeholder="Дата" 
                name={date_name}
                type="number"
                min={1}
                max={31}
                onChange={(e)=>setDate(e.target.value, e.target.name)}
                defaultValue={full_date_arr[2]||''}
                />
                <Select
                styleClass={styles.select}
                options={Object.keys(MONTHS)}
                placeholder="Месяц"
                name={month_name}
                changeFunction={setDate}
                defaultValue={getKeyByValue<number>(MONTHS, Number(full_date_arr[1]))}
                />
                <input
                placeholder="Год"
                name={year_name}
                type="number"
                min={2000}
                max={2024}
                onChange={(e)=>setDate(e.target.value, e.target.name)}
                defaultValue={full_date_arr[0]}
                />
                
            </label>
            <div 
            className={[styles.icon, clickIcon.classBack].join(' ')}
            onClick={()=>{

                    
                (clickIcon.icon == CalendarGrey)?
                setClickIcon({icon: CalendarWhite, classBack: styles.icon_action})
                :
                setClickIcon({icon: CalendarGrey, classBack: styles.icon_simple})
            }}
            >
                <Image
                src={clickIcon.icon}
                width={12}
                height={12}
                layout="responsive"
                />
            </div>
                <DatePicker
                isShow={(CalendarWhite == clickIcon.icon)}
                changeFunction={(text: string)=>changeFunction(name, text)}
                setClose={()=>{setClickIcon({icon: CalendarGrey, classBack: styles.icon_simple})}}
                currentDate={dataDate}
                />
        </div>
    )
}

export default DateInput;