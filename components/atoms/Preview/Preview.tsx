import { PreviewProps } from "./Types";
import Image from "next/image";
import styles from './styles.module.scss';
import DefaultPhoto from '/public/images/preview_default.jpg';

const Preview = ({children, id, placeholder=''}:PreviewProps)=>{
    
    return (
        <div className={styles.wrap_preview}>
            <p>{placeholder}</p>

            {
                children 
            
                || 
                    <Image 
                    src={DefaultPhoto} 
                    objectFit="fill"
                    id={id}
                    className={styles.default_image}
                    />
            }
        </div>
    )
}

export default Preview;