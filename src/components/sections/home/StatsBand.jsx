import StatsGrid from "../../common/StatsGrid.jsx";
import { stats } from "../../../data/siteConfig.js";

export default function StatsBand() {
  return (
    <section className="section" id="about" style={{ paddingTop: 0 }}>
      <StatsGrid stats={stats} />
    </section>
  );
}