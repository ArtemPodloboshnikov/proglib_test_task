import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

export enum InputTypes {

    EMAIL = 'email',
    PASSWORD = 'password',
    PHONE = 'tel',
    URL = 'url',
    TEXT = 'text',
    TEXTAREA = 'textarea',
    SUBMIT = 'submit'
}

export type InputProps = {

    readonly name: string,
    readonly placeholder: string,
    readonly type: InputTypes,
    readonly changeFunction?: (e: string | ChangeEvent<any>) => void,
    readonly multiple?: boolean,
    readonly subtitle?: string, 
    readonly styleClass?: string,
    readonly setFunction?: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
    readonly setImage?: Dispatch<SetStateAction<string[]>>,
    readonly error?: {styleClass: string, message: ReactNode},
}