// import PageHero from "../components/sections/about/PageHero.jsx";
import AboutIntro from "../components/sections/about/AboutIntro.jsx";
import OurApproach from "../components/sections/about/OurApproach.jsx";
import CoreFeatures from "../components/sections/about/CoreFeatures.jsx";
import Analysis from "../components/sections/about/Analysis.jsx";
import WhyChooseUs from "../components/sections/about/WhyChooseUs.jsx";
import HighlightBand from "../components/sections/about/HighlightBand.jsx";
import OurTeam from "../components/sections/about/OurTeam.jsx";
import Faq from "../components/sections/home/Faq.jsx";
import Testimonials from "../components/sections/home/Testimonials.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import Mockup from "../components/common/Mockup.jsx";
import { aboutFaqs, aboutTestimonials, faqStat } from "../data/siteConfig.js";
import "./about.css";
import PageHero from "../components/common/PageHero.jsx";

function FaqVisual() {
  return (
    <>
      <Mockup />
      <div className="float-chip bottom">
        <div className="count">{faqStat.value}%</div>
        <div className="label">{faqStat.label}</div>
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <PageHero title="About Us" />
      <AboutIntro />

      <div className="section-tint">
        <OurApproach />
      </div>

      <CoreFeatures />
      <Analysis />

      <div className="section-tint">
        <WhyChooseUs />
      </div>

      <HighlightBand />

      <div className="section-tint">
        <OurTeam />
      </div>

      <Faq
        faqs={aboutFaqs}
        kicker="Frequently Asked Questions"
        title="All you need to know about AI"
        description="Answers to the most common questions about our AI services, process, and solutions."
        numbered
        visual={<FaqVisual />}
      />
      <Testimonials
        testimonials={aboutTestimonials}
        kicker="Client Testimonials"
        title="Real results shared by our trusted clients"
      />
      <div className="section" style={{ paddingTop: 0 }}>
        <CtaBand
          heading="From ideas to intelligence — view all our reviews."
          buttonLabel="View Our Reviews"
          rating={{ score: "5.0", count: "60+" }}
        />
      </div>
    </>
  );
}