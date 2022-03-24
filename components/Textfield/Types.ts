import { ChangeEvent } from "react";

enum InputTypes {

    EMAIL = 'email',
    PASSWORD = 'password',
    FILE = 'file',
    DATE = 'date',
    PHONE = 'tel',
    URL = 'url',
    TEXT = 'text'
}

type Props = {

    name: string,
    placeholder: string,
    type: InputTypes,
    changeFunction: (e: string | ChangeEvent<any>) => void
}

export default Props;
export {InputTypes}