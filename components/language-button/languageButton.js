import { useState } from 'react'
import style from './languageButton.module.css'
import Image from 'next/image';
export default function LanguageButton({ className, onPress }) {
    const [language, setLanguage] = useState(false);

    const [label,labelClass,imgSide,backgroundColor, img ] = 
    language
    ? ['ptbr',`${style.ptbr}`, `${style.imgLeft}`, `${style.backgroundColorPt}`, 'br-flag.png']
    : ['eng', `${style.eng}`, `${style.imgRight}`, `${style.backgroundColorEng}`, 'en-flag.png']

    const handleClick = ()=>{
        setLanguage(!language);
        onPress;
    }

    return (
        <>
            <div className={`${style.round} ${backgroundColor} ${className}`} onClick={()=>handleClick()}>
                <label className={`${style.label} ${labelClass}`}>{label}</label>
                <Image
                    src={`/images/${img}`}
                    width={32}
                    height={32}
                    className={style.imgLeft}></Image>
            </div>
        </>
    );
}