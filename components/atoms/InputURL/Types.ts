import { Dispatch, ReactNode, SetStateAction } from "react"

export type InputURLProps = {

    readonly setFunction: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
    readonly setImage: Dispatch<SetStateAction<string[]>>,
    readonly name: string,
    readonly placeholder?: string,
    readonly styleClass?: string

}