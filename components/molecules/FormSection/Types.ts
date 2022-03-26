import { ReactNode } from 'react';

export type SectionProps = {

    readonly children: ReactNode
    readonly styleClass?: string,
    readonly hint?: string, 
    readonly isImportant: boolean,
    readonly title: string
}