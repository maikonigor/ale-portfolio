import Link from 'next/link'
import styles from './backButton.module.css'
import Image from 'next/image'
export function BackButton({ url, text, className }) {
    return (

        <Link href={url}>
            <div className={`${styles.backLink} ${className}`}>
                <Image className={styles.backIcon} src="/icons/arrow-left.svg" width={12} height={12}></Image>
                <span className='margin-left-1'>{text}</span>
            </div>
        </Link>
    )
}