import { InputTypes, InputProps } from "./Types";
import styles from './styles.module.scss';
import FilesUploader from "../../atoms/FilesUploader";

const Input = ({name, placeholder, type, changeFunction, error, subtitle='', styleClass=''}:InputProps)=>{

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