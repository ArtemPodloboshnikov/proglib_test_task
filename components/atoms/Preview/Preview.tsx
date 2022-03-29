import { PreviewProps, PreviewTypes } from "./Types";
import Image from "next/image";
import styles from './styles.module.scss';
import DefaultPhoto from '/public/images/preview_default.jpg';
import { Children } from "react";

const Preview = ({imagesBase64, type=PreviewTypes.ALBUM, placeholder=''}:PreviewProps)=>{
    
    const images = imagesBase64.filter(Boolean);
    return (
        <div className={styles.wrap_preview}>
            <p>{placeholder}</p>

            {(images.length)?

                    (images.length > 1)?
                        <div className={styles.album}>
                            {images.map((file, index)=><img key={`photos_${index}`} src={file as string}/>)}
                        </div>
                    :
                        images.map((file, index)=><img key={`photos_${index}`} src={file as string}/>)
 
                :
                    (type == PreviewTypes.PHOTO)?
                        <Image 
                        src={DefaultPhoto} 
                        objectFit="fill"
                        className={styles.default_image}
                        />
                    :
                        <></>
            }
        </div>
    )
}

export default Preview;