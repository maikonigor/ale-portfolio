import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import useTranslation from 'next-translate/useTranslation'

export default function Extras() {
    const {t} = useTranslation("extras");
    return (
        <Layout>
            <div className={utilStyles.content}>
                <p className={`${utilStyles.headingMd} ${utilStyles.topic}`}>Extras</p>

                {/* covid */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/covid19.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>{t('covid')} </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.webpill}>WEB</div>
                            <div className={utilStyles.mobilepill}>MOBILE</div>
                        </div>
                        <p>
                            {t('covidText')}
                        </p>
                    </div>
                </div>

                {/* Bauhaus */}

                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/bauhausbook.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>{t('bauhaus')} </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.otherpill}>OTHER DESIGNS</div>
                        </div>
                        <p>
                         {t('bauhausText')}
                        </p>
                    </div>
                </div>

                {/* Pride and prejudice */}

                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/pride-prejudice.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>{t('pp')} </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.otherpill}>OTHER DESIGNS</div>
                        </div>
                        <p>
                        {t('ppText')}
                        </p>
                    </div>
                </div>

                {/* Veganildos */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/veganildos.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Veganildos Podcast - Logo </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.webpill}>WEB</div>
                        </div>
                        <p>
                            {t('veganildos')}
                        </p>
                    </div>
                </div>

                {/* MAR ABERTO */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/mar-aberto.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Mar Aberto - Landing Page </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.otherpill}>OTHER DESIGNS</div>
                        </div>
                        <p>
                         {t('marAberto')}
                        </p>
                    </div>
                </div>

            </div>
        </Layout>
    );
}