import { Link } from "react-router-dom";
import "./InternshipCard.css";

function getInitial(company) {
  if (!company) return "I";
  const letters = company.replace(/[^a-zA-Z]/g, "");
  return letters?.[0]?.toUpperCase() || "I";
}

export default function InternshipCard({ internship }) {
  const {
    id, title, company, location, isRemote, duration,
    stipend, applyBy, postedOn, logo,
    activelyHiring, isPPO, partTime,
  } = internship;

  return (
    <Link to={`/internship/${id}`} className="intern-card-link">
      <div className="intern-card">
        <div className="card-main">
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <p className="card-company">
              {company}
              {activelyHiring && (
                <span className="actively-hiring-badge">Actively hiring</span>
              )}
            </p>

            <div className="card-meta">
              <MetaItem icon="🏠" text={isRemote ? "Work from home" : location} />
              <MetaItem icon="💰" text={stipend} />
              <MetaItem icon="📅" text={duration} />
            </div>

            <div className="card-footer">
              {applyBy && (
                <span className="apply-by">Apply by: <strong>{applyBy}</strong></span>
              )}
              {postedOn && (
                <span className="posted-on">{postedOn}</span>
              )}
            </div>
          </div>

          <div className="card-side">
            <div className="company-logo">
              {logo
                ? <img src={logo} alt={company} onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
                : null
              }
              <span
                className="logo-placeholder"
                style={{ display: logo ? "none" : "flex" }}
              >
                {getInitial(company)}
              </span>
            </div>
            <span className="apply-btn">View details ›</span>
          </div>
        </div>

        {(isPPO || partTime) && (
          <div className="card-badges" style={{ padding: "0 16px 10px" }}>
            {isPPO && <span className="badge badge-ppo">PPO</span>}
            {partTime && <span className="badge badge-parttime">Part-time</span>}
          </div>
        )}
      </div>
    </Link>
  );
}

function MetaItem({ icon, text }) {
  return (
    <span className="meta-item">
      <span className="meta-icon">{icon}</span>
      {text}
    </span>
  );
}