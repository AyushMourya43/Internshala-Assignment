import { useState, useEffect } from "react";
import axios from "axios";

// Internshala's search API endpoint
const API_URL = "https://internshala.com/hiring/search";

// Helper to normalize raw API data into a clean shape
function parseInternship(raw) {
  return {
    id: raw.id,
    title: raw.title || "Internship",
    company: raw.company_name || raw.employer?.company_name || "Company",
    location: raw.location_names?.join(", ") || raw.locations_names?.join(", ") || "Remote",
    isRemote: !!(raw.work_from_home || raw.is_remote),
    duration: raw.duration || "Not specified",
    stipend: raw.stipend?.salary || raw.stipend || "Unpaid",
    stipendValue: extractStipendNumber(raw.stipend?.salary || raw.stipend || "0"),
    applyBy: raw.apply_by || raw.application_deadline || "",
    postedOn: raw.start_date || raw.posted_on || "",
    logo: raw.company_logo || raw.employer?.logo || "",
    activelyHiring: !!raw.actively_hiring,
    isPPO: !!raw.ppo_label,
    partTime: !!raw.part_time,
    profile: raw.profile_name || raw.title || "",
    internshipLink: raw.id ? `https://internshala.com/internship/detail/${raw.id}` : "#",
  };
}

function extractStipendNumber(val) {
  if (!val) return 0;
  const str = String(val).replace(/,/g, "");
  const match = str.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export default function useInternships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInternships() {
      try {
        setLoading(true);
        setError(null);

        // The API may have CORS restrictions in browser; we try a proxy approach
        const res = await axios.get(API_URL, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 8000,
        });

        // Internshala API returns internships under various keys
        const data = res.data;
        const raw =
          data?.internships_meta
            ? Object.values(data.internships_meta)
            : data?.internships
            ? Object.values(data.internships)
            : Array.isArray(data)
            ? data
            : [];

        setInternships(raw.map(parseInternship));
      } catch (err) {
        // CORS is likely blocked in browser — fall back to mock data
        console.warn("API fetch failed (likely CORS). Using mock data.", err.message);
        setInternships(getMockInternships());
        setError("Live API unavailable (CORS). Showing sample data.");
      } finally {
        setLoading(false);
      }
    }

    fetchInternships();
  }, []);

  return { internships, loading, error };
}

// Realistic mock data for when the API is blocked by CORS
function getMockInternships() {
  return [
    {
      id: 1, title: "Web Development", company: "TechCorp India", location: "Bengaluru",
      isRemote: false, duration: "3 Months", stipend: "₹15,000/month", stipendValue: 15000,
      applyBy: "30 Jun' 25", postedOn: "Just now", logo: "", activelyHiring: true,
      isPPO: true, partTime: false, profile: "Web Development",
      internshipLink: "https://internshala.com/internship/detail/1",
    },
    {
      id: 2, title: "Data Science", company: "Analytics Hub", location: "Remote",
      isRemote: true, duration: "6 Months", stipend: "₹20,000/month", stipendValue: 20000,
      applyBy: "15 Jun' 25", postedOn: "1 day ago", logo: "", activelyHiring: false,
      isPPO: false, partTime: false, profile: "Data Science",
      internshipLink: "https://internshala.com/internship/detail/2",
    },
    {
      id: 3, title: "UI/UX Design", company: "DesignStudio", location: "Mumbai",
      isRemote: false, duration: "2 Months", stipend: "₹10,000/month", stipendValue: 10000,
      applyBy: "20 Jun' 25", postedOn: "2 days ago", logo: "", activelyHiring: true,
      isPPO: false, partTime: true, profile: "UI/UX Design",
      internshipLink: "https://internshala.com/internship/detail/3",
    },
    {
      id: 4, title: "Marketing", company: "GrowthX", location: "Delhi",
      isRemote: false, duration: "3 Months", stipend: "₹8,000/month", stipendValue: 8000,
      applyBy: "25 Jun' 25", postedOn: "3 days ago", logo: "", activelyHiring: false,
      isPPO: true, partTime: false, profile: "Marketing",
      internshipLink: "https://internshala.com/internship/detail/4",
    },
    {
      id: 5, title: "Machine Learning", company: "AI Labs", location: "Hyderabad",
      isRemote: true, duration: "6 Months", stipend: "₹25,000/month", stipendValue: 25000,
      applyBy: "10 Jul' 25", postedOn: "4 days ago", logo: "", activelyHiring: true,
      isPPO: true, partTime: false, profile: "Machine Learning",
      internshipLink: "https://internshala.com/internship/detail/5",
    },
    {
      id: 6, title: "Content Writing", company: "MediaHouse", location: "Remote",
      isRemote: true, duration: "1 Month", stipend: "₹5,000/month", stipendValue: 5000,
      applyBy: "18 Jun' 25", postedOn: "5 days ago", logo: "", activelyHiring: false,
      isPPO: false, partTime: true, profile: "Content Writing",
      internshipLink: "https://internshala.com/internship/detail/6",
    },
    {
      id: 7, title: "Android Development", company: "AppWorks", location: "Pune",
      isRemote: false, duration: "4 Months", stipend: "₹18,000/month", stipendValue: 18000,
      applyBy: "5 Jul' 25", postedOn: "1 week ago", logo: "", activelyHiring: true,
      isPPO: false, partTime: false, profile: "Android Development",
      internshipLink: "https://internshala.com/internship/detail/7",
    },
    {
      id: 8, title: "Finance", company: "FinEdge", location: "Mumbai",
      isRemote: false, duration: "3 Months", stipend: "₹12,000/month", stipendValue: 12000,
      applyBy: "22 Jun' 25", postedOn: "1 week ago", logo: "", activelyHiring: false,
      isPPO: true, partTime: false, profile: "Finance",
      internshipLink: "https://internshala.com/internship/detail/8",
    },
    {
      id: 9, title: "Graphic Design", company: "Pixel Studio", location: "Chennai",
      isRemote: true, duration: "2 Months", stipend: "₹7,000/month", stipendValue: 7000,
      applyBy: "12 Jun' 25", postedOn: "2 weeks ago", logo: "", activelyHiring: true,
      isPPO: false, partTime: true, profile: "Graphic Design",
      internshipLink: "https://internshala.com/internship/detail/9",
    },
    {
      id: 10, title: "Backend Development", company: "ServerSide Co.", location: "Bengaluru",
      isRemote: false, duration: "6 Months", stipend: "₹22,000/month", stipendValue: 22000,
      applyBy: "8 Jul' 25", postedOn: "2 weeks ago", logo: "", activelyHiring: true,
      isPPO: true, partTime: false, profile: "Backend Development",
      internshipLink: "https://internshala.com/internship/detail/10",
    },
  ];
}
