import Header from "../../components/Header";
import TechStack from "../../components/TechStack";
import Abilities from "../../components/Abilities";
import Card from "../../components/Card";
import Profile from "../../components/Profile";

import mobile from "../../assets/mobile.png";
import beckend from "../../assets/beckend.png";
import web from "../../assets/web.png";
import slide from "../../assets/slide-bg.jpeg";

function Home() {
  return (
    <>
      <Header/>
      <main>

        <div className="relative sm:snap-proximity snap-y md:overflow-y-scroll md:h-screen md:snap-mandatory mx-auto flex flex-col items-center">
          
          <section id="profile" className="w-screen min-h-screen snap-start mx-auto">
            <img className="w-full h-full bg-cover max-h-[260px]" src={slide}/>
            <Profile />
          </section>

          <section id="services" className="max-w-7xl w-screen min-h-screen snap-start mx-auto justify-center ">
            <h2 className="text-center  my-5 font-medium">
              <span className="text-5xl text-center text-white font-medium">My Services</span>
            </h2>
            <div className="justify-center mx-auto flex gap-2 flex-wrap">
              <Card icon={mobile} tech={'Mobile App\nDevelopment'} descriptions={['Lorem ipsum dolor sit amet', 'In vitae ultricies lacus vitae', 'Pellentesque blandit libero']} />
              <Card icon={beckend} tech={'Beckend\nDevelopment'} descriptions={['Lorem ipsum dolor sit amet', 'In vitae ultricies lacus vitae', 'Pellentesque blandit libero']} />
              <Card icon={web} tech={'Web\nDevelopment'} descriptions={['Lorem ipsum dolor sit amet', 'In vitae ultricies lacus vitae', 'Pellentesque blandit libero']}  />
            </div>
          </section>

          <section id="abilities" className="max-w-7xl w-screen min-h-screen snap-start justify-center mx-auto">
            <Abilities />
          </section>
        </div>
      </main>
    </>
  )
}

export default Home