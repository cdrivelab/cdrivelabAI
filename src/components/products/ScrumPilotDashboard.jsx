import { scrumPilot } from "../../data/products.js";

/**
 * Sprint-intelligence dashboard mockup for ScrumPilot, drawn in JSX/CSS.
 * No screenshots exist in the project yet; swap this for a real image
 * when one is available.
 */
export default function ScrumPilotDashboard({ flat = false }) {
  const { dashboard } = scrumPilot;

  return (
    <div className={`sp-visual ${flat ? "sp-visual--flat" : ""}`}>
      <div className="sp-dash">
        <div className="sp-dash__top">
          <span className="sp-dash__dot" />
          <span className="sp-dash__dot" />
          <span className="sp-dash__dot" />
          <span className="sp-dash__title">{dashboard.title}</span>
        </div>

        <div className="sp-dash__body">
          <div className="sp-dash__side">
            <div className="sp-dash__side-label" />
            <div className="sp-dash__side-item is-active" />
            <div className="sp-dash__side-item" />
            <div className="sp-dash__side-item" />
            <div className="sp-dash__side-item" />
            <div className="sp-dash__side-item" />
          </div>

          <div className="sp-dash__main">
            <div className="sp-dash__heading">{dashboard.heading}</div>
            <div className="sp-dash__sub">{dashboard.sub}</div>

            <div className="sp-dash__metrics">
              {dashboard.metrics.map((metric) => (
                <div className="sp-dash__metric" key={metric.label}>
                  <small>{metric.label}</small>
                  <b>{metric.value}</b>
                </div>
              ))}
            </div>

            <div className="sp-dash__chart">
              {dashboard.bars.map((height, i) => (
                <span
                  className="sp-dash__bar"
                  key={`${height}-${i}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
