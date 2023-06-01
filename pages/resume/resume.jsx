import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import resumeStyle from './resume.module.css'
import useTranslation from 'next-translate/useTranslation';

export default function Resume() {

  let resumeURL = 'https://drive.google.com/file/d/1zjvrks4ZdD9SHdvNiQxcYKmGTXGVdH1P/view?usp=share_link';
  const {t} = useTranslation("resume")
  return (
    <Layout>
      <div className={resumeStyle.content}>
        <p className={utilStyles.headingMd}>{t('title')}</p>

        <h1 className={`${utilStyles.headingMd} ${resumeStyle.title} margin-top-2`}>ALEXSANDRA LOPES</h1>
        <p className={`${resumeStyle.textInfo} margin-top-2`}>
        {t('location')}<br />
          +55 85 99902 0120<br />
          ALEXIA11LOPESS@GMAIL.COM<br />
          LINKEDIN.COM/ALEXSANDRALOPES<br />
        </p>

        {/* summary */}
        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>{t('summary')}</p>
          <ul className={`${resumeStyle.list} ${resumeStyle.textInfo} margin-left-2`}>
            <li key={"1"}>{t('summaryP1')}</li>
            <li key={"2"}>{t('summaryP2')}</li>
            <li key={"3"}>{t('summaryP3')}</li>
            <li key={"4"}>{t('summaryP4')}</li>
          </ul>
        </section>

        {/* WORK experience */}
        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>{t('experience')}</p>

          <p className={resumeStyle.workplace}>INTMED SOFTWARE</p>
          <p className={resumeStyle.textInfo}>{t('intmedRole')}</p>
          <ul className={`${resumeStyle.list} ${resumeStyle.textInfo} margin-left-2`}>
            <li key={"5"}>{t('intimed1')}</li>
            <li key={"6"}>{t('intimed2')}</li>
            <li key={"7"}>{t('intimed3')}</li>
            <li key={"8"}>{t('intimed4')}</li>
          </ul>

          <p className={`${resumeStyle.workplace} margin-top-2`}>iDUN SAÚDE</p>
          <p className={resumeStyle.textInfo}>{t('idunRole')}</p>
          <ul className={`${resumeStyle.list} ${resumeStyle.textInfo} margin-left-2`}>
            <li key={"9"}>{t('idun1')}</li>
            <li key={"10"}>{t('idun2')}</li>
            <li key={"11"}>{t('idun3')}</li>
          </ul>

          <p className={`${resumeStyle.workplace} margin-top-2`}>ARGO SOLUÇÕES</p>
          <p className={resumeStyle.textInfo}>{t('argoRole')}</p>
          <ul className={`${resumeStyle.list} ${resumeStyle.textInfo} margin-left-2`}>
            <li key={"12"}>{t('argo1')}</li>
            <li key={"13"}>{t('argo2')}</li>
            <li key={"14"}>{t('argo3')}</li>
          </ul>
        </section>

        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>{t('education')}</p>
          <div>
            <p className={resumeStyle.workplace}>{t('fariasBrito')}</p>
            <p className={resumeStyle.textInfo}>{t('fbCourse')}</p>
            <p className={resumeStyle.textInfo}>{t('fbPeriod')}</p>
          </div>

          <div className='margin-top-2'>
            <p className={resumeStyle.workplace}>{t('uece')}</p>
            <p className={resumeStyle.textInfo}>{t('ueceCourse')}</p>
            <p className={resumeStyle.textInfo}>{t('uecePeriod')}</p>
          </div>
        </section>

        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>{t('languages')}</p>
          <div>
            <p className={resumeStyle.textInfo}>{t('brLang')}</p>
            <p className={resumeStyle.textInfo}>{t('brLevel')}</p>
          </div>
          <div className='margin-top-2' >
            <p className={resumeStyle.textInfo}>{t('enLang')}</p>
            <p className={resumeStyle.textInfo}>{t('enLevel')}</p>
          </div>
        </section>

        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>{t('publication')}</p>
          <div>
            <p className={resumeStyle.textInfo}>14 lessons for you who (like me) are transitioning from Junior to Mid-level in UX Design </p>
            <p className={resumeStyle.textInfo}>Bootcamp, 2023 - MEDIUM</p>
          </div>
        </section>

        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>SOCIAL</p>
          <div>
            <p className={resumeStyle.textInfo}><a target="_blank" href='https://behance.net/alexsandralopes'>behance.net/alexsandralopes</a> </p>
            <p className={resumeStyle.textInfo}><a target="_blank" href='https://www.linkedin.com/in/alexsandralopes/'>linkedin.com/alexsandralopes</a></p>
            <p className={resumeStyle.textInfo}><a target="_blank" href='https://instagram.com/realalelopes'>instagram.com/realalelopes</a></p>
          </div>
        </section>

        <a href={resumeURL} target='_blank'>
          <div className={`${resumeStyle.btnResume} margin-top-3`}>{t('downloadResume')}</div>
        </a>
      </div>
    </Layout>
  );
}