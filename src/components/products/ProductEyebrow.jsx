/** Muted eyebrow with a glowing accent dot — the Products page's section marker. */
export default function ProductEyebrow({ children }) {
  return (
    <span className="p-eyebrow">
      <span className="p-eyebrow__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
