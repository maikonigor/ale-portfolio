import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import useTranslation from 'next-translate/useTranslation'

export default function Projects() {
    const { t } = useTranslation("projects");
    return (
        <Layout>
            <div className={utilStyles.content}>
                <p className={`${utilStyles.headingMd} ${utilStyles.topic}`}>{t('title')}</p>

                {/* Medlog */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/medlog.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>{t('medLogTitle')} </p>
                        <div className={utilStyles.pills}>
                            <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>web</div>
                        </div>
                        <p>
                            {t('medLogtext')}
                        </p>
                    </div>
                </div>

                {/* Simbora landing page */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/simbora-lp.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Simbora - Landing Page </p>
                        <div className={utilStyles.pills}>
                            <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>web</div>
                            <div className={`${utilStyles.pill} ${utilStyles.mobilepill}`}>mobile</div>
                        </div>
                        <p>
                            {t('simboraLP')}
                        </p>
                    </div>
                </div>

                {/* SImbora delivery */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/simbora-delivery.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Simbora Delivery</p>
                        <div className={utilStyles.pills}>
                            <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>web</div>
                            <div className={`${utilStyles.pill} ${utilStyles.mobilepill}`}>mobile</div>
                        </div>
                        <p>
                            {t('simboraDelivery')}
                        </p>
                    </div>
                </div>

                {/* Good Reads */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/good-reads.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>{t('goodReadsTitle')}</p>
                        <div className={utilStyles.pills}>
                            <div className={`${utilStyles.pill} ${utilStyles.mobilepill}`}>mobile</div>
                        </div>
                        <p>
                            {t('goodReadsText')}
                        </p>
                    </div>
                </div>

                {/* MAR ABERTO */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/mar-aberto.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Mar Aberto - Landing Page </p>
                        <div className={utilStyles.pills}>
                            <div className={`${utilStyles.pill} ${utilStyles.otherpill}`}>others</div>
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