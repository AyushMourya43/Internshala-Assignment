import { useState } from "react";
import InternshipCard from "./InternshipCard";
import SkeletonCard from "./SkeletonCard";
import "./InternshipList.css";

const SORT_OPTIONS = [
  { value: "latest",   label: "Latest" },
  { value: "stipend",  label: "Stipend (High to Low)" },
  { value: "duration", label: "Duration (Short to Long)" },
];

function sortInternships(internships, sortBy) {
  const list = [...internships];
  switch (sortBy) {
    case "stipend":
      return list.sort((a, b) => (b.stipendValue || 0) - (a.stipendValue || 0));
    case "duration":
      return list.sort((a, b) => extractMonths(a.duration) - extractMonths(b.duration));
    case "latest":
    default:
      return list;
  }
}

function extractMonths(str) {
  if (!str) return 0;
  const match = str.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export default function InternshipList({ internships, loading, error }) {
  const [sortBy, setSortBy] = useState("latest");

  const sorted = sortInternships(internships, sortBy);

  if (loading) {
    return (
      <div className="internship-list">
        <div className="list-header">
          <div>
            <div className="skeleton-line" style={{ height: 24, width: 200, borderRadius: 3, background: "#eee", marginBottom: 6 }} />
            <div className="skeleton-line" style={{ height: 14, width: 140, borderRadius: 3, background: "#eee" }} />
          </div>
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="internship-list">
      {error && (
        <div className="api-notice">⚠️ {error}</div>
      )}

      <div className="list-header">
        <div>
          <div className="list-count-title">{internships.length} Total Internships</div>
          <div className="list-subtitle">Latest Summer Internships</div>
        </div>
        <div className="sort-wrapper">
          <label className="sort-label">Sort by:</label>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="list-state">
          <p className="empty-icon">🔍</p>
          <p>No internships match your filters.</p>
          <p className="empty-sub">Try adjusting or clearing filters.</p>
        </div>
      ) : (
        <div className="cards-container">
          {sorted.map((intern) => (
            <InternshipCard key={intern.id} internship={intern} />
          ))}
        </div>
      )}
    </div>
  );
}