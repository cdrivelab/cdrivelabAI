import { useReveal } from "../../hooks/useReveal.js";
import { useCounter } from "../../hooks/useCounter.js";
import "./common-ui.css";

function StatItem({ stat }) {
  const { ref, value } = useCounter(stat.value);
  return (
    <div className="stat-item">
      <div className="count" ref={ref}>{value}</div>
      <div className="label">{stat.label}</div>
    </div>
  );
}

export default function StatsGrid({ stats, delay = 0 }) {
  const reveal = useReveal(delay, "stats-band");
  return (
    <div
      {...reveal}
      style={{ ...reveal.style, gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
    >
      {stats.map((stat) => <StatItem stat={stat} key={stat.label} />)}
    </div>
  );
}