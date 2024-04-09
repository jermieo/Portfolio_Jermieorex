import AboutMe from "../Home/AboutMe";
import ContactMe from "../Home/ContactMe";
import Footer from "../Home/Footer";
import HeroSection from "../Home/HeroSection";
import MyPortfolio from "../Home/MyPortfolio";
import MySkills from "../Home/MySkills";
import Project1 from "../Home/project1";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <Project1 />
      <ContactMe />
      <Footer />
    </>
  );
}
