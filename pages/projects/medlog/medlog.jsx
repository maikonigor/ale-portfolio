import styles from '../../../styles/projectsUtil.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function Medlog() {
    const { t } = useTranslation("medlog");
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
                    <Image src='/images/medlog-wide.svg' alt="medlog image" width={999} height={501} className={utilStyles.columImages} />
                </center>
                <div className={`${styles.abstract}`}>
                    <div>
                        <div>{commonTranslation('status')}:</div>
                        <div className={`${styles.status} ${styles.inProgress}`}> {commonTranslation('inProgress')}</div>
                    </div>
                    <div>
                        <div>{commonTranslation('year')}:</div>
                        <div className={`${styles.status} ${styles.inProgress}`}> 2023</div>
                    </div>
                    <div>{t('abstract')}</div>
                </div>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('context')}</h1>
                <p className={`margin-top-2`}>{t('contextP1')}</p>
                <p className={`margin-top-2`}>{t('contextP2')}</p>
                <ul className={`${utilStyles.numericList} margin-top-2 margin-left-1`}>
                    <li>{t('contextL1')}</li>
                    <li>{t('contextL2')}</li>
                    <li>{t('contextL3')}</li>
                    <li>{t('contextL4')}</li>
                </ul>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('problem')}</h1>
                <p className={`margin-top-2`}>{t('problemP1')}</p>
                <p className={`margin-top-2`}>{t('problemP2')}</p>
                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/medlog-problem-1.png' alt="medlog image" width={448} height={222} className={utilStyles.columImages} />
                    <Image src='/images/medlog-problem-2.png' alt="medlog image" width={448} height={222} className={utilStyles.columImages} />
                </div>
                <p className={`margin-top-2`}>{t('problemP3')}</p>
                <p className={`margin-top-2`}>{t('problemP4')}</p>
                <ul className={`${utilStyles.numericList} margin-top-2 margin-left-1`}>
                    <li>{t('problemL1')}</li>
                    <li>{t('problemL2')}</li>
                </ul>
                <p className={`margin-top-2`}>{t('problemP5')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('process')}</h1>
                <p className={`margin-top-2`}>{t('processP1')}</p>
                <center>
                    <Image src='/images/medlog-process.png' alt="medlog image" width={1000} height={478} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('processP2')}</p>
                <ul className={`${utilStyles.numericList} margin-top-2 margin-left-1`}>
                    <li>{t('processL1')}</li>
                    <li>{t('processL2')}</li>
                    <li>{t('processL3')}</li>
                    <li>{t('processL4')}</li>
                    <li>{t('processL5')}</li>
                </ul>
                <p className={`margin-top-2`}>{t('processP3')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('results')}</h1>
                <p className={`margin-top-2`}>{t('resultsP1')}</p>
                <p className={`margin-top-2`}>{t('resultsP2')}</p>
                <p className={`margin-top-2`}>{t('resultsP3')}</p>
                <div className={`${styles.medlogColumnImages}`}>
                    <Image src='/images/medlog-result-1.png' alt="medlog image" width={448} height={222} className={utilStyles.columImages} />
                    <Image src='/images/medlog-result-2.png' alt="medlog image" width={448} height={222} className={utilStyles.columImages} />
                </div>
                <p className={`margin-top-2`}>{t('resultsP4')}</p>
                <center>
                    <Image src='/images/medlog-result-3.png' alt="medlog image" width={1000} height={537} className={utilStyles.columImages} />
                </center>
                <p className={`margin-top-2`}>{t('resultsP5')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('next')}</h1>
                <p className={`margin-top-2`}>{t('nextP1')}</p>
            </div>
        </Layout>
    );
}