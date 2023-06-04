import styles from '../../../styles/projectsUtil.module.css'
import utilStyles from '../../../styles/utils.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import Layout from '../../../components/layout';
import { BackButton } from '../../../components/back-button/back-button';

export default function Medlog() {
    const { t } = useTranslation("mar-aberto");
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
                        <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>Web</div>
                    </div>
                </div>
                <center className={`margin-top-2`}>
                    <Image src='/images/mar-aberto-wide.png' alt="mar aberto image" width={1000} height={547} className={utilStyles.columImages} />
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
                    <div>{t('abstract')}</div>

                </div>
                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('context')}</h1>
                <p className={`margin-top-2`}>{t('contextP1')}</p>

                <h1 className={`${utilStyles.headingMd} margin-top-3`}>{t('landingPage')}</h1>
                <p className={`margin-top-2`}>{t('landingPageP1')}</p>
                <p className={`margin-top-2`}>{t('landingPageP2')}</p>

                <center className={`margin-top-2`}>
                    <Image src='/images/mar-aberto-lp.png' alt="mar aberto image" width={1000} height={2488} className={utilStyles.columImages} />
                </center>

                <div className={`${styles.slpbtn} margin-top-1`}>
                    <a href='https://www.figma.com/proto/558RNE3YjxQ56wd3psbZxv/Portf%C3%B3lio?page-id=1201%3A1060&type=design&node-id=1201-3395&viewport=-114%2C2152%2C0.37&scaling=min-zoom&starting-point-node-id=1201%3A3395' target='_blank'>
                        {t('prototypeBtn')}
                    </a>
                </div>
            </div>
        </Layout>
    );
}