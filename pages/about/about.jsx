import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'
import aboutStyles from './about.module.css'
import useTranslation from 'next-translate/useTranslation'

export default function About() {
    const {t} = useTranslation("about");
    return (
        <Layout>
            {/* ABOUT */}
            <div className={aboutStyles.content}>
                <p className={utilStyles.headingMd}>{t('title')}</p>
                <div className={aboutStyles.abouColumnParagraph}>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.firstText} >{t('p1')}</p>
                    <Image src='/images/profile-round.png' width={218} height={218}></Image>
                </div>
                <div className={aboutStyles.aboutsecondParagraph}>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.aboutsecondParagraph}>{t('p2')}</p>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.aboutsecondParagraph}>{t('p3')}</p>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.aboutsecondParagraph}>{t('p4')}</p>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.aboutsecondParagraph}>☕{t('p5')}</p>
                </div>

                <p className={utilStyles.headingMd + ' margin-top-4'}>{t('findme')}</p>
                <div className={aboutStyles.abouColumnParagraph}>
                    <div className={aboutStyles.abouColumnContactBox}>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>EMAIL</div>
                            <div className={aboutStyles.contactInfo}>alexia11lopess@gmail.com</div>
                        </div>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>{t('role')}</div>
                            <div className={aboutStyles.contactInfo}>UX/UI Designers</div>
                        </div>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>{t('phone')}</div>
                            <div className={aboutStyles.contactInfo}>(+55) 85 99902 0120</div>
                        </div>
                    </div>
                    <div className={aboutStyles.abouColumnContactBox}>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>LinkedIn</div>
                            <div className={aboutStyles.contactInfo}>
                                <a target="_blank" href='https://www.linkedin.com/in/alexsandralopes/'>linkedin.com/alexsandralopes</a>
                            </div>
                        </div>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>Behance</div>
                            <div className={aboutStyles.contactInfo}>
                                <a target="_blank" href='https://behance.net/alexsandralopes'>behance.net/alexsandralopes</a>
                            </div>
                        </div>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>Medium</div>
                            <div className={aboutStyles.contactInfo}>
                                <a target="_blank" href='https://medium.com/@eualelopes'>medium.com/@eualelopes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}