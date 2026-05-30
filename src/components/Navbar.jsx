import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <span className="logo-intern">INTERN</span><span className="logo-shala">SHALA</span>
        </a>
        <div className="navbar-links">
          <a href="#" className="active">Internships ▾</a>
          <a href="#">Courses <span className="courses-badge">OFFER</span> ▾</a>
          <a href="#">Jobs ▾</a>
        </div>
        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
    </nav>
  );
}
