import Field from './Field';
import styles from './styles.module.scss';
import { AreaTypes } from "./Types";
import {SectionProps} from './Types';

const FormSection = ({componentsProps, title, isImportant, styleClass=styles.inputs_block}:SectionProps) =>{

   const area = componentsProps.map((component_params)=>{
        
        switch (component_params.field)
        {
            case AreaTypes.TEXTAREA:
            case AreaTypes.TEXTFIELD:
            {

                return (

                        <Field
                        {...component_params}
                        />
                )
            }
            default: return <></>
        }

   })

   return (
        <div className={styles.area}>
            <h2>{title}<span>{(isImportant)?' *':''}</span></h2>
            <div className={styleClass}>
                {area}
            </div>
        </div>
    );
}

export default FormSection;