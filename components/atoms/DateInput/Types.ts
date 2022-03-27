export type DateInputProps = {

    readonly changeFunction: ((field: string, value: any, shouldValidate?: boolean | undefined) => void),
    readonly name: string,
    readonly dataDate: string,

}