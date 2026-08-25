import Hero from "../components/sections/home/Hero.jsx";
import LogoTicker from "../components/sections/home/LogoTicker.jsx";
import Services from "../components/sections/home/Services.jsx";
import Process from "../components/sections/home/Process.jsx";
import StatsBand from "../components/sections/home/StatsBand.jsx";
import Testimonials from "../components/sections/home/Testimonials.jsx";
import Blog from "../components/sections/home/Blog.jsx";
import VideoCta from "../components/sections/home/VideoCta.jsx";
import Faq from "../components/sections/home/Faq.jsx";
import "../styles/pages/home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Services />
      <Process />
      <StatsBand />
      <Testimonials />
      <Blog />
      <VideoCta />
      <Faq />
    </>
  );
}