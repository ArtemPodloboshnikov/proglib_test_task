import { ChangeEvent } from "react";

export type TextareaProps = {

    name: string,
    placeholder: string,
    changeFunction: (e: string | ChangeEvent<any>) => void
    
}