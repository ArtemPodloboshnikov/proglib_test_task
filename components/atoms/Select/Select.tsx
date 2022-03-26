import { SelectProps } from "./Types";
import styles from './styles.module.scss';
import Arrow from '/public/icons/arrow.svg';
import Image from "next/image";
import { useState, useRef } from "react";

const Select = ({name, options, placeholder, styleClass}:SelectProps)=>{

    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const id_arrow = `${name}_arrow`;

    return (
        <div 
        className={[styles.select, styleClass].join(' ')}
        >
            <div>
                <input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e)=>{

                    setValue(e.target.value);
                }}
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
            <div
            className={(showOptions)?styles.options_show:''}
            onClick={(e)=>{

                //@ts-ignore
                const option_text = e.target.innerHTML;
                const arrow = document.getElementById(id_arrow);
                console.log(arrow)
                if (arrow !== null)
                    arrow.style.transform = '';
                setValue(option_text);
                setShowOptions(false);

            }}
            >
                {options.map(option=>(option!=value)?<span>{option}</span>:<></>)}
            </div>
        </div>
    )
}

export default Select;