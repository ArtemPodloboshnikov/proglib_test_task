import { ChangeEvent } from "react";

export enum InputTypes {

    EMAIL = 'email',
    PASSWORD = 'password',
    FILE = 'file',
    DATE = 'date',
    PHONE = 'tel',
    URL = 'url',
    TEXT = 'text'
}

export type InputProps = {

    name: string,
    placeholder: string,
    type: InputTypes,
    changeFunction: (e: string | ChangeEvent<any>) => void
}