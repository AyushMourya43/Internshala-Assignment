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
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Fix: filter out empty strings, null, undefined, false
  const hasActiveFilters = stipendVal > 0 || Object.values(filters).some(
    (v) => v !== "" && v !== null && v !== undefined && v !== false
  );

  const handleStipend = (e) => {
    const v = Number(e.target.value);
    setStipendVal(v);
    onChange("stipend", v > 0 ? String(v) : "");
  };

  const handleClearAll = () => {
    onClear();
    setStipendVal(0);
    setShowMoreFilters(false);
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
                checked={filters.myCity === "true"}
                onChange={(e) => onChange("myCity", e.target.checked ? "true" : "")}
              />
              Internships in my city
            </label>
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

        {/* View more filters + Clear all on same row */}
        <div className="view-more-row">
          <button
            className="view-more-btn"
            onClick={() => setShowMoreFilters(!showMoreFilters)}
          >
            {showMoreFilters ? "View less filters ▲" : "View more filters ▼"}
          </button>
          {hasActiveFilters && (
            <button className="clear-all-fixed" onClick={handleClearAll}>
              Clear all
            </button>
          )}
        </div>

        {/* Extra filters */}
        {showMoreFilters && (
          <>
            <div className="filter-section">
              <div className="filter-section-title">Starting from (or after)</div>
              <input
                type="text"
                className="filter-input"
                placeholder="Choose date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                value={filters.startDate || ""}
                onChange={(e) => onChange("startDate", e.target.value)}
              />
            </div>

            <div className="filter-section">
              <div className="filter-section-title">Max. duration (months)</div>
              <select
                className="filter-input filter-select"
                value={filters.maxDuration || ""}
                onChange={(e) => onChange("maxDuration", e.target.value)}
              >
                <option value="" disabled hidden>Choose duration</option>
                <option value="1">1 Month</option>
                <option value="2">2 Months</option>
                <option value="3">3 Months</option>
                <option value="4">4 Months</option>
                <option value="5">5 Months</option>
                <option value="6">6 Months</option>
              </select>
            </div>

            <div className="filter-section">
              <div className="checkbox-group extra-checks">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.jobOffer === "true"}
                    onChange={(e) => onChange("jobOffer", e.target.checked ? "true" : "")}
                  />
                  <span>Internships with job offer</span>
                  <span className="filter-hint">ⓘ</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.fastResponse === "true"}
                    onChange={(e) => onChange("fastResponse", e.target.checked ? "true" : "")}
                  />
                  <span>Fast response</span>
                  <span className="filter-hint">ⓘ</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.earlyApplicant === "true"}
                    onChange={(e) => onChange("earlyApplicant", e.target.checked ? "true" : "")}
                  />
                  <span>Early applicant</span>
                  <span className="filter-hint">ⓘ</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.forWomen === "true"}
                    onChange={(e) => onChange("forWomen", e.target.checked ? "true" : "")}
                  />
                  <span>Internships for women</span>
                  <span className="filter-hint">ⓘ</span>
                </label>
              </div>
            </div>
          </>
        )}

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
          </div>
        </div>

        {/* Keyword Search */}
        <div className="filter-section keyword-section">
          <div className="keyword-title">Keyword Search</div>
          <div className="keyword-wrapper">
            <input
              className="filter-input keyword-input"
              placeholder="e.g. Design, Mumbai, Infosys"
              value={filters.keyword || ""}
              onChange={(e) => onChange("keyword", e.target.value)}
            />
            <button className="keyword-btn">🔍</button>
          </div>
        </div>

      </div>
    </div>
  );
}