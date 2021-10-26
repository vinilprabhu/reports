import { Container } from 'reactstrap';
import Head from 'next/head'
import { Style } from '../component/common/Style';
import Skill from '../component/Skill';
import Profile from '../component/Profile';
import Payload from '../payload';
import Experience from '../component/Experience';
import Project from '../component/Project';
import Education from '../component/Education';
import PersonalInfo from '../component/PersonalInfo';

export default function Home() {
  return (
    <div style={{ marginBottom: 100 }}>
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile payload={Payload.profile} />
        <Skill payload={Payload.skill} />
        <Experience payload={Payload.experience} />
        <Project payload={Payload.project} />
        <Education payload={Payload.education} />
        <PersonalInfo payload={Payload.personalInfo} />
      </Container>
    </div>
  )
}
