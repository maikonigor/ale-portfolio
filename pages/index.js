import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/Home.module.css'

const socialButtons = [

  { img: '/images/behance.png', url: 'https://behance.net/alexsandralopes' },
  { img: '/images/instagram.png', url: 'https://www.instagram.com/realalelopes' },
  { img: '/images/dribbble.png', url: 'https://dribbble.com/alexsandralopes' },
  { img: '/images/linkedin.png', url: 'https://www.linkedin.com/in/alexsandralopes/' },
  { img: '/images/email.png', url: 'mailto://alexia11lopess@gmail.com' },
  { img: '/images/medium.png', url: 'https://medium.com/@eualelopes' }
]

export default function Home() {
  return (
    <Layout home>
      <div className={homeStyles.introduction}>
        <div className={homeStyles.introductionContent}>
          <div className={homeStyles.column}>
            <img
              src='/images/profile.png'
              className={homeStyles.profile}
              alt='ale image'
            />

            <div className={homeStyles.presentationHeader}>Hi, I'm <br /> Alexsandra Lopes</div>
            {/* <p className={homeStyles.goodToSee}>Good to see you here</p> */}
            <div className={homeStyles.btnResume}>Read my resume</div>
          </div>
          <div className={`${homeStyles.column}`}>
            <p className={homeStyles.introductionText}>
              I’m a UX/UI designer who creates user-friendly and userful digital
              products. I’m empathetic, curious, and creative. When I’m not designing,
              you can find me sipping coffee, reading books, cuddling with cats, or
              skating with my inline rollerblades around town. I’m also vegan, wine
              lover, and a cooking fan who likes to whip up
              delicious dishes with healthy (or not) plant
              based ingredients.
            </p>
            <p>Good to see you here</p>
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
        <p className={`${utilStyles.headingMd} ${utilStyles.topic}`}>Main Projects</p>

        {/* Medlog */}
        <div className={utilStyles.sectionColumn}>
          <Image src='/images/medlog.png' width={560} height={400} className={utilStyles.columImages} />
          <div className={utilStyles.sectionColumnDetail}>
            <p className={utilStyles.headingMd}>Hospital Multi Platfoms Login </p>
            <div className={utilStyles.pills}>
              <div className={utilStyles.webpill}>WEB</div>
            </div>
            <p>
              A platform that concentrates many different hospital contexts to each type of treatment. Here the health professionals can do just one sign in to access many platform according their health context.
            </p>
          </div>
        </div>

        {/* Simbora landing page */}
        <div className={utilStyles.sectionColumn}>
          <Image src='/images/simbora-lp.png' width={560} height={400} className={utilStyles.columImages} />
          <div className={utilStyles.sectionColumnDetail}>
            <p className={utilStyles.headingMd}>Simbora - Landing Page </p>
            <div className={utilStyles.pills}>
              <div className={utilStyles.webpill}>WEB</div>
              <div className={utilStyles.mobilepill}>MOBILE</div>
            </div>
            <p>
              Delivery management platform that offers order, customer, driver, and vehicle management, route optimization, real-time tracking, and dashboard bi, which works for any delivery business.
            </p>
          </div>
        </div>

        {/* SImbora delivery */}
        <div className={utilStyles.sectionColumn}>
          <Image src='/images/simbora-delivery.png' width={560} height={400} className={utilStyles.columImages} />
          <div className={utilStyles.sectionColumnDetail}>
            <p className={utilStyles.headingMd}>Simbora Delivery </p>
            <div className={utilStyles.pills}>
              <div className={utilStyles.webpill}>WEB</div>
              <div className={utilStyles.mobilepill}>MOBILE</div>
            </div>
            <p>
              Simbora is a food delivery service platform that connects customers with local restaurants and cuisines. It offers fast, convenient, and affordable delivery options for any taste. Simbora makes ordering food easy and enjoyable.
            </p>
          </div>
        </div>

        {/* Good Reads */}
        <div className={utilStyles.sectionColumn}>
          <Image src='/images/good-reads.png' width={560} height={400} className={utilStyles.columImages} />
          <div className={utilStyles.sectionColumnDetail}>
            <p className={utilStyles.headingMd}>GoodReads - Study Case</p>
            <div className={utilStyles.pills}>
              <div className={utilStyles.mobilepill}>MOBILE</div>
            </div>
            <p>
              This study case solves some interface, visual hierarchy and flow issues found on GoodReads app. I simplified the process of editing profile, resulting in a better user experience and interface.
            </p>
          </div>
        </div>

        {/* Extras */}
        <div className={utilStyles.sectionColumn}>
          <Image src='/images/extras.png' width={560} height={400} className={utilStyles.columImages} />
          <div className={utilStyles.sectionColumnDetail}>
            <p className={utilStyles.headingMd}>Extras </p>
            <div className={utilStyles.pills}>
              <div className={utilStyles.otherpill}>OTHER DESIGNS</div>
            </div>
            <p>
              A collection of some creative moments I had. Here you can find some things that are not connected (directly) with my role, but some other type of designs I like to do just for fun, or to challenge myself and my creativity.
            </p>
          </div>
        </div>
      </div>


      {/* WORK */}
      <div className={utilStyles.content}>
        <p className={`${utilStyles.headingMd} ${utilStyles.topic}`}>Work</p>
        <div className={homeStyles.workImages}>
          <Image src='/images/work.png' width={843.81} height={232} className={utilStyles.columImages}></Image>
        </div>
      </div>


    </Layout>
  );
}