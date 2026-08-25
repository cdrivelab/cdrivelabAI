import { useCounter } from "../../hooks/useCounter.js";
import "./ring-stat.css";

export default function RingStat({ value, suffix = "%", label, size = 120 }) {
  const { ref, value: counted } = useCounter(value);
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(counted, value) / 100);

  return (
    <div className="ring-stat" style={{ width: size, height: size }} ref={ref}>
      <svg viewBox={`0 0 ${size} ${size}`} className="ring-stat__svg">
        <circle cx={size / 2} cy={size / 2} r={radius} className="ring-stat__track" />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          className="ring-stat__fill"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="ring-stat__center">
        <span className="ring-stat__value">{counted}{suffix}</span>
        {label && <span className="ring-stat__label">{label}</span>}
      </div>
    </div>
  );
}