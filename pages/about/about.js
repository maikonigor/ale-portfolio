import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'
import aboutStyles from './about.module.css'

export default function About() {
    return (
        <Layout>
            {/* ABOUT */}
            <div className={utilStyles.content}>
                <p className={utilStyles.headingMd}>ABOUT</p>
                <div className={aboutStyles.abouColumnParagraph}>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.firstText} >
                        🌷 Before becoming a UX Designer, I did a few things: I studied Literature/English, I worked as a teacher and as a proofreader in educational publishing houses. After that, I studied Interior Design, and worked as a decoration consultant. Here I started to understand how design can solve problems and still contribute to well-being through comfort, ergonomics, usability and aesthetics.
                    </p>
                    <Image src='/images/profile-round.png' width={218} height={218}></Image>
                </div>
                <div className={aboutStyles.aboutsecondParagraph}>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.aboutsecondParagraph}>💫 And then I decided to be a UX Designer, where I could gather all my training background, and also develop other passions that I always had, such as illustration, digital design, books, writing and even teaching.</p>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.aboutsecondParagraph}>📕 Besides loving helping people to have a little more comfort, well-being and joy in life (and that goes for work and personal relationships), I love passing on my knowledge. I like to write articles and tell about things I learned in my life as a designer, to share my experiences and life lessons.</p>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.aboutsecondParagraph}>🎨 I have a lot of fun doing things that inspire me and instigate my creativity. I love creating designs that speak more of the things I love: books, coffee, wine. I love drawing people I love and/or inspire me.</p>
                    <p className={aboutStyles.aboutText + ' ' + aboutStyles.aboutsecondParagraph}>☕ But not only design lives the designer. I love singing, skating, playing Super Mario World and cooking vegan food. You can always find me with a cup of coffee and looking for a kitten to cuddle.</p>
                </div>

                <p className={utilStyles.headingMd + ' margin-top-4'}>Find me</p>
                <div className={aboutStyles.abouColumnParagraph}>
                    <div className={aboutStyles.abouColumnContactBox}>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>EMAIL</div>
                            <div className={aboutStyles.contactInfo}>alexia11lopess@gmail.com</div>
                        </div>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>ROLE</div>
                            <div className={aboutStyles.contactInfo}>UX/UI Designers</div>
                        </div>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>PHONE</div>
                            <div className={aboutStyles.contactInfo}>(+55) 85 99902 0120</div>
                        </div>
                    </div>
                    <div className={aboutStyles.abouColumnContactBox}>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>LinkedIn</div>
                            <div className={aboutStyles.contactInfo}>
                                <a target="_blank" href='https://www.linkedin.com/in/alexsandralopes/'>linkedin.com/alexsandralopes</a>
                            </div>
                        </div>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>Behance</div>
                            <div className={aboutStyles.contactInfo}>
                                <a target="_blank" href='https://behance.net/alexsandralopes'>behance.net/alexsandralopes</a>
                            </div>
                        </div>
                        <div className={aboutStyles.contactRow}>
                            <div className={aboutStyles.contactLabel}>Medium</div>
                            <div className={aboutStyles.contactInfo}>
                                <a target="_blank" href='https://medium.com/@eualelopes'>medium.com/@eualelopes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}