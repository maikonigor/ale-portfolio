import { useState } from 'react'
import style from './languageButton.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function LanguageButton({ className, onPress }) {
    const router = useRouter();
    const [language, setLanguage] = useState(router.locale=='pt-br');

    const [languageLabel, label,labelClass,backgroundColor, img ] = 
    language
    ? ['pt-br','ptbr',`${style.ptbr}`, `${style.backgroundColorPt}`, 'br-flag.png']
    : ['en', 'eng', `${style.eng}`, `${style.backgroundColorEng}`, 'en-flag.png']

    const handleClick = ()=>{
        setLanguage(!language);
        const l = router.locale=='pt-br' ? 'en' : 'pt-br';
        router.push(router.asPath, undefined, {locale:l})
    }

    return (
        <>
            <div className={`${style.round} ${backgroundColor} ${className}`} onClick={()=>handleClick()}>
                <label className={`${style.label} ${labelClass}`}>{label}</label>
                <Image
                    src={`/images/${img}`}
                    width={32}
                    height={32}
                    alt={img}
                    className={style.imgLeft}></Image>
            </div>
        </>
    );
}