/**
 * All filtering logic lives here — pure functions, easy to test.
 */

export function applyFilters(internships, filters) {
  return internships.filter((intern) => {
    if (filters.profile && !matchesProfile(intern, filters.profile)) return false;
    if (filters.location && !matchesLocation(intern, filters.location)) return false;
    if (filters.duration && !matchesDuration(intern, filters.duration)) return false;
    if (filters.stipend && !matchesStipend(intern, Number(filters.stipend))) return false;
    if (filters.remote === "true" && !intern.isRemote) return false;
    if (filters.partTime === "true" && !intern.partTime) return false;
    return true;
  });
}

function matchesProfile(intern, query) {
  const q = query.toLowerCase();
  return (
    intern.title?.toLowerCase().includes(q) ||
    intern.profile?.toLowerCase().includes(q)
  );
}

function matchesLocation(intern, query) {
  if (query === "Remote") return intern.isRemote;
  const q = query.toLowerCase();
  return (
    intern.location?.toLowerCase().includes(q) ||
    (intern.isRemote && "remote".includes(q))
  );
}

function matchesDuration(intern, range) {
  const months = extractMonths(intern.duration);
  switch (range) {
    case "1":   return months <= 1;
    case "2":   return months === 2;
    case "3":   return months === 3;
    case "6":   return months >= 6;
    default:    return true;
  }
}

function matchesStipend(intern, minVal) {
  if (!minVal || minVal === 0) return true;
  const val = intern.stipendValue || 0;
  return val >= minVal;
}

function extractMonths(durationStr) {
  if (!durationStr) return 0;
  const match = durationStr.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

/** Derive unique filter options from the actual data */
export function getUniqueLocations(internships) {
  const set = new Set();
  internships.forEach((i) => {
    if (i.isRemote) set.add("Remote");
    if (i.location && i.location !== "Remote") {
      i.location.split(",").forEach((loc) => {
        const clean = loc.trim();
        if (clean) set.add(clean);
      });
    }
  });
  return Array.from(set).sort();
}

export function getUniqueProfiles(internships) {
  const set = new Set();
  internships.forEach((i) => {
    if (i.profile) set.add(i.profile);
    else if (i.title) set.add(i.title);
  });
  return Array.from(set).sort();
}
