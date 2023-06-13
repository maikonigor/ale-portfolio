import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router';

export default function Extras() {
    const {t} = useTranslation("extras");
    const router = useRouter()
    const goToProject = (url) => {
        router.push(url, undefined, {locale:router.locale})
    }
    return (
        <Layout>
            <div className={utilStyles.content}>
                <p className={`${utilStyles.headingMd} ${utilStyles.topic}`}>Extras</p>

                {/* covid */}
                <div className={`${utilStyles.sectionColumn} pointer`} onClick={()=>goToProject('/extras/covid/covid')}>
                    <Image src='/images/covid19.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>{t('covid')} </p>
                        <div className={utilStyles.pills}>
                            <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>WEB</div>
                            <div className={`${utilStyles.pill} ${utilStyles.mobilepill}`}>MOBILE</div>
                        </div>
                        <p>
                            {t('covidText')}
                        </p>
                    </div>
                </div>

                {/* Bauhaus */}

                <div className={`${utilStyles.sectionColumn} pointer`} onClick={()=>goToProject('/extras/bauhaus/bauhaus')}>
                    <Image src='/images/bauhausbook.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>{t('bauhaus')} </p>
                        <div className={utilStyles.pills}>
                             <div className={`${utilStyles.pill} ${utilStyles.bookpill}`}>book cover</div>
                        </div>
                        <p>
                         {t('bauhausText')}
                        </p>
                    </div>
                </div>

                {/* Pride and prejudice */}

                <div className={`${utilStyles.sectionColumn} pointer`} onClick={()=>goToProject('/extras/pride-prejudice/pride-prejudice')}>
                    <Image src='/images/pride-prejudice.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>{t('pp')} </p>
                        <div className={utilStyles.pills}>
                             <div className={`${utilStyles.pill} ${utilStyles.bookpill}`}>book cover</div>
                        </div>
                        <p>
                        {t('ppText')}
                        </p>
                    </div>
                </div>

                {/* Veganildos */}
                <div className={`${utilStyles.sectionColumn} pointer`} onClick={()=>goToProject('/extras/veganildos/veganildos')}>
                    <Image src='/images/veganildos.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Veganildos Podcast - Logo </p>
                        <div className={utilStyles.pills}>
                            <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>web</div>
                        </div>
                        <p>
                            {t('veganildos')}
                        </p>
                    </div>
                </div>

                

            </div>
        </Layout>
    );
}