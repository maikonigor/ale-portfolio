import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HamburgerMenuIcon from './hamburger-menu/hamburgerMenu';
import { useState } from 'react';
import LanguageButton from './language-button/languageButton';
import useTranslation from 'next-translate/useTranslation';

const name = 'Alê Lopes';
export const siteTitle = 'Ale lopes portfolio';

const navItems =
    [
        { title: "projects", route: '/projects/projects' },
        { title: "extras", route: '/extras/extras' },
        { title: "resume", route: '/resume/resume' },
        { title: "publications", route: '/publications/publications' },
        { title: "about", route: '/about/about' },
    ]

export default function Layout({ children }) {
    const {t} = useTranslation("common")
    const [isClose, setIsClose] = useState(true);
    const router = useRouter();


    const openClass = isClose
        ? `${styles.mobileMenu}`
        : `${styles.mobileMenu} ${styles.showMobileMenu}`

    return (
        <>
            <Head>
                <title>Ale Lopes</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
                <meta
                    name="description"
                    content="Ale Lopes designer portfolio"
                />

                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={`${openClass}`}>
                <ul className={styles.navitems}>
                    {
                        navItems.map((item, index) => {
                            return (
                                <li key={`mob_${index}`} className={styles.navItem + ' ' + (item.route == router.pathname ? styles.active : '')}>
                                    <Link href={item.route}>{t(item.title)}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href='/'>
                        <Image
                            priority
                            src="/images/logo.png"
                            height={31}
                            width={54}
                            className={styles.logo}
                            alt="logo"
                        />
                    </Link>


                    <div className={styles.menu}>
                        <ul className={styles.navitems}>
                            {
                                navItems.map((item, index) => {
                                    return (
                                        <li key={index} className={styles.navItem + ' ' + (item.route == router.pathname ? styles.active : '')}>
                                            <Link href={item.route}>{t(item.title)}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <LanguageButton className={styles.btnLang}></LanguageButton>
                    <HamburgerMenuIcon className={styles.hamburgerIcon} onPress={() => setIsClose(!isClose)} ></HamburgerMenuIcon>
                </nav>
            </header>
            <main className={styles.body}>{children}</main>
            <footer className={styles.footer}>
                <p>Designed in Figma. </p>
                <p>Developed by Maikon Soares</p>
                <p className={styles.textBlack80}>Alexsandra Lopes • 2023</p>
            </footer>
        </>
    );
}