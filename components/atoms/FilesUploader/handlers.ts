import { Dispatch, DragEvent, ReactNode, SetStateAction } from "react"
import {FileUploaderProps} from './Types';

type PreviewFileProps = Omit<FileUploaderProps, "placeholder"|"limit"|"multiple"> & { 
    readonly setCountFiles: Dispatch<SetStateAction<number>>, 
    readonly lower_range: number,
    readonly upper_range: number,
    readonly fileListProp?: FileList,
}

const checkPhoto = (fileList: FileList, sizeFile: number, acceptableFileExtensions: string[])=>{

    let isProblemCheck = false;
    
    for (let i = 0; i < fileList?.length; i++)
    {
        let ext: string = '';
        const MB_divider = 1048576;
        console.log(fileList)
        const file_size = fileList[i].size / MB_divider;
        if (file_size > sizeFile)
        {
            isProblemCheck = true;
            console.log(file_size, "MB");
            break;
        }

        const parts_file_name = fileList[i].name.split('.');

        if (parts_file_name.length > 1) 
        {
            ext = String(parts_file_name.pop());
            if (!acceptableFileExtensions.includes(ext))
            {
                isProblemCheck = true;
                console.log("Extensions:", acceptableFileExtensions.join(', '));

                break;
            }
            
        }
        else
        {
            isProblemCheck = true;
            break;
        }
    }
    
    return isProblemCheck;
}

function previewFile({ setImage, setCountFiles, name, lower_range, upper_range, acceptableFileExtensions, fileListProp, sizeFile, setFileList}: PreviewFileProps)
{
    const files = document.getElementsByName(name);
    const fileUploader = files[0] as HTMLInputElement;
    const fileList: FileList | null = fileListProp||fileUploader.files;
    let files_in_base64: string[] = [];
    
    
    if (fileList !== null && fileList !== undefined && fileList.length != 0)
    {
        if (checkPhoto(fileList, sizeFile, acceptableFileExtensions))
        {
            alert("Не то расширение или размер слишком большой")
            return;
        }

        const ReadFiles = (index: number, files: FileList)=>{
            if (index >= files.length) 
            {
             
                if (lower_range <= index && upper_range >= index)
                {
                    
                    setImage(files_in_base64);
                    setCountFiles(fileList.length);
                    setFileList(name, fileList)

                }
               
                return
            }
            let reader = new FileReader()
            reader.onload = () => {
                files_in_base64.push(reader.result as string);
                ReadFiles(++index, files)
            }
            reader.readAsDataURL(new Blob([files[index]]))
        }
        
        if (setImage !== undefined)
        {
            ReadFiles(0, fileList)
            
        }
   
    }

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
const onDropWrap = ({setDrag, setImage, setCountFiles, name, upper_range, lower_range, acceptableFileExtensions, sizeFile, setFileList}:(PreviewFileProps&{setDrag: Dispatch<SetStateAction<boolean>>}))=>{

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
 
            previewFile({ setImage, setCountFiles, name, lower_range, upper_range, acceptableFileExtensions, sizeFile, setFileList, fileListProp: fileList })
            setDrag(false);

        }
    }

}

// const changeInputFile = (name: string, setCountFiles: Dispatch<SetStateAction<number>>, setImage: Dispatch<SetStateAction<JSX.Element>>) => {

//     const files = document.getElementsByName(name);
//     const fileUploader = files[0] as HTMLInputElement;
//     const fileList: FileList | null = fileUploader.files;
    
//     if (fileList !== null && fileList.length != 0)
//     {
//         console.log(fileList);
//         console.log(idPreview);
//         if (setImage !== undefined)
//         {
//             previewFile(fileList, setImage)

//         }
//         setCountFiles(fileList.length);
//     }
// }

export {onDragStartLeaveWrap, onDropWrap, previewFile};