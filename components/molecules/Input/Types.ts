import { ChangeEvent, ReactNode } from "react";

export enum InputTypes {

    EMAIL = 'email',
    PASSWORD = 'password',
    PHONE = 'tel',
    URL = 'url',
    TEXT = 'text',
    TEXTAREA = 'textarea',
    SUBMIT = 'submit'
}
export type EventFunctionType = (e: string | ChangeEvent<any>) => void
export type SetFunctionType = ((field: string, value: any, shouldValidate?: boolean | undefined) => void)

export type InputProps = {

    readonly name: string,
    readonly placeholder: string,
    readonly type: InputTypes,
    readonly changeFunction?: EventFunctionType | SetFunctionType,
    readonly multiple?: boolean,
    readonly subtitle?: string, 
    readonly styleClass?: string,
    readonly error?: {styleClass: string, message: ReactNode}
}