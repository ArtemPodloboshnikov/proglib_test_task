import { useState } from "react";
import Image from "next/image";

import CalendarGrey from '/public/icons/calender_grey.svg';
import CalendarWhite from '/public/icons/calender_white.svg';

import styles from './styles.module.scss';
import DatePicker from "./DatePicker";
import { DateInputProps } from "./Types";
import { setDate, getFullDateArray, getMonthByIndex } from "./handlers";
import { MONTHS } from "../../../constants/Date";
import Select from "../Select";

const DateInput = ({changeFunction, name, dataString}:DateInputProps)=>{

    const [clickIcon, setClickIcon] = useState({icon: CalendarGrey, classBack: styles.icon_simple});
    const name_date_input = name;
    const date_name = `${name}_date`;
    const month_name = `${name}_month`;
    const year_name = `${name}_year`;
    const full_date_arr: string[] = getFullDateArray(dataString)
    const handlerDate = (text: string, name: string)=>setDate(text, name, full_date_arr, date_name, month_name, year_name, name_date_input, changeFunction);
    
    const [month, setMonth] = useState<string>(getMonthByIndex(Number(full_date_arr[1]), true));
    const [day, setDay] = useState<string>(full_date_arr[2]);
    const [year, setYear] = useState<string>(full_date_arr[0]);
    
    const days = new Date(Number(full_date_arr[0]), Number(full_date_arr[1]), 0).getDate();
    
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
                max={days}
                onChange={(e)=>{handlerDate(e.target.value, e.target.name); setDay(e.target.value)}}
                value={day}
                />
                <Select
                styleClass={styles.select}
                options={Object.keys(MONTHS)}
                placeholder="Месяц"
                name={month_name}
                changeFunction={handlerDate}
                value={month}
                setValue={setMonth}
                />
                <input
                placeholder="Год"
                name={year_name}
                type="number"
                min={2000}
                max={2024}
                onChange={(e)=>{handlerDate(e.target.value, e.target.name); setYear(e.target.value)}}
                value={year}
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
                currentDate={dataString}
                setDay={setDay}
                setMonth={setMonth}
                setYear={setYear}
                />
        </div>
    )
}

export default DateInput;