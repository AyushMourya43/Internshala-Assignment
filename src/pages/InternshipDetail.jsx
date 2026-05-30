import { useParams, Link } from "react-router-dom";
import "./InternshipDetail.css";

function getInitial(company) {
  if (!company) return "I";
  const letters = company.replace(/[^a-zA-Z]/g, "");
  return letters?.[0]?.toUpperCase() || "I";
}

export default function InternshipDetail({ internships }) {
  const { id } = useParams();
  const internship = internships.find((i) => String(i.id) === String(id));

  if (!internship) {
    return (
      <div className="detail-not-found">
        <h2>Internship not found</h2>
        <Link to="/" className="back-btn">← Back to listings</Link>
      </div>
    );
  }

  const {
    title, company, location, isRemote, duration,
    stipend, applyBy, postedOn, logo,
    activelyHiring, isPPO, partTime, profile,
  } = internship;

  return (
    <div className="detail-page">
      <div className="detail-container">

        <Link to="/" className="back-link">← Back to all internships</Link>

        <div className="detail-header-card">
          <div className="detail-header-left">
            <h1 className="detail-title">{title}</h1>
            <p className="detail-company">{company}</p>

            {activelyHiring && (
              <span className="actively-hiring-badge">Actively hiring</span>
            )}

            <div className="detail-badges">
              {isPPO && <span className="badge badge-ppo">PPO</span>}
              {partTime && <span className="badge badge-parttime">Part-time</span>}
            </div>
          </div>

          <div className="detail-header-right">
            <div className="detail-logo">
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
          </div>
        </div>

        <div className="detail-info-grid">
          <InfoBox icon="🏠" label="Location" value={isRemote ? "Work from home" : location} />
          <InfoBox icon="💰" label="Stipend" value={stipend} />
          <InfoBox icon="📅" label="Duration" value={duration} />
          {applyBy && <InfoBox icon="⏰" label="Apply by" value={applyBy} />}
          {profile && <InfoBox icon="💼" label="Profile" value={profile} />}
          {postedOn && <InfoBox icon="🕐" label="Posted" value={postedOn} />}
        </div>

        <div className="detail-section">
          <h2 className="detail-section-title">About the internship</h2>
          <p className="detail-section-body">
            This is a <strong>{title}</strong> internship at <strong>{company}</strong>.
            The role is {isRemote ? "fully remote (work from home)" : `based in ${location}`} and
            runs for <strong>{duration}</strong> with a stipend of <strong>{stipend}</strong>.
            {isPPO && " This internship comes with a Pre-Placement Offer (PPO) opportunity."}
            {partTime && " This is a part-time position."}
          </p>
        </div>

        <div className="detail-section">
          <h2 className="detail-section-title">Skills required</h2>
          <div className="detail-skills">
            {getSkills(title).map((skill) => (
              <span key={skill} className="skill-chip">{skill}</span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h2 className="detail-section-title">Who can apply</h2>
          <ul className="detail-list">
            <li>Only those candidates can apply who are available for full time internship</li>
            <li>Can start the internship between the given dates</li>
            <li>Are available for the duration of {duration}</li>
            <li>Have relevant skills and interests</li>
          </ul>
        </div>

        <div className="detail-apply-bar">
          <div className="detail-apply-info">
            {applyBy && <span>Apply by <strong>{applyBy}</strong></span>}
          </div>
          <button className="detail-apply-btn">Apply now</button>
        </div>

      </div>
    </div>
  );
}

function InfoBox({ icon, label, value }) {
  return (
    <div className="info-box">
      <span className="info-icon">{icon}</span>
      <div>
        <div className="info-label">{label}</div>
        <div className="info-value">{value}</div>
      </div>
    </div>
  );
}

function getSkills(title) {
  const skillMap = {
    "Web Development":      ["HTML", "CSS", "JavaScript", "React"],
    "Data Science":         ["Python", "Pandas", "NumPy", "SQL"],
    "UI/UX Design":         ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    "Marketing":            ["SEO", "Social Media", "Google Analytics", "Canva"],
    "Machine Learning":     ["Python", "TensorFlow", "Scikit-learn", "Deep Learning"],
    "Content Writing":      ["Research", "SEO Writing", "Editing", "WordPress"],
    "Android Development":  ["Java", "Kotlin", "Android Studio", "Firebase"],
    "Finance":              ["Excel", "Financial Modeling", "Tally", "GST"],
    "Graphic Design":       ["Photoshop", "Illustrator", "CorelDraw", "Canva"],
    "Backend Development":  ["Node.js", "Express", "MongoDB", "REST APIs"],
  };
  return skillMap[title] || ["Communication", "Teamwork", "Problem Solving"];
}