import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import resumeStyle from './resume.module.css'
export default function Resume() {

  let resumeURL = 'https://drive.google.com/file/d/1zjvrks4ZdD9SHdvNiQxcYKmGTXGVdH1P/view?usp=share_link';
  return (
    <Layout>
      <div className={resumeStyle.content}>
        <p className={utilStyles.headingMd}>Resume</p>

        <h1 className={`${utilStyles.headingMd} ${resumeStyle.title} margin-top-2`}>ALEXSANDRA LOPES</h1>
        <p className={`${resumeStyle.textInfo} margin-top-2`}>
          FORTALEZA, BRAZIL<br />
          +55 85 99902 0120<br />
          ALEXIA11LOPESS@GMAIL.COM<br />
          LINKEDIN.COM/ALEXSANDRALOPES<br />
        </p>

        {/* sumary */}
        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>Summary</p>
          <ul className={`${resumeStyle.list} ${resumeStyle.textInfo} margin-left-2`}>
            <li key={"1"}>Experienced UX/UI Designer with 3 years of experience and a background in Linguistics-Literature and Interior Design.</li>
            <li key={"2"}>Proficient in Figma, Adobe XD, UX Design processes, UI Design, Design Sprints and. Skilled in UX Research methods. Great communication with the Development team.</li>
            <li key={"3"}>Demonstrate good experience on communication and design negotiation with stakeholders, UX Writing, Agile Methods, Design System, ChatGPT for UX, Design documentation and Handoff.</li>
            <li key={"4"}>Strong soft skills such as organization, leadership, empathy, self-governance, helpfulness, creativity, and fast learning. Effective communication and empathy skills enhance user-centered design solutions.</li>
          </ul>
        </section>

        {/* WORK experience */}
        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>WORK EXPERIENCE</p>

          <p className={resumeStyle.workplace}>INTMED SOFTWARE</p>
          <p className={resumeStyle.textInfo}>UX/UI DESIGNER - SINCE APRIL 2022</p>
          <ul className={`${resumeStyle.list} ${resumeStyle.textInfo} margin-left-2`}>
            <li key={"5"}>Creating solutions for health-oriented web systems that improved the experience and productivity of the client's team. Creation of user flows, high fidelity prototypes, UX writing, handoffs, Design System maintenance. Experience with Agile Spotify Model.</li>
            <li key={"6"}>Presentations for clients, design training for development and design teams to develop Figma and ChatGPT skills. Research for internal projects, systems documentation for the project team, heuristic analysis and creation of internal processes.</li>
            <li key={"7"}>Results: improvement of design team processes, better organization and productivity of the Design Team, better communication design-development and reducing the time of production processes. Improvement of products based on good communication with stakeholders and the Business Team. Implement Design Processes on teams.</li>
            <li key={"8"}>Skills: Figma, Design Sprints, Kanban, Azure, ChatGPT, User Centered Design, Workshops, Communication with Stakeholders, Leadership.</li>
          </ul>

          <p className={`${resumeStyle.workplace} margin-top-2`}>iDUN SAÚDE</p>
          <p className={resumeStyle.textInfo}>UX/UI DESIGNER - JULY 2021 / APRIL 2022</p>
          <ul className={`${resumeStyle.list} ${resumeStyle.textInfo} margin-left-2`}>
            <li key={"9"}>Creation of solutions for health-oriented web and mobile applications.</li>
            <li key={"10"}>Creation of high fidelity prototypes for web and mobile, illustrations and direct communication with development.</li>
            <li key={"11"}>Skills: Figma, Adobe XD, Design Sprints, Kanban, Jira, User Centered Design.</li>
          </ul>

          <p className={`${resumeStyle.workplace} margin-top-2`}>ARGO SOLUÇÕES</p>
          <p className={resumeStyle.textInfo}>UX/UI DESIGNER - SEPTEMBER 2020  / OCTOBER 2021</p>
          <ul className={`${resumeStyle.list} ${resumeStyle.textInfo} margin-left-2`}>
            <li key={"12"}>Creation of solutions for many types of web and mobile systems, such as food delivery, landing pages, social media app and dashboards.</li>
            <li key={"13"}>Creation of high fidelity prototypes, illustrations and direct communication with Development.</li>
            <li key={"14"}>Skills: Figma, Adobe XD, Design Sprints, Kanban, Jira, User-Centered Design.</li>
          </ul>
        </section>

        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>EDUCATION</p>
          <div>
            <p className={resumeStyle.workplace}>FARIAS BRITO UNIVERSITY CENTER</p>
            <p className={resumeStyle.textInfo}>Technologist - Interior Design</p>
            <p className={resumeStyle.textInfo}>JANUARY 2017 - AUGUST 2019</p>
          </div>

          <div className='margin-top-2'>
            <p className={resumeStyle.workplace}>STATE OF CEARÁ UNIVERSITY</p>
            <p className={resumeStyle.textInfo}>Bachelor’s Degree - English Linguistics And Literature</p>
            <p className={resumeStyle.textInfo}>AUGUST 2012 - OCTOBER 2016</p>
          </div>
        </section>

        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>LANGUAGES</p>
          <div>
            <p className={resumeStyle.textInfo}>BRAZILIAN PORTUGUESE </p>
            <p className={resumeStyle.textInfo}>Native speaker</p>
          </div>
          <div className='margin-top-2' >
            <p className={resumeStyle.textInfo}>ENGLISH </p>
            <p className={resumeStyle.textInfo}>Fluent / Advanced</p>
          </div>
        </section>

        <section className='margin-top-2' >
          <p className={resumeStyle.subtitle}>PUBLICATION</p>
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
          <div className={`${resumeStyle.btnResume} margin-top-3`}>Download resume</div>
        </a>
      </div>
    </Layout>
  );
}