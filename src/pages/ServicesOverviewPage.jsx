import { useState } from "react";
import PageHero from "../components/common/PageHero.jsx";
import ServicesJourney from "../components/services/ServicesJourney.jsx";
import ServiceFilterBar from "../components/services/ServiceFilterBar.jsx";
import ServiceCard from "../components/services/ServiceCard.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { SERVICES } from "../data/services.js";
import "./services.css";

export default function ServicesOverviewPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const head = useReveal();

  return (
    <>
      <PageHero title="Services" />

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="section-head" {...head}>
          <span className="kicker">What We Do</span>
          <h2>Ten services, one accountable team.</h2>
          <p>
            From first strategy call to a governed, production system —
            strategy, automation, agents, integration, data and
            knowledge, deployed by people who stay through the handover.
          </p>
        </div>

        <ServicesJourney active={activeFilter} onSelect={setActiveFilter} />
        <ServiceFilterBar active={activeFilter} onSelect={setActiveFilter} />

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard
              service={service}
              index={i}
              key={service.id}
              isHidden={activeFilter !== "all" && service.category !== activeFilter}
            />
          ))}
        </div>
      </section>

      <div className="section" style={{ paddingTop: 0 }}>
        <CtaBand
          heading="Not sure which service fits your problem? Let's talk it through."
          buttonLabel="Start a Conversation"
        />
      </div>
    </>
  );
}