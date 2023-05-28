import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HamburgerMenuIcon from './hamburger-menu/hamburgerMenu';
import { useState } from 'react';

const poppins = Poppins(
    {
        weight: '400',
        subsets: ['latin'],
    }
);
const name = 'Alê Lopes';
export const siteTitle = 'Ale lopes portfolio';




const navItems =
    [
        { title: "Home", route: '/' },
        { title: "Resume", route: '/resume/resume' },
        { title: "projects", route: '#' },
        { title: "extras", route: '/extras/extras' },
        { title: "about", route: '/about/about' },
        { title: "publications", route: '/publications/publications' },
    ]


export default function Layout({ children, page }) {
    const [isClose, setIsClose] = useState(true);

    const openClass = isClose
        ? `${styles.mobileMenu}`
        : `${styles.mobileMenu} ${styles.showMobileMenu}`

    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Ale Lopes</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
                <meta
                    name="description"
                    content="Ale Lopes designer portfolio"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={`${openClass}`}>
                <ul className={styles.navitems}>
                    {
                        navItems.map((item, index) => {
                            return (
                                <li className={styles.navItem + ' ' + (item.route == router.pathname ? styles.active : '')}>
                                    <Link href={item.route}>{item.title}</Link>
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

                    <HamburgerMenuIcon className={styles.hamburgerIcon} onPress={() => setIsClose(!isClose)} ></HamburgerMenuIcon>
                    
                    <div className={styles.menu}>
                        <ul className={styles.navitems}>
                            {
                                navItems.map((item, index) => {
                                    return (
                                        <li className={styles.navItem + ' ' + (item.route == router.pathname ? styles.active : '')}>
                                            <Link href={item.route}>{item.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </nav>
            </header>
            <main className={styles.body}>{children}</main>
            <footer className={styles.footer}>
                <p>Designed in Figma. </p>
                <p>Developed by Maikon Soares</p>
                <p className={styles.textBlack80}>Alexsandra Lopes • 2023</p>
            </footer>
        </div>
    );
}