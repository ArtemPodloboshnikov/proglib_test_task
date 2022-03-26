import { Dispatch, DragEvent, SetStateAction, useState } from "react"

function previewFile(file: FileList, id_img: string)
{
    
    let reader = new FileReader()
    reader.onload = () => {
        let img: any = document.getElementById(id_img)
        img.src = reader.result
    }

    reader.readAsDataURL(file[0])
}

function fileListItems(files: FileList)
{
    let b = new ClipboardEvent("").clipboardData || new DataTransfer()
    for (let i = 0, len = files.length; i<len; i++) b.items.add(files[i])
    return b.files
}
const onDragStartLeaveWrap = (setDrag: Dispatch<SetStateAction<boolean>>)=>{
    return (e: DragEvent<HTMLDivElement|HTMLLabelElement>) =>{
    
        e.preventDefault();
        setDrag(true);

    }
}
const onDropWrap = (name: string, setDrag: Dispatch<SetStateAction<boolean>>, setCountFiles: Dispatch<SetStateAction<number>>)=>{

    return (e: DragEvent<HTMLDivElement|HTMLLabelElement>) =>{

        e.preventDefault();
        if (e.dataTransfer !== null)
        {
            
            let files: FileList = e.dataTransfer.files;
            console.log(files);
            const fileInput = document.getElementsByName(name);
            const fileUploader = fileInput[0] as HTMLInputElement;
            let  fileList: FileList | null = fileUploader.files;
            fileList = fileListItems(files);
            // if (idImage !== undefined)
            // {
            //     previewFile(fileList, idImage)
            // }
            setDrag(false);
            setCountFiles(files.length);
        }
    }

}

const changeInputFile = (name: string, setCountFiles: Dispatch<SetStateAction<number>>) => {

    const files = document.getElementsByName(name);
    const fileUploader = files[0] as HTMLInputElement;
    const fileList: FileList | null = fileUploader.files;
    
    if (fileList !== null && fileList.length != 0)
    {
        console.log(fileList);
        // console.log(idImage);
        // if (idImage !== undefined)
        // {
        //     previewFile(fileList, idImage)

        // }
        setCountFiles(fileList.length);
    }
}

export {onDragStartLeaveWrap, onDropWrap, changeInputFile};