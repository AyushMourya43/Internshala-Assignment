import "./InternshipLinks.css";

const SECTIONS = [
  {
    title: "Internship by Places",
    links: [
      "Internship in Bangalore", "Internship in Delhi", "Internships in Hyderabad",
      "Internship in Mumbai", "Internship in Chennai", "Internship in Pune",
      "Internship in Kolkata", "Internship in Gurgaon", "Work From Home Internships",
    ],
    viewAll: "View all internship",
  },
  {
    title: "Internship by Stream",
    links: [
      "Computer Science Internship", "Electronics Internship", "Mechanical Internship",
      "Civil Internship", "Marketing Internship", "Chemical Internship", "Finance Internship",
    ],
    viewAll: "View all internship",
  },
  {
    title: "Jobs by Places",
    links: [
      "Jobs in Bangalore", "Jobs in Delhi", "Jobs in Hyderabad", "Jobs in Gurgaon",
      "Jobs in Kolkata", "Jobs in Mumbai", "Jobs in Pune", "Jobs in Chennai", "Jobs in Noida",
    ],
    viewAll: "View all jobs",
  },
  {
    title: "Jobs by Type",
    links: [
      "Data Entry jobs", "Content writing jobs", "Digital Marketing jobs",
      "Data Science jobs", "Cyber Security jobs", "Pharma jobs",
      "Teaching jobs", "HR jobs", "MBA jobs",
    ],
    viewAll: "View all jobs",
  },
  {
    title: "Fresher Jobs by Places",
    links: [
      "Fresher Jobs in Bangalore", "Fresher Jobs in Delhi", "Fresher Jobs in Hyderabad",
      "Fresher Jobs in Chennai", "Fresher Jobs in Pune", "Fresher Jobs in Mumbai",
      "Fresher Jobs in Noida", "Fresher Jobs in Kolkata", "Fresher Jobs in Gurgaon",
    ],
    viewAll: "View all fresher jobs",
  },
  {
    title: "Fresher Jobs by Type",
    links: [
      "MBA Fresher Job", "HR Fresher Job", "Civil Fresher Job",
      "Digital Marketing Fresher Job", "Business Analyst Fresher Job",
      "Finance Fresher Job", "Accounts Fresher Job", "JAVA Fresher Job",
      "Software Testing Fresher Job",
    ],
    viewAll: "View all fresher jobs",
  },
  {
    title: "Career Launchpads",
    links: [
      "Web Development Course", "Data Science Course",
      "Digital Marketing Course", "HR Management Course",
    ],
    viewAll: "View all courses",
  },
];

export default function InternshipLinks() {
  return (
    <div className="il-wrapper">
      <div className="il-container">
        {SECTIONS.map((section) => (
          <div key={section.title} className="il-section">
            <h3 className="il-title">{section.title}</h3>
            <div className="il-links">
              {section.links.map((link, i) => (
                <span key={link} className="il-link-item">
                  <a href="#" className="il-link">{link}</a>
                  {i < section.links.length - 1 && (
                    <span className="il-divider">|</span>
                  )}
                </span>
              ))}
              {section.viewAll && (
                <>
                  <span className="il-divider">|</span>
                  <a href="#" className="il-view-all">
                    {section.viewAll} <span className="il-arrow">›</span>
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}