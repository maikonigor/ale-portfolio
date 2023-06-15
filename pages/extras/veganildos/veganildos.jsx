import styles from '../../../styles/projectsUtil.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function Veganildos() {
    const { t } = useTranslation("veganildos");
    const { t: commonTranslation } = useTranslation("common");
    return (
        <Layout>
            <div className={styles.content}>
                <BackButton
                    url="/extras/extras"
                    text={commonTranslation('backExtras')}
                ></BackButton>

                <div className={`${styles.title} margin-top-3`}>
                    <h1 className={`${utilStyles.headingMd}`}>{t('title')}</h1>
                    <div className={utilStyles.pills}>
                        <div className={`${utilStyles.pill} ${utilStyles.otherpill}`}>Others</div>
                    </div>
                </div>
                <center className={`margin-top-2`}>
                    <Image src='/images/veganildos-wide.png' alt="veganildos image" width={1000} height={656} className={utilStyles.columImages} />
                </center>
                <div className={`${styles.abstract}`}>
                    <div>
                        <div>{commonTranslation('status')}:</div>
                        <div className={`${styles.status} ${styles.finished}`}> {commonTranslation('finished')}</div>
                    </div>
                    <div>
                        <div>{commonTranslation('year')}:</div>
                        <div className={`${styles.status} ${styles.finished}`}> 2021</div>
                    </div>
                    <div>{t('abstract')}</div>
                </div>


                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('challenge')}</h1>
                <p className={`margin-top-2`}>{t('challengeP1')}</p>


                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('process')}</h1>
                <p className={`margin-top-2`}>{t('processP1')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/veganildos-process.png' alt="veganildos image" width={435} height={162} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('processP2')}</p>
                <p className={`margin-top-2`}>{t('processP3')}</p>

                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/veganildos-process-1.png' alt="veganildos image" width={497} height={388} className={utilStyles.columImages} />
                    <Image src='/images/veganildos-process-2.png' alt="veganildos image" width={497} height={388} className={utilStyles.columImages} />
                </div>
                <center className={`margin-top-2`}>
                    <Image src='/images/veg-process-3.png' alt="veganildos image" width={998} height={314} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('processP4')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('result')}</h1>
                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/veganildos-results-1.png' alt="veganildos image" width={290} height={205} className={utilStyles.columImages} />
                    <Image src='/images/veganildos-results-2.png' alt="veganildos image" width={290} height={205} className={utilStyles.columImages} />
                </div>
                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/veganildos-results-3.png' alt="veganildos image" width={488} height={488} className={utilStyles.columImages} />
                    <Image src='/images/veganildos-results-4.png' alt="veganildos image" width={488} height={488} className={utilStyles.columImages} />
                </div>
                <p className={`margin-top-2`}>{t('resultP1')}</p>
                
            </div>
        </Layout>
    );
}