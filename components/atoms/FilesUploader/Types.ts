import { Dispatch, SetStateAction } from "react"

export type FileUploaderProps = {

    readonly styleClass?: string,
    readonly name: string,
    readonly placeholder?: string,
    readonly multiple?: boolean,
    readonly setImage: Dispatch<SetStateAction<JSX.Element|undefined>>

}