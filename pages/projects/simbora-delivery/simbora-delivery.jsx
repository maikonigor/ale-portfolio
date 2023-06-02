import styles from '../projects.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function SimboraLP() {
    const { t } = useTranslation("simbora-delivery");
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
                    <Image src='/images/simbora-wide.png' alt="simbora image" width={999} height={501} className={utilStyles.columImages} />
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

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('briefing')}</h1>
                <p className={`margin-top-2`}>{t('briefingP1')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('benchmarking')}</h1>
                <p className={`margin-top-2`}>{t('benchmarkingP1')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('designing')}</h1>
                <p className={`margin-top-2`}>{t('designingP1')}</p>
                <p className={`margin-top-2`}>{t('designingP2')}</p>
                <p className={`margin-top-2`}>{t('designingP3')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('client')}</h1>
                <center>
                    <Image src='/images/simbora-client-1.png' alt="simbora image" width={1000} height={562} className={`${utilStyles.columImages} margin-top-1`} />
                    <Image src='/images/simbora-client-2.png' alt="simbora image" width={1000} height={562} className={`${utilStyles.columImages} margin-top-1`} />
                    <Image src='/images/simbora-client-3.png' alt="simbora image" width={1000} height={1351} className={`${utilStyles.columImages} margin-top-1`} />
                    <Image src='/images/simbora-client-4.png' alt="simbora image" width={1000} height={581} className={`${utilStyles.columImages} margin-top-1`} />
                </center>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('deliveryman')}</h1>
                <center>
                    <Image src='/images/simbora-deliveryman.png' alt="simbora image" width={1000} height={1000} className={`${utilStyles.columImages} margin-top-1`} />
                </center>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('restaurant')}</h1>
                <center>
                    <Image src='/images/simbora-restaurant-1.png' alt="simbora image" width={1000} height={887} className={`${utilStyles.columImages} margin-top-1`} />
                    <Image src='/images/simbora-restaurant-2.png' alt="simbora image" width={1000} height={887} className={`${utilStyles.columImages} margin-top-1`} />
                </center>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('conclusion')}</h1>
                <p className={`margin-top-2`}>{t('conclusionP1')}</p>
            </div>
        </Layout>
    );
}