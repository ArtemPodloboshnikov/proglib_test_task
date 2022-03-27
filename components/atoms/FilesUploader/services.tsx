import { Dispatch, DragEvent, ReactNode, SetStateAction } from "react"

function previewFile(setImage: Dispatch<SetStateAction<ReactNode|undefined>>, 
                    setCountFiles: Dispatch<SetStateAction<number>>, name: string,
                    lower_range: number, upper_range: number)
{
    const files = document.getElementsByName(name);
    const fileUploader = files[0] as HTMLInputElement;
    const fileList: FileList | null = fileUploader.files;
    let images_in_base64: ReactNode[] = [];
    
    
    
    if (fileList !== null && fileList.length != 0)
    {
        const ReadFiles = (index: number, files: FileList)=>{
            if (index >= files.length) 
            {
                console.log(index);
                if (lower_range <= index && upper_range >= index)
                {
                    
                    setImage(images_in_base64);
                    setCountFiles(fileList.length);

                }
               
                return
            }
            let reader = new FileReader()
            reader.onload = () => {
                images_in_base64.push(<img src={reader.result as string}/>);
                ReadFiles(++index, files)
            }
            reader.readAsDataURL(new Blob([files[index]]))
        }
        console.log(fileList);
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
const onDropWrap = (name: string, setDrag: Dispatch<SetStateAction<boolean>>, 
                    setCountFiles: Dispatch<SetStateAction<number>>, lower_range: number, upper_range: number)=>{

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
            console.log((lower_range <= files.length && upper_range >= files.length))
            if (lower_range <= files.length && upper_range >= files.length)
                setCountFiles(files.length);
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