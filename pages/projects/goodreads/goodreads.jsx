import styles from '../../../styles/projectsUtil.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function Goodreads() {
    const { t } = useTranslation("goodreads");
    const { t: commonTranslation } = useTranslation("common");
    return (
        <Layout>
            <div className={styles.content}>
                <BackButton
                    url="/projects/projects"
                    text={commonTranslation('backProjects')}
                ></BackButton>

                <div className={`${styles.title} margin-top-3`}>
                    <h1 className={`${utilStyles.headingMd}`}>{t('title')}</h1>
                    <div className={utilStyles.pills}>
                        <div className={`${utilStyles.pill} ${utilStyles.mobilepill}`}>mobile</div>
                    </div>
                </div>
                <center className={`margin-top-2`}>
                    <Image src='/images/goodreads-wide.png' alt="simbora image" width={999} height={501} className={utilStyles.columImages} />
                </center>
                <div className={`${styles.abstract}`}>
                    <div>
                        <div>{commonTranslation('status')}:</div>
                        <div className={`${styles.status} ${styles.finished}`}> {commonTranslation('finished')}</div>
                    </div>
                    <div>
                        <div>{commonTranslation('year')}:</div>
                        <div className={`${styles.status} ${styles.finished}`}> 2022</div>
                    </div>
                    <div>{t('abstractP1')}</div>
                    <div>{t('abstractP2')}</div>

                </div>
                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('context')}</h1>
                <p className={`margin-top-2`}>{t('contextP1')}</p>
                <p className={`margin-top-2`}>{t('contextP2')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('problem')}</h1>
                <p className={`margin-top-2`}>{t('problemP1')}</p>
                <ul className={`${utilStyles.bulletList} margin-left-2 margin-top-1`}>
                    {
                        Array.from(Array(7), (e, i) => {
                            return (<li key={`probl_${i}`}>{t(`problemL${i + 1}`)}</li>)
                        })
                    }
                </ul>
                <p className={`margin-top-2`}>{t('problemP2')}</p>
                <center className={`margin-top-2`}>
                    <Image src='/images/gr-problem.png' alt="goodreads image" width={1000} height={562} className={`${utilStyles.columImages} margin-top-1`} />
                </center>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('improvement')}</h1>
                <p className={`margin-top-2`}>{t('improvementP1')}</p>
                <ul className={`${utilStyles.bulletList} margin-left-2 margin-top-1`}>
                    {
                        Array.from(Array(7), (e, i) => {
                            return (<li key={`imp_${i}`}>{t(`improvementL${i + 1}`)}</li>)
                        })
                    }
                </ul>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('result')}</h1>
                <center className={`margin-top-2`}>
                    <Image src='/images/gr-result.png' alt="goodreads image" width={1000} height={562} className={`${utilStyles.columImages} margin-top-1`} />
                    <Image src='/images/gr-result-2.png' alt="goodreads image" width={1000} height={562} className={`${utilStyles.columImages} margin-top-1`} />
                </center>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('conclusion')}</h1>
                <p className={`margin-top-2`}>{t('conclusionP1')}</p>
            </div>
        </Layout>
    );
}