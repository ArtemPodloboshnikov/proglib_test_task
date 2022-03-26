import Image from "next/image";

import Calendar from '/public/icons/calender.svg';
import { InputTypes, InputProps } from "./Types";
import styles from './styles.module.scss';
import Select from "../../atoms/Select";
import FilesUploader from "../../atoms/FilesUploader";
import { MONTHS } from "../../../constants/Select";

const Input = ({name, placeholder, type, changeFunction, error, multiple=false, subtitle='', styleClass=''}:InputProps)=>{

    const input_params = {

        name: name,
        placeholder: placeholder,
        type: type,
        onChange: changeFunction,
        className: [styleClass, error?.styleClass].join(' ')
    }

    switch (type)
    {
        case InputTypes.EMAIL:
        case InputTypes.PHONE:
        case InputTypes.TEXT:
        {
            return (
                <>
                    <input
                    {...input_params}
                    />
                    {error?.message}
                </>
            )

        }
        case InputTypes.TEXTAREA:
        {
            return (
                <>
                    <textarea
                    {...input_params}
                    />
                    {error?.message}
                </>
            )
        }
        case InputTypes.DATE:
        {
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
                        name={`${name}_date`}
                        type="number"
                        min={1}
                        max={31}
                        />
                        <Select
                        styleClass={styles.select}
                        options={MONTHS}
                        placeholder="Месяц"
                        name={`${name}_month`}
                        />
                        <input
                        placeholder="Год"
                        name={`${name}_year`}
                        type="number"
                        min={2000}
                        max={2024}
                        />
                        
                    </label>
                    <div 
                    className={styles.icon}
                    >
                        <Image
                        src={Calendar}
                        width={12}
                        height={12}
                        layout="responsive"
                        />
                    </div>
                </div>
            )
        }
        case InputTypes.FILE:
        {
            return <FilesUploader
                    placeholder={placeholder}
                    name={name}
                    multiple={multiple}
                    styleClass={input_params.className}
                    />
        }
        case InputTypes.URL:
        {
            return (
                <div className={styles.wrap_url}>
                    <p>{subtitle}</p>
                    <input 
                    {...input_params}
                    />
                    {error?.message}
                </div>
            )
        }
        case InputTypes.SUBMIT:
        {
            return <input 
                   {...input_params}
                   value={placeholder}
                   className={styles.submit}
                   />
        }
        default: return <></>;
    }

}

export default Input;