import { useReveal } from "../../hooks/useReveal.js";
import { useCounter } from "../../hooks/useCounter.js";
// import "./stats-grid.css";
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
  const reveal = useReveal(delay);
  return (
    <div className="stats-band" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }} {...reveal}>
      {stats.map((stat) => <StatItem stat={stat} key={stat.label} />)}
    </div>
  );
}