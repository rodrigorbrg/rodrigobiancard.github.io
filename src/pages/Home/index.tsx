import Header from "../../components/Header";
import TechStack from "../../components/TechStack";
import Abilities from "../../components/Abilities";
import Card from "../../components/Card";

import mobile from "../../assets/mobile.png";
import beckend from "../../assets/beckend.png";
import web from "../../assets/web.png";

function Home() {

  return (
    <>
      <Header/>
      <main>
          <div className="max-w-7xl bg-base mx-auto py-6 sm:px-6 lg:px-8 flex flex-col items-center">
          <section id="techStack" className="mx-auto flex flex-col items-center">
            <TechStack/>
          </section>
          <section id="services" className="mx-auto justify-center flex gap-2 flex-wrap">
              <Card icon={mobile} tech={'Mobile App\nDevelopment'} descriptions={['Lorem ipsum dolor sit amet', 'In vitae ultricies lacus vitae', 'Pellentesque blandit libero']} />
              <Card icon={beckend} tech={'Beckend\nDevelopment'} descriptions={['Lorem ipsum dolor sit amet', 'In vitae ultricies lacus vitae', 'Pellentesque blandit libero']} />
              <Card icon={web} tech={'Web\nDevelopment'} descriptions={['Lorem ipsum dolor sit amet', 'In vitae ultricies lacus vitae', 'Pellentesque blandit libero']}  />
          </section>
          <section id="abilities" className="mx-auto flex flex-col items-center">
            <Abilities />
          </section>
          </div>
      </main>
    </>
  )
}

export default Home