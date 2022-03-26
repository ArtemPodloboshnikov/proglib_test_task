import { PreviewProps } from "./Types";
import Image from "next/image";
import styles from './styles.module.scss';
import DefaultPhoto from '/public/images/preview_default.jpg';

const Preview = ({imagesSrc, placeholder=''}:PreviewProps)=>{
    
    return (
        <div className={styles.wrap_preview}>
            <p>{placeholder}</p>
            {
                (!Array.isArray(imagesSrc))?
                    <Image 
                    src={imagesSrc||DefaultPhoto} 
                    objectFit="fill"
                    />
                :    
                    <div className={styles.album}>
                        {imagesSrc.map(src=><Image src={src} objectFit="fill" />)}
                    </div>
            }
        </div>
    )
}

export default Preview;