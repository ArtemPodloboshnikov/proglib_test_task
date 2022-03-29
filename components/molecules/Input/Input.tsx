import { InputTypes, InputProps } from "./Types";
import styles from './styles.module.scss';
import InputURL from "../../atoms/InputURL";

const Input = ({name, placeholder, type, changeFunction, error, subtitle='', styleClass='', setFunction, setImage}:InputProps)=>{

    let input_params = {

        name: name,
        placeholder: placeholder,
        type: type,
        onChange: changeFunction,
        className: [styleClass, error?.styleClass].join(' ')
    }

    switch (type)
    {
        case InputTypes.PHONE:
        {
            return (

                <>
                    <div
                    className={styles.phone}
                    >
                        <span>+7</span>
                        <input
                        {...input_params}
                        />
                    </div>
                    {error?.message}
                </>
            )
        }
        case InputTypes.EMAIL:
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
            if (setFunction && setImage)
            {
                return (
                    <div className={styles.wrap_url}>
                        <p>{subtitle}</p>
                        <InputURL
                        styleClass={input_params.className}
                        placeholder={placeholder}
                        name={name}
                        setFunction={setFunction}
                        setImage={setImage}
                        />
                        {error?.message}
                    </div>
                )

            }
            return <></>
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