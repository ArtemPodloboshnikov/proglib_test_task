import { SelectProps } from "./Types";
import styles from './styles.module.scss';
import Arrow from '/public/icons/arrow.svg';
import Image from "next/image";
import { useState } from "react";

const Select = ({name, options, placeholder, changeFunction, value, setValue, styleClass}:SelectProps)=>{

    const [showOptions, setShowOptions] = useState<boolean>(false);
    let localeValue = value;
    let setLocaleValue = setValue;
    if (!(localeValue && setLocaleValue))
    {
        [localeValue, setLocaleValue] = useState<string>(value||'');
    }
    const id_arrow = `${name}_arrow`;

    return (
        <div 
        className={[styles.select, styleClass].join(' ')}
        >
            <div
            className={styles.input}
            >
                <input
                name={name}
                placeholder={placeholder}
                value={localeValue}
                onChange={(e)=>{
                    if (setLocaleValue)
                        setLocaleValue(e.target.value);
                    changeFunction(e.target.value, name);
                }}
                disabled={true}
                />
                <Image
                id={id_arrow}
                src={Arrow}
                width={10}
                height={10}
                layout="responsive"
                onClick={(e)=>{

                    //@ts-ignore
                    let arrow_style = e.target.style;
                    const flip_vertically: string = "scale(1, -1)"; 
                    
                    if (arrow_style.transform.includes(flip_vertically))
                    {
                        arrow_style.transform = '';
                        setShowOptions(false);
                    }
                    else
                    {
                        arrow_style.transform = flip_vertically;
                        setShowOptions(true);
                    }
                    
                }}
                />
            </div>
            {(showOptions)?
            <div
            className={styles.list}
            >
                {options.map((option, index)=>(option!=localeValue)?
                <span
                key={`${name}_${option}_${index}`}
                onClick={(e)=>{

                    //@ts-ignore
                    const option_text = e.target.innerHTML;
                    const arrow = document.getElementById(id_arrow);
                    console.log(arrow)
                    if (arrow !== null)
                        arrow.style.transform = '';
                    if (setLocaleValue)
                        setLocaleValue(option_text);
                    console.log(option_text)
                    changeFunction(option_text, name);
                    setShowOptions(false);
    
                }}
                >
                    {option}
                </span>
                :
                <></>
                )}
            </div>
            :
            <></>}
        </div>
    )
}

export default Select;