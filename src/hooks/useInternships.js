import { useState, useEffect } from "react";
import axios from "axios";

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

        const res = await axios.get('/api/search', { timeout: 10000 });
        const data = res.data;

        const raw =
          data?.internships_meta
            ? Object.values(data.internships_meta)
            : data?.internships
            ? Object.values(data.internships)
            : Array.isArray(data)
            ? data
            : [];

        if (raw.length === 0) {
          setError("No internships returned from API.");
        }

        setInternships(raw.map(parseInternship));
      } catch (err) {
        console.error("API fetch failed:", err.message);
        setError("Could not fetch live data. Please try again later.");
        setInternships([]);
      } finally {
        setLoading(false);
      }
    }

    fetchInternships();
  }, []);

  return { internships, loading, error };
}