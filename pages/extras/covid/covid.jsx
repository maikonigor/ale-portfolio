import styles from '../../../styles/projectsUtil.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function Covid() {
    const { t } = useTranslation("covid");
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
                        <div className={`${utilStyles.pill} ${utilStyles.otherpill}`}>Other Design</div>
                    </div>
                </div>
                <center className={`margin-top-2`}>
                    <Image src='/images/covid-wide.png' alt="bauhaus image" width={1000} height={608} className={utilStyles.columImages} />
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
                </div>


                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('process')}</h1>
                <p className={`margin-top-2`}>{t('processP1')}</p>
                
                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/covid-process-1.png' alt="medlog image" width={452} height={435} className={utilStyles.columImages} />
                    <Image src='/images/covid-process-2.png' alt="medlog image" width={452} height={435} className={utilStyles.columImages} />
                </div>
                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/covid-process-3.png' alt="medlog image" width={452} height={435} className={utilStyles.columImages} />
                    <Image src='/images/covid-process-4.png' alt="medlog image" width={452} height={435} className={utilStyles.columImages} />
                </div>
                <p className={`margin-top-2`}>{t('processP2')}</p>
                <p className={`margin-top-2`}>{t('processP3')}</p>
            </div>
        </Layout>
    )
}