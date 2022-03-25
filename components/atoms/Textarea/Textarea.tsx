import {TextareaProps} from "./Types";
import styles from './style.module.scss';

const Textarea = ({name, placeholder, changeFunction}:TextareaProps)=>{

    return <textarea
           className={styles.textarea}
           name={name}
           placeholder={placeholder}
           onChange={changeFunction}
           />
}

export default Textarea;