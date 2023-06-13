import styles from '../../../styles/projectsUtil.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function Bauhaus() {
    const { t } = useTranslation("bauhaus");
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
                    <Image src='/images/bauhaus-wide.png' alt="bauhaus image" width={1000} height={656} className={utilStyles.columImages} />
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


                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('context')}</h1>
                <p className={`margin-top-2`}>{t('contextP1')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/bauhaus-context.png' alt="medlog image" width={1000} height={1311} className={utilStyles.columImages} />
                </center>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('process')}</h1>
                <p className={`margin-top-2`}>{t('processP1')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/bauhaus-process.png' alt="medlog image" width={1000} height={696} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('processP2')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/bauhaus-process-1.png' alt="medlog image" width={890} height={800} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('processP3')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('result')}</h1>
                <p className={`margin-top-2`}>{t('resultP1')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/bauhaus-result.png' alt="medlog image" width={1000} height={198} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('resultP2')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/bauhaus-result-1.png' alt="medlog image" width={957} height={298} className={utilStyles.columImages} />
                </center>
                <center className={`margin-top-2`}>
                    <Image src='/images/bauhaus-result-2.png' alt="medlog image" width={598} height={130} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('resultP3')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/bauhaus-result-3.png' alt="medlog image" width={1000} height={605} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('resultP4')}</p>
                <p className={`margin-top-2`}>{t('resultP5')}</p>
            </div>
        </Layout>
    );
}