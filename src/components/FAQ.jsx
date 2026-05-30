import { useState } from "react";
import "./FAQ.css";

const FAQS = [
  {
    q: "How do I search for internships in my preferred category/profile?",
    a: "You can use the Profile filter on the left side to search for internships in your preferred category. Type the profile name like 'Marketing', 'Web Development', 'Data Science' etc. and the list will update automatically.",
  },
  {
    q: "How can I apply for an internship on Internshala?",
    a: "To apply for an internship, click on 'View details' on any internship card. You will be taken to the internship detail page where you can read more about the role and click 'Apply now'.",
  },
  {
    q: "Do I need to pay to apply for an internship on Internshala?",
    a: "No, applying for internships on Internshala is completely free. You can apply to as many internships as you want without any charges.",
  },
  {
    q: "What all internships are available on Internshala?",
    a: "Internshala has internships across 100+ categories including Web Development, Data Science, Marketing, Finance, Design, Content Writing, Android Development and many more — both work from home and in-office.",
  },
  {
    q: "Are there any courses that offer a placement?",
    a: "Yes, Internshala Training offers several courses with placement assistance. These courses are designed to help you build job-ready skills and connect with top companies.",
  },
  {
    q: "How do I get certified online?",
    a: "You can enroll in Internshala's online training courses, complete the coursework and assessments, and receive a certificate upon successful completion that you can add to your resume.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-inner">
        <div className="faq-toggle-row">
          <button
            className="faq-toggle-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Frequently asked questions
            <span className={`faq-arrow ${isExpanded ? "open" : ""}`}>^</span>
          </button>
        </div>

        {isExpanded && (
          <div className="faq-list">
            {FAQS.map((item, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>Q. {item.q}</span>
                  <span className={`faq-icon ${openIndex === i ? "open" : ""}`}>+</span>
                </button>
                {openIndex === i && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}