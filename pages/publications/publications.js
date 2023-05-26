import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Publications() {
    return (
        <Layout>
            <div className={utilStyles.content}>
                <p className={utilStyles.headingMd}>Publications</p>

                {/* covid */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/pub-medium.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Medium</p>
                        <a target='_blank' href='https://brasil.uxdesign.cc/14-li%C3%A7%C3%B5es-para-voc%C3%AA-que-assim-como-eu-est%C3%A1-transitando-de-j%C3%BAnior-para-pleno-em-ux-design-56668355c762'>
                            <p>

                                14 lições para você que (assim como eu) está transitando de júnior para pleno em UX Design
                            </p>
                        </a>
                    </div>
                </div>

                <div className={utilStyles.sectionColumn} >
                    <Image src='/images/pub-medium-2.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Medium </p>
                        <a target='_blank' href='https://medium.com/design-bootcamp/14-lessons-for-you-who-like-me-are-transitioning-from-junior-to-mid-level-in-ux-design-e2972a872579'>
                            <p>
                                14 lessons for you who (like me) are transitioning from Junior to Mid-level in UX Design
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </Layout >
    );
}