import {InputProps} from '../../atoms/Textfield/Types';
import {TextareaProps} from '../../atoms/Textarea/Types';

export enum AreaTypes {

    TEXTFIELD = 'textfield',
    TEXTAREA = 'textarea'
}
export type FieldProps = {

    field: AreaTypes, 
    props: InputProps|TextareaProps
}

export type SectionProps = {

    componentsProps: FieldProps[],
    styleClass?: string,
    isImportant: boolean,
    title: string  
}