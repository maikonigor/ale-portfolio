import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/Home.module.css'

const socialButtons = [
  { img: '/images/behance.png', url: '#' },
  { img: '/images/instagram.png', url: 'https://www.instagram.com/realalelopes' },
  { img: '/images/dribbble.png', url: '' },
  { img: '/images/linkedin.png', url: '' },
  { img: '/images/email.png', url: '' },
  { img: '/images/medium.png', url: '' }
]

export default function Home() {
  return (
    <Layout home>
      <div className={homeStyles.introduction}>
        <div className={homeStyles.introductionContent}>
          <div className={homeStyles.column}>
            <div className={homeStyles.presentationHeader}>Hi, I'm <br /> Alexsandra Lopes</div>
            <p className={homeStyles.goodToSee}>Good to see you here</p>
            <div className={homeStyles.btnResume}>Read my resume</div>
          </div>
          <div className={homeStyles.column}>
            <p>
              I’m a UX/UI designer who creates user-friendly and userful digital<br />
              products. I’m empathetic, curious, and creative. When I’m not designing,<br />
              you can find me sipping coffee, reading books, cuddling with cats, or <br />
              skating with my inline rollerblades around town. I’m also vegan, wine<br />
              lover, and a cooking fan who likes to whip up
              delicious dishes with healthy (or not) plant
              based ingredients.
            </p>
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

      {/* Projects section */}
      <div className={homeStyles.content}>
        <p className={utilStyles.headingMd}>Projects</p>

        {/* Medlog */}
        <div className={homeStyles.projectTable}>
          <Image src='/images/medlog.png' width={560} height={400} />
          <div className={homeStyles.projectDetail}>
            <p className={utilStyles.headingMd}>Hospital Multi Platfoms Login </p>
            <div className={homeStyles.pills}>
              <div className={homeStyles.webpill}>WEB</div>
            </div>
            <p>
              A platform that concentrates many different hospital contexts to each type of treatment. Here the health professionals can do just one sign in to access many platform according their health context.
            </p>
          </div>
        </div>

        {/* Simbora landing page */}
        <div className={homeStyles.projectTable}>
          <div className={homeStyles.projectDetail}>
            <p className={utilStyles.headingMd}>Simbora - Landing Page </p>
            <div className={homeStyles.pills}>
              <div className={homeStyles.webpill}>WEB</div>
              <div className={homeStyles.mobilepill}>MOBILE</div>
            </div>
            <p>
              Delivery management platform that offers order, customer, driver, and vehicle management, route optimization, real-time tracking, and dashboard bi, which works for any delivery business.
            </p>
          </div>
          <Image src='/images/simbora-lp.png' width={560} height={400} />
        </div>

        {/* SImbora delivery */}
        <div className={homeStyles.projectTable}>
          <Image src='/images/simbora-delivery.png' width={560} height={400} />
          <div className={homeStyles.projectDetail}>
            <p className={utilStyles.headingMd}>Simbora Delivery </p>
            <div className={homeStyles.pills}>
              <div className={homeStyles.webpill}>WEB</div>
              <div className={homeStyles.mobilepill}>MOBILE</div>
            </div>
            <p>
              Simbora is a food delivery service platform that connects customers with local restaurants and cuisines. It offers fast, convenient, and affordable delivery options for any taste. Simbora makes ordering food easy and enjoyable.
            </p>
          </div>
        </div>

        {/* Good Reads */}
        <div className={homeStyles.projectTable}>
          <div className={homeStyles.projectDetail}>
            <p className={utilStyles.headingMd}>GoodReads - Study Case</p>
            <div className={homeStyles.pills}>
              <div className={homeStyles.mobilepill}>MOBILE</div>
            </div>
            <p>
              This study case solves some interface, visual hierarchy and flow issues found on GoodReads app. I simplified the process of editing profile, resulting in a better user experience and interface.
            </p>
          </div>
          <Image src='/images/good-reads.png' width={560} height={400} />
        </div>

        {/* Extras */}
        <div className={homeStyles.projectTable}>
          <Image src='/images/extras.png' width={560} height={400} />
          <div className={homeStyles.projectDetail}>
            <p className={utilStyles.headingMd}>Extras </p>
            <div className={homeStyles.pills}>
              <div className={homeStyles.otherpill}>OTHER DESIGNS</div>
            </div>
            <p>
              A collection of some creative moments I had. Here you can find some things that are not connected (directly) with my role, but some other type of designs I like to do just for fun, or to challenge myself and my creativity.
            </p>
          </div>
        </div>
      </div>


      {/* WORK */}
      <div className={homeStyles.content}>
        <p className={utilStyles.headingMd}>WORK</p>
        <div className={homeStyles.workImages}>
          <Image src='/images/work.png' width={843.81} height={232}></Image>
        </div>
      </div>

      {/* ABOUT */}
      <div className={homeStyles.content}>
        <p className={utilStyles.headingMd}>ABOUT</p>
        <div className={homeStyles.abouColumnParagraph}>
          <p className={homeStyles.aboutText + ' ' + homeStyles.firstText} >
            🌷 Before becoming a UX Designer, I did a few things: I studied Literature/English, I worked as a teacher and as a proofreader in educational publishing houses. After that, I studied Interior Design, and worked as a decoration consultant. Here I started to understand how design can solve problems and still contribute to well-being through comfort, ergonomics, usability and aesthetics.
          </p>
          <Image src='/images/profile-round.png' width={218} height={218}></Image>
        </div>
        <div className={homeStyles.aboutsecondParagraph}>
          <p className={homeStyles.aboutText + ' ' + homeStyles.aboutsecondParagraph}>💫 And then I decided to be a UX Designer, where I could gather all my training background, and also develop other passions that I always had, such as illustration, digital design, books, writing and even teaching.</p>
          <p className={homeStyles.aboutText + ' ' + homeStyles.aboutsecondParagraph}>📕 Besides loving helping people to have a little more comfort, well-being and joy in life (and that goes for work and personal relationships), I love passing on my knowledge. I like to write articles and tell about things I learned in my life as a designer, to share my experiences and life lessons.</p>
        </div>
        <div className={homeStyles.abouColumnParagraph}>
          <div className={homeStyles.abouColumnContactBox}>
            <div className={homeStyles.contactRow}>
              <div className={homeStyles.contactLabel}>EMAIL</div>
              <div className={homeStyles.contactInfo}>alexia11lopess@gmail.com</div>
            </div>
            <div className={homeStyles.contactRow}>
              <div className={homeStyles.contactLabel}>ROLE</div>
              <div className={homeStyles.contactInfo}>UX/UI Designers</div>
            </div>
            <div className={homeStyles.contactRow}>
              <div className={homeStyles.contactLabel}>PHONE</div>
              <div className={homeStyles.contactInfo}>(+55) 85 99902 0120</div>
            </div>
          </div>
          <div className={homeStyles.aboutLastParagraph}>
            <p className={homeStyles.aboutText}>🎨 I have a lot of fun doing things that inspire me and instigate my creativity. I love creating designs that speak more of the things I love: books, coffee, wine. I love drawing people I love and/or inspire me.</p>
            <p className={homeStyles.aboutText}>☕ But not only design lives the designer. I love singing, skating, playing Super Mario World and cooking vegan food. You can always find me with a cup of coffee and looking for a kitten to cuddle.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}