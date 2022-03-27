import { Dispatch, ReactNode, SetStateAction } from "react"

export type FileUploaderProps = {

    readonly styleClass?: string,
    readonly name: string,
    readonly placeholder?: string,
    readonly multiple?: boolean,
    readonly setImage: Dispatch<SetStateAction<ReactNode|undefined>>,
    readonly limit?: string
}