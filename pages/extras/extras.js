import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Extras() {
    return (
        <Layout>
            <div className={utilStyles.content}>
                <p className={utilStyles.headingMd}>Extras</p>

                {/* covid */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/covid19.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Covid-19 - Ilustrations </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.webpill}>WEB</div>
                            <div className={utilStyles.mobilepill}>MOBILE</div>
                        </div>
                        <p>
                            Simbora is a food delivery service platform that connects customers with local restaurants and cuisines. It offers fast, convenient,
                            and affordable delivery options for any taste. Simbora makes ordering food easy and enjoyable.
                        </p>
                    </div>
                </div>

                {/* Bauhaus */}

                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/bauhausbook.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>ABC da Bauhaus - Book Cover </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.otherpill}>OTHER DESIGNS</div>
                        </div>
                        <p>
                        This study case solves some interface, visual hierarchy and flow issues found on GoodReads app. I simplified the process of editing profile, resulting in a better user experience and interface.
                        </p>
                    </div>
                </div>

                {/* Pride and prejudice */}

                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/pride-prejudice.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Pride and Prejudice - Book cover </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.otherpill}>OTHER DESIGNS</div>
                        </div>
                        <p>
                        Delivery management platform that offers order, customer, driver, and vehicle management, route optimization, real-time tracking, and dashboard bi, which works for any delivery business.
                        </p>
                    </div>
                </div>

                {/* Veganildos */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/veganildos.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Veganildos Podcast - Logo </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.webpill}>WEB</div>
                        </div>
                        <p>
                        This study case solves some interface, visual hierarchy and flow issues found on GoodReads app. I simplified the process of editing profile, resulting in a better user experience and interface.
                        </p>
                    </div>
                </div>

                {/* MAR ABERTO */}
                <div className={utilStyles.sectionColumn}>
                    <Image src='/images/mar-aberto.png' width={560} height={400} className={utilStyles.columImages} />
                    <div className={utilStyles.sectionColumnDetail}>
                        <p className={utilStyles.headingMd}>Mar Aberto - Landing Page </p>
                        <div className={utilStyles.pills}>
                            <div className={utilStyles.otherpill}>OTHER DESIGNS</div>
                        </div>
                        <p>
                        A collection of some creative moments I had. Here you can find some things that are not connected (directly) with my role, but some other type of designs I like to do just for fun, or to challenge myself and my creativity.
                        </p>
                    </div>
                </div>

            </div>
        </Layout>
    );
}