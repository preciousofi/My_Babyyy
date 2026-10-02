export default function ComfortCard({
  icon,
  title,
  children,
}) {
  return (
    <div className="comfort-card">
      <div className="comfort-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>

        <p>{children}</p>
      </div>
    </div>
  );
}