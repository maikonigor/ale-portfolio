import { useState } from 'react';
import style from './hamburgerStyle.module.css'

export default function HamburgerMenuIcon({className, onPress}) {

    const [isClose, setIsClose] = useState(true);

    const openClass = isClose
        ? `${style.hamburgerMenu}`
        : `${style.hamburgerMenu} ${style.change}`

        const eventHandler = ()=>{
            setIsClose(!isClose);
            onPress();
        }
    return (
        <div className={`${openClass} ${className} `} onClick={()=>eventHandler()}>
            <div className={style.bar1}></div>
            <div className={style.bar2}></div>
            <div className={style.bar3}></div>
        </div>
    )
}