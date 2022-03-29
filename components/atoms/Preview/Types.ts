import { ReactNode } from "react";

export enum PreviewTypes {

    PHOTO = 'photo',
    ALBUM = 'album'
}

export type PreviewProps = {

    readonly imagesBase64: string[],
    readonly placeholder?: string,
    readonly type?: PreviewTypes
}