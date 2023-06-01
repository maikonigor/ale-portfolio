import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';
const socialButtons = [

  { img: '/images/behance.png', url: 'https://behance.net/alexsandralopes' },
  { img: '/images/instagram.png', url: 'https://www.instagram.com/realalelopes' },
  { img: '/images/dribbble.png', url: 'https://dribbble.com/alexsandralopes' },
  { img: '/images/linkedin.png', url: 'https://www.linkedin.com/in/alexsandralopes/' },
  { img: '/images/email.png', url: 'mailto://alexia11lopess@gmail.com' },
  { img: '/images/medium.png', url: 'https://medium.com/@eualelopes' }
]


export default function Home() {
  const { locale } = useRouter();
  const { t } = useTranslation("home");

  return (
    <>
      <Layout home>
        <div className={homeStyles.introduction}>
          <div className={homeStyles.introductionContent}>
            <div className={homeStyles.column}>
              <img
                src='/images/profile.png'
                className={homeStyles.profile}
                alt='ale image'
              />

              <div className={homeStyles.presentationHeader}>{t('welcome')} <br /> Alexsandra Lopes</div>
              {/* <p className={homeStyles.goodToSee}>Good to see you here</p> */}
              <Link href="/resume/resume" lang={locale}>
                <div className={homeStyles.btnResume}>{t('resumeButton')}</div>
              </Link>
            </div>
            <div className={`${homeStyles.column}`}>
              <p className={homeStyles.introductionText}>
                {t('introduction')}
              </p>
              <p>{t('compliment')}</p>
              <div className={homeStyles.socialButtonsContainer}>
                <div className={homeStyles.socialButtons}>
                  {
                    socialButtons.map(item => {
                      return (
                        <a href={item.url} target='_blank'>
                          <Image src={item.img} width={28} height={28} />
                        </a>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className={`${utilStyles.content} margin-top-2`}>
          <p className={`${utilStyles.headingMd} ${utilStyles.topic}`}>{t('projectTitle')}</p>

          {/* Medlog */}
          <div className={utilStyles.sectionColumn}>
            <Image src='/images/medlog.png' width={560} height={400} className={utilStyles.columImages} />
            <div className={utilStyles.sectionColumnDetail}>
              <p className={utilStyles.headingMd}>{t('medLogTitle')} </p>
              <div className={utilStyles.pills}>
                <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>web</div>
              </div>
              <p>
                {t('medLogtext')}
              </p>
            </div>
          </div>

          {/* Simbora landing page */}
          <div className={utilStyles.sectionColumn}>
            <Image src='/images/simbora-lp.png' width={560} height={400} className={utilStyles.columImages} />
            <div className={utilStyles.sectionColumnDetail}>
              <p className={utilStyles.headingMd}>Simbora - Landing Page </p>
              <div className={utilStyles.pills}>
                <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>web</div>
                <div className={`${utilStyles.pill} ${utilStyles.mobilepill}`}>mobile</div>
              </div>
              <p>
                {t('simboraLP')}
              </p>
            </div>
          </div>

          {/* SImbora delivery */}
          <div className={utilStyles.sectionColumn}>
            <Image src='/images/simbora-delivery.png' width={560} height={400} className={utilStyles.columImages} />
            <div className={utilStyles.sectionColumnDetail}>
              <p className={utilStyles.headingMd}>Simbora Delivery</p>
              <div className={utilStyles.pills}>
                <div className={`${utilStyles.pill} ${utilStyles.webpill}`}>web</div>
                <div className={`${utilStyles.pill} ${utilStyles.mobilepill}`}>mobile</div>
              </div>
              <p>
                {t('simboraDelivery')}
              </p>
            </div>
          </div>

          {/* Good Reads */}
          <div className={utilStyles.sectionColumn}>
            <Image src='/images/good-reads.png' width={560} height={400} className={utilStyles.columImages} />
            <div className={utilStyles.sectionColumnDetail}>
              <p className={utilStyles.headingMd}>{t('goodReadsTitle')}</p>
              <div className={utilStyles.pills}>
                <div className={`${utilStyles.pill} ${utilStyles.mobilepill}`}>mobile</div>
              </div>
              <p>
                {t('goodReadsText')}
              </p>
            </div>
          </div>

          {/* Extras */}
          <div className={utilStyles.sectionColumn}>
            <Image src='/images/extras.png' width={560} height={400} className={utilStyles.columImages} />
            <div className={utilStyles.sectionColumnDetail}>
              <p className={utilStyles.headingMd}>Extras </p>
              <div className={utilStyles.pills}>
                <div className={`${utilStyles.pill} ${utilStyles.bookpill}`}>book cover</div>
              </div>
              <p>
                {t('extrasText')}
              </p>
            </div>
          </div>
        </div>


        {/* WORK */}
        <div className={utilStyles.content}>
          <p className={`${utilStyles.headingMd} ${utilStyles.topic}`}>{t('work')}</p>
          <div className={homeStyles.workImages}>
            <Image src='/images/work.png' width={843.81} height={232} className={utilStyles.columImages}></Image>
          </div>
        </div>


      </Layout>
    </>
  );
}