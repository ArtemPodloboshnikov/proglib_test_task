import { InputTypes, InputProps } from "./Types";
import styles from './styles.module.scss';

const Textfield = ({name, placeholder, type, changeFunction}:InputProps)=>{

    const Input = () => {
        return <input
                name={name}
                className={styles.input}
                placeholder={placeholder}
                type={type}
                onChange={changeFunction}
                />
    }
    switch (type)
    {
        case InputTypes.TEXT:
        {
            return <Input/>

        }
        default: return <></>;
    }

}

export default Textfield;