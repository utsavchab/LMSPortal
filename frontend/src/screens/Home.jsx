import React from 'react';
import Banner from '../components/Banner';
import Mission from '../components/Mission';
import Features from '../components/Features';
import Footer from '../components/Footer';
import TeacherTabs from '../components/TeacherTabs';

function Home() {
  return (
    <div>
      {/* <TeacherTabs/> */}
      {/* {teacherInfo ? (<TeacherTabs/>) : ("")} */}
      <Banner/>
      <Mission/>
      <Features/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
