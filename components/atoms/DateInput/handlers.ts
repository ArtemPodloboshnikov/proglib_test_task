import { MONTHS } from "../../../constants/Date";
import { getKeyByValue } from "../../../services/getKeyByValue";
import { changeFunctionType } from "./Types";

const getMonthByIndex = (date: Date|number, pure=false)=>{
    if (date instanceof Date)
    console.log(date.getMonth())
    if (pure)
    {

        const res: string|undefined = getKeyByValue<number>(MONTHS, (typeof date == "number")?date:date.getMonth());
        if (!res)
            return 'Декабрь';
        return res;
    }
    else
    {
        return getKeyByValue<number>(MONTHS, (typeof date == "number")?(date + 1):(date.getMonth() + 1));
    }
}
const getPickerTitle = (date: Date)=>{

  
    return getMonthByIndex(date, true) + ' ' + Number(date.getFullYear());

}

const getFullDateArray = (data_str: string)=>{

    const full_date_arr: string[] = data_str.split('-');
    if (full_date_arr.length == 3)
    {
        return full_date_arr;
    }
    else
    {
        console.error("Bad format! Must be (YYYY-mm-dd)")
        return [];
    }
}

const setDate = (current_text: string, current_name: string, date_array: string[],
                date_name: string, month_name: string, year_name: string,
                name_component: string, changeFunction: changeFunctionType)=>{
    
    try
    {
        const full_date_arr = date_array;
    
        const names_index = {
    
            [date_name]: 2,
            [month_name]: 1,
            [year_name]: 0
        }
        if (full_date_arr.length != 0)
        {

            full_date_arr[names_index[current_name]] = (MONTHS[current_text])?String(MONTHS[current_text]):current_text;
            console.log(full_date_arr, name_component)
            changeFunction(name_component, full_date_arr.join('-'));
        }

    }
    catch (e)
    {
        console.error(e)
    }
}

export {getPickerTitle, getMonthByIndex, setDate, getFullDateArray};