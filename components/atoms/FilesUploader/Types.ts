import { Dispatch, ReactNode, SetStateAction } from "react"

export type FileUploaderProps = {

    readonly styleClass?: string,
    readonly name: string,
    readonly placeholder?: string,
    readonly multiple?: boolean,
    readonly setImage: Dispatch<SetStateAction<string[]>>,
    readonly limit?: string,
    readonly acceptableFileExtensions: string[],
    readonly sizeFile: number,
    readonly setFileList: (field: string, value: any, shouldValidate?: boolean | undefined) => void
}