import { useEffect, useState } from 'react';
import { InputURLProps } from './Types';
import { getImageByURL } from '../../../services/getImageByURL';

const InputURL = ({name, placeholder, setImage, styleClass, setFunction}:InputURLProps)=>{

    const [value, setValue] = useState<string>('');
    const [typing, setTyping] = useState<boolean>(false);

    useEffect(()=>{

        async function getPicture()
        {
            
            const picture = await getImageByURL(value, {
                mode: 'no-cors',
                
            });
            setFunction(name, picture);
            const reader = new FileReader();

            reader.onload = ()=>{

                console.log(reader.result as string)
                setImage([reader.result as string])
            }

            reader.readAsDataURL(new Blob([picture]))
            
        }
        if (!typing && value)
            getPicture()

    }, [typing])

    return (

            <input
            type="url" 
            placeholder={placeholder}
            className={styleClass}
            name={name}
            value={value}
            onBlur={()=>setTyping(false)}
            onChange={(e)=>{
                
                if (!typing)
                    setTyping(true);
                setValue(e.target.value)
            }}
            />
    )
}

export default InputURL;