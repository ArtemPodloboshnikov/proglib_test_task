import { PreviewProps, PreviewTypes } from "./Types";
import Image from "next/image";
import styles from './styles.module.scss';
import DefaultPhoto from '/public/images/preview_default.jpg';
import { Children } from "react";

const Preview = ({children, type, placeholder=''}:PreviewProps)=>{
    
    const count_children = Children.count(children);
    return (
        <div className={styles.wrap_preview}>
            <p>{placeholder}</p>

            {(count_children)?

                    (count_children > 1)?
                        <div className={styles.album}>
                            {children}
                        </div>
                    :
                        children 
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