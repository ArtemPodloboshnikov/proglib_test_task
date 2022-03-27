import { Dispatch, SetStateAction } from "react"

export type DateInputProps = {

    readonly changeFunction: ((field: string, value: any, shouldValidate?: boolean | undefined) => void),
    readonly name: string,
    readonly dataDate: string,

}

export type DatePickerProps = {

    readonly isShow: boolean,
    readonly changeFunction: (text: string) => void,
    readonly setClose: ()=>void,
    readonly currentDate: string
}