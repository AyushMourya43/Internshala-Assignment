import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FilterPanel from "./components/FilterPanel";
import InternshipList from "./components/InternshipList";
import InternshipDetail from "./pages/InternshipDetail";
import FAQ from "./components/FAQ";
import InternshipLinks from "./components/InternshipLinks";
import Footer from "./components/Footer";
import useInternships from "./hooks/useInternships";
import { applyFilters } from "./utils/filters";
import "./App.css";

export default function App() {
  const { internships, loading, error } = useInternships();
  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
    stipend: "",
    remote: "",
    partTime: "",
    keyword: "",
    startDate: "",
    maxDuration: "",
    jobOffer: "",
    fastResponse: "",
    earlyApplicant: "",
    forWomen: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      profile: "", location: "", duration: "", stipend: "",
      remote: "", partTime: "", keyword: "", startDate: "",
      maxDuration: "", jobOffer: "", fastResponse: "",
      earlyApplicant: "", forWomen: "",
    });
  };

  const filtered = applyFilters(internships, filters);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-layout">
                <aside className="sidebar">
                  <FilterPanel
                    internships={internships}
                    filters={filters}
                    onChange={handleFilterChange}
                    onClear={handleClearFilters}
                  />
                </aside>
                <main className="content">
                  <InternshipList
                    internships={filtered}
                    loading={loading}
                    error={error}
                  />
                </main>
              </div>
              <FAQ />
              <InternshipLinks />
              <Footer />
            </>
          }
        />
        <Route
          path="/internship/:id"
          element={<InternshipDetail internships={internships} />}
        />
      </Routes>
    </div>
  );
}