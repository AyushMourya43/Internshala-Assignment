import "./SkeletonCard.css";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-main">
        <div className="skeleton-info">
          <div className="skeleton-line title" />
          <div className="skeleton-line company" />
          <div className="skeleton-meta">
            <div className="skeleton-line meta" />
            <div className="skeleton-line meta" />
            <div className="skeleton-line meta" />
          </div>
          <div className="skeleton-line footer" />
        </div>
        <div className="skeleton-side">
          <div className="skeleton-logo" />
          <div className="skeleton-line btn" />
        </div>
      </div>
    </div>
  );
}