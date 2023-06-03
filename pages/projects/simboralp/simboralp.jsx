import styles from '../../../styles/projectsUtil.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function SimboraLP() {
    const { t } = useTranslation("simboralp");
    const { t: commonTranslation } = useTranslation("common");
    return (
        <Layout>
            <div className={styles.content}>
            <BackButton
                    url="/projects/projects"
                    text={commonTranslation('backProjects')}
                ></BackButton>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('title')}</h1>
                <center>
                    <Image src='/images/simboralp-wide.png' alt="simbora image" width={999} height={551} className={utilStyles.columImages} />
                </center>
                <div className={`${styles.abstract}`}>
                    <div>
                        <div>{commonTranslation('status')}:</div>
                        <div className={`${styles.status} ${styles.finished}`}> {commonTranslation('finished')}</div>
                    </div>
                    <div>
                        <div>{commonTranslation('year')}:</div>
                        <div className={`${styles.status} ${styles.finished}`}> 2023</div>
                    </div>
                    <div>{t('abstract')}</div>
                </div>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('context')}</h1>
                <p className={`margin-top-2`}>{t('contextp1')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('problem')}</h1>
                <p className={`margin-top-2`}>{t('problemP1')}</p>
                <p className={`margin-top-2`}>{t('problemP2')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('process')}</h1>
                <p className={`margin-top-2`}>{t('processP1')}</p>
                <p className={`margin-top-2`}>{t('processP2')}</p>
                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/slp-process-1.png' alt="medlog image" width={448} height={383} className={utilStyles.columImages} />
                    <Image src='/images/slp-process-2.png' alt="medlog image" width={448} height={383} className={utilStyles.columImages} />
                </div>
                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/slp-process-3.png' alt="medlog image" width={448} height={383} className={utilStyles.columImages} />
                    <Image src='/images/slp-process-4.png' alt="medlog image" width={448} height={383} className={utilStyles.columImages} />
                </div>
                <p className={`margin-top-2`}>{t('processP3')}</p>
                <p className={`margin-top-2`}>{t('processP4')}</p>
                <center>
                    <Image src='/images/slp-process-5.png' alt="simbora image" width={1000} height={662} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-5`}>{t('processP4')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('design')}</h1>
                <p className={`margin-top-5`}>{t('designP1')}</p>
                <center>
                    <Image src='/images/slp-design.png' alt="simbora image" width={1000} height={673} className={utilStyles.columImages} />
                </center>

                <div className={`${styles.slpbtn}`}>
                    <a href='https://simbora.app' target='_blank'>
                        {t('designbtn')}
                    </a>
                </div>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('conclusion')}</h1>
                <p className={`margin-top-2`}>{t('conclusionP1')}</p>
            </div>
        </Layout>
    );
}