import styles from './styles.module.scss';
import {SectionProps} from './Types';

const FormSection = ({children, title, isImportant, hint, styleClass=styles.inputs_block}:SectionProps) =>{

   return (
        <div className={styles.area}>
            <h5>{title}<span>{(isImportant)?' *':''}</span></h5>
            <div className={styleClass}>
                {children}
            </div>
            <span>{hint||''}</span>
        </div>
    );
}

export default FormSection;