import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import { Poppins } from 'next/font/google';

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
        { title: "Resume", active: false },
        { title: "projects", active: false },
        { title: "extras", active: false },
        { title: "about", active: false },
        { title: "publications", active: false },
    ]


export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
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
            <header className={styles.header}>
                <div className={styles.nav}>
                    <Image
                        priority
                        src="/images/logo.png"
                        height={31}
                        width={54}
                        alt="logo"
                    />
                    <ul className={styles.navitems}>
                        {
                            navItems.map((item, index) => {
                                return <li className={styles.navItem}>{item.title}</li>
                            })
                        }
                        <li className={styles.contactme + ' ' + styles.navItem}>contact me</li>
                    </ul>

                </div>
            </header>
            <main className={styles.body}>{children}</main>
            <footer className={styles.footer}>
                <p>Designed in Figma. </p>
                <p>Built and Deployed with help of Makers.</p>
                <p className={styles.textBlack80}>Alexsandra Lopes • 2023</p>
            </footer>
        </div>
    );
}