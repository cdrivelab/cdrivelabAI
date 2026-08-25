const PATHS = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-4.5 3-1.5 4.5L13.5 13l1.5-4z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
      <path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="7" r="2.4" />
      <circle cx="18" cy="7" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M7.9 8.6L11 16M16.1 8.6L13 16M8.4 7h7.2" />
    </>
  ),
  loop: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v5h-5" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v4M15 3v4M5 8h14v3a7 7 0 0 1-14 0V8z" />
      <path d="M9 21v-3M15 21v-3" />
    </>
  ),
  documentSearch: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-6z" />
      <circle cx="10.5" cy="15.5" r="2.5" />
      <path d="M12.3 17.3L14 19" />
    </>
  ),
  barChart: (
    <>
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" />
      <rect x="12" y="8" width="3" height="10" />
      <rect x="17" y="5" width="3" height="13" />
    </>
  ),
  chatWave: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-4.7 7.6L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z" />
      <path d="M8 11v.01M12 11v.01M16 11v.01" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 2c2.5 2.5 4 6 4 10 0 2-1 4-1 4H9s-1-2-1-4c0-4 1.5-7.5 4-10z" />
      <path d="M9 16l-3 5M15 16l3 5M10.5 8.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  compassStar: (
    <>
      <path d="M12 2L2 22h20L12 2z" />
      <circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  cross: <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />,
  lineChart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-6 4 3 4-8" />
    </>
  ),
};

export const CATEGORY_ICONS = {
  all: "compassStar",
  strategy: "compass",
  build: "cross",
  automate: "loop",
  understand: "lineChart",
  govern: "shield",
};

export default function ServiceIcon({ name, stroke = "#1a1108", strokeWidth = 1.8, fill = "none" }) {
  const content = PATHS[name];
  if (!content) return null;
  return (
    <svg viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {content}
    </svg>
  );
}