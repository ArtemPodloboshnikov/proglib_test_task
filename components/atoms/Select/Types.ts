export type SelectProps = {

    readonly name: string,
    readonly options: string[],
    readonly placeholder: string,
    readonly styleClass?: string,
    readonly changeFunction: (text: string, name: string)=>void
}