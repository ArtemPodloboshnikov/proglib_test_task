import { ReactNode } from "react";

export enum PreviewTypes {

    PHOTO = 'photo',
    ALBUM = 'album'
}

export type PreviewProps = {

    readonly children: ReactNode|undefined,
    readonly placeholder?: string,
    readonly type: PreviewTypes
}