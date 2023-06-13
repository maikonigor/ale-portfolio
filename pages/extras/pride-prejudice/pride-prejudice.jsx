import styles from '../../../styles/projectsUtil.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function PridePrejudice() {
    const { t } = useTranslation("pride-prejudice");
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
                        <div className={`${utilStyles.pill} ${utilStyles.bookpill}`}>Book cover</div>
                    </div>
                </div>
                <center className={`margin-top-2`}>
                    <Image src='/images/pride-prejudice-wide.png' alt="bauhaus image" width={1000} height={608} className={utilStyles.columImages} />
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


                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('process')}</h1>
                <p className={`margin-top-2`}>{t('processP1')}</p>
                <p className={`margin-top-2`}>{t('processP2')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/pride-prejudice-process.png' alt="medlog image" width={1000} height={752} className={utilStyles.columImages} />
                </center>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('result')}</h1>
                <center className={`margin-top-2`}>
                    <Image src='/images/pride-prejudice-result.png' alt="pride prejudice result" width={999} height={625} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('resultP1')}</p>
                <p className={`margin-top-2`}>{t('resultP2')}</p>
            </div>
        </Layout>
    )
}