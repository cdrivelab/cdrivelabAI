import "./philosophy.css";

const principles = [
  {
    title: "Outcome first",
    description: "We start with the metric you're trying to move, not the model we want to use.",
  },
  {
    title: "Built to last",
    description: "We engineer for your real systems and constraints, not a demo environment.",
  },
  {
    title: "Your team, capable",
    description: "We leave you able to run and extend what we build, not dependent on us to touch it.",
  },
];

export default function Philosophy() {
  return (
    <section className="philosophy">
      <div className="container philosophy__inner">
        <div className="philosophy__statement">
          <span className="eyebrow">Why "Real" Intelligence</span>
          <h2>Intelligence that works, not intelligence that impresses.</h2>
          <p>
            Most AI conversations end at a demo. Ours start there. We're a
            Bhubaneswar-based team that measures AI the way we'd measure any
            other business investment — by what it changes on the ground,
            for the people who have to live with it after we're gone.
          </p>
        </div>

        <ul className="philosophy__list">
          {principles.map((principle) => (
            <li key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
