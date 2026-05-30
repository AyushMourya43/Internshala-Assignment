import { useState } from "react";
import { getUniqueLocations, getUniqueProfiles } from "../utils/filters";
import "./FilterPanel.css";

const DURATION_OPTIONS = [
  { value: "1", label: "1 Month" },
  { value: "2", label: "2 Months" },
  { value: "3", label: "3 Months" },
  { value: "6", label: "6+ Months" },
];

const STIPEND_MAX = 10000;

export default function FilterPanel({ internships, filters, onChange, onClear }) {
  const profiles  = getUniqueProfiles(internships);
  const locations = getUniqueLocations(internships);
  const [stipendVal, setStipendVal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveFilters = Object.values(filters).some(Boolean);

  const handleStipend = (e) => {
    const v = Number(e.target.value);
    setStipendVal(v);
    onChange("stipend", v > 0 ? String(v) : "");
  };

  const progress = (stipendVal / STIPEND_MAX) * 100;

  return (
    <div className="filter-panel">
      <button className="filter-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <span>
          Filters {hasActiveFilters && <span className="active-indicator">(active)</span>}
        </span>
        <span className={`toggle-icon ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      <div className={`filter-body ${isOpen ? "open" : ""}`}>
        <div className="filter-header">
          <h3>Filters</h3>
          {hasActiveFilters && (
            <button className="clear-btn" onClick={() => { onClear(); setStipendVal(0); }}>
              Clear all
            </button>
          )}
        </div>

        <div className="pref-row">
          <input type="checkbox" id="pref" />
          <label htmlFor="pref">As per my <span>preferences</span></label>
        </div>

        {/* Profile */}
        <div className="filter-section">
          <div className="filter-section-title">Profile</div>
          <input
            className="filter-input"
            placeholder="e.g. Marketing"
            value={filters.profile}
            onChange={(e) => onChange("profile", e.target.value)}
            list="profile-list"
          />
          <datalist id="profile-list">
            {profiles.map((p) => <option key={p} value={p} />)}
          </datalist>
        </div>

        {/* Location */}
        <div className="filter-section">
          <div className="filter-section-title">Location</div>
          <input
            className="filter-input"
            placeholder="e.g. Delhi"
            value={filters.location}
            onChange={(e) => onChange("location", e.target.value)}
            list="location-list"
          />
          <datalist id="location-list">
            {locations.map((l) => <option key={l} value={l} />)}
          </datalist>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.remote === "true"}
                onChange={(e) => onChange("remote", e.target.checked ? "true" : "")}
              />
              Work from home
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.partTime === "true"}
                onChange={(e) => onChange("partTime", e.target.checked ? "true" : "")}
              />
              Part-time
            </label>
          </div>
        </div>

        {/* Stipend slider */}
        <div className="stipend-section">
          <div className="stipend-title">Desired minimum monthly stipend (₹)</div>
          <input
            type="range"
            className="stipend-slider"
            min={0}
            max={STIPEND_MAX}
            step={1000}
            value={stipendVal}
            onChange={handleStipend}
            style={{ "--progress": `${progress}%` }}
          />
          <div className="stipend-labels">
            <span>0</span>
            <span>2K</span>
            <span>4K</span>
            <span>6K</span>
            <span>8K</span>
            <span>10K</span>
          </div>
        </div>

        {/* Duration */}
        <div className="filter-section">
          <div className="filter-section-title">Duration</div>
          <div className="radio-group">
            {DURATION_OPTIONS.map((opt) => (
              <label key={opt.value} className="radio-label">
                <input
                  type="radio"
                  name="duration"
                  value={opt.value}
                  checked={filters.duration === opt.value}
                  onChange={(e) => onChange("duration", e.target.value)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
            {filters.duration && (
              <button className="reset-field" onClick={() => onChange("duration", "")}>Reset</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}