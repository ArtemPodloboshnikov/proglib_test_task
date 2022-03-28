import { Dispatch, SetStateAction } from "react"

export type changeFunctionType = ((field: string, value: any, shouldValidate?: boolean | undefined) => void)

export type DateInputProps = {

    readonly changeFunction: changeFunctionType,
    readonly name: string,
    readonly dataString: string,
    
}

export type DatePickerProps = {
    
    readonly isShow: boolean,
    readonly changeFunction: (text: string) => void,
    readonly setClose: ()=>void,
    readonly currentDate: string,
    readonly setMonth: Dispatch<SetStateAction<string>>,
    readonly setDay: Dispatch<SetStateAction<string>>,
    readonly setYear: Dispatch<SetStateAction<string>>,
}