import { FieldProps, AreaTypes } from "./Types";
import Textfield from "../../atoms/Textfield";
import Textarea from "../../atoms/Textarea";
import { InputProps } from "../../atoms/Textfield/Types";
import { TextareaProps } from "../../atoms/Textarea/Types";

const Field = ({field, props}:FieldProps)=>{

    switch (field)
    {
        case AreaTypes.TEXTFIELD:
        {
            return <Textfield
                   {...props as InputProps}
                   />
        }
        case AreaTypes.TEXTAREA:
        {
            return <Textarea
                   {...props as TextareaProps}
                   />
        }
        default: return <></>
    }
}

export default Field;