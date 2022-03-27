import { Text } from '../../../constants/FileUploader';
import styles from './styles.module.scss';
import { FileUploaderProps } from './Types';
import Image from 'next/image';
import CheckMark from '/public/icons/check_mark.svg';
import ClosingCross from '/public/icons/closing_cross.svg';
import { onDragStartLeaveWrap, onDropWrap, previewFile } from './services';
import { ReactNode, useState } from 'react';


const FilesUploader = ({styleClass, placeholder, name, multiple, limit="1-1", setImage}:FileUploaderProps) => {
    
    const [drag, setDrag] = useState(false);
    const [countFiles, setCountFiles] = useState(0);
    const id_file_input = `${name}_file_uploader`;
    const range: string[] = limit.split('-');
    const lower_range: number = Number(range[0]);
    const upper_range: number = Number(range[1]);
    const onDrop = onDropWrap(name, setImage, setDrag, setCountFiles, lower_range, upper_range);
    const onDragStartLeave = onDragStartLeaveWrap(setDrag);

    return (
        <div className={[styles.wrap_uploader, styleClass].join(' ')}>
            <input 
            onChange={()=>{

                previewFile(setImage, setCountFiles, name, lower_range, upper_range);
                
            }} 
            name={name} 
            className={styles.file}
            id={`${id_file_input}`} 
            type='file' 
            multiple={multiple}
            />
            {placeholder? <p>{placeholder}</p> : ''}
            <div className={styles.uploader}>

                {   
                    drag? 
                    <div 
                    className={styles.drag}
                    onDragStart={onDragStartLeave}
                    onDragLeave={onDragStartLeave}
                    onDragOver={onDragStartLeave}
                    onDrop={onDrop}
                    >
                        {Text.HINT_BUTTON}
                    </div>
                    :
                    <label 
                    htmlFor={`${id_file_input}`} 
                    className={styles.drop + ' ' + ((countFiles)?styles.load:'')}
                    onDragStart={onDragStartLeave}
                    onDragLeave={onDragStartLeave}
                    onDragOver={onDragStartLeave}
                    >
                        {(drag)?
                            Text.AFTER_BUTTON
                        : 
                            (multiple)?
                                (countFiles)? 
                                    <>
                                        <Image
                                        src={CheckMark}
                                        objectFit="fill"
                                        />
                                        {countFiles + Text.POSTFIX_FILE}
                                    </>
                                    
                                :
                                    Text.BEFORE_BUTTON
                            : 
                            (countFiles)?
                                <>
                                    <Image
                                    src={CheckMark}
                                    objectFit="fill"
                                    />
                                    {Text.AFTER_BUTTON}
                                </>
                            :
                            Text.BEFORE_BUTTON
                            
                        }
                    </label>
                }
                {(countFiles)?
                    <Image
                    src={ClosingCross}
                    objectFit="fill"
                    className={styles.cross}
                    onClick={()=>{

                        setDrag(false);
                        setCountFiles(0);
                        setImage(null)
                    }}
                    />
                :
                    <></>
                }
            </div>
                {/* <label 
                htmlFor={`${id_file_input}`} 
                className={styles.drag}
                onDragStart={onDragStartLeave}
                onDragLeave={onDragStartLeave}
                onDragOver={onDragStartLeave}
                onDrop={onDrop}
                >
                    {(!drag)?
                        Text.HINT_BUTTON
                    :
                        (!multiple)?
                        Text.AFTER_TEXT
                        :
                        countFiles? countFiles + Text.POSTFIX_FILE: Text.AFTER_MULTIPLE_TEXT
                    }
                </label>
    */}
            
        </div>
    )
}

export default FilesUploader;