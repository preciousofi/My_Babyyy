export default function Heart({ size = "medium" }) {
  return (
    <div
      className={`heart-wrapper heart-${size}`}
      aria-hidden="true"
    >
      <div className="heart">
        <span className="heart-shine"></span>
      </div>
    </div>
  );
}