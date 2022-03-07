import Sectiondivider from './Sectiondivider';

import ProjectOneNavbar from './Project 1/components/Navbar';
import ProjectOneMain from './Project 1/components/Main';

import BusinessCard from './Project 2/components/BusinessCard';

import Navbar from './Project 3/components/Navbar';
import Hero from './Project 3/components/Hero';
import ProjectThreeCard from './Project 3/components/Card';
import ProjectThreeData from './Project 3/data';

import ProjectFourHeader from './Project 4/components/Header';
import ProjectFourCard from './Project 4/components/Card';
import ProjectFourData from './Project 4/data';

import ProjectFiveHeader from './components/Header';
import ProjectFiveForm from './components/Meme';

function App() {
  const cards = ProjectThreeData.map((item) => <ProjectThreeCard key={item.id} {...item} />);

  const projectFourCards = ProjectFourData.map((item, index) => <ProjectFourCard key={index} {...item} />);

  return (
    <div className="container">
      <Sectiondivider section="1" />
      <ProjectOneNavbar />
      <ProjectOneMain />
      <Sectiondivider section="2" />
      <BusinessCard />
      <Sectiondivider section="3" />
      <Navbar />
      <Hero />
      <section style={{ display: 'flex', flexWrap: 'nowrap', gap: '20px', overflowX: 'auto' }} className="card-list">
        {cards}
      </section>
      <Sectiondivider section="4" />
      <ProjectFourHeader />
      {projectFourCards}
      <Sectiondivider section="5" />
      <ProjectFiveHeader />
      <ProjectFiveForm />
    </div>
  );
}

export default App;
