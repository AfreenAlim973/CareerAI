import "./Dashboard.css";
import { useState, useEffect } from "react";

function Opportunities() {
    const [typeFilter, setTypeFilter] = useState("All");

    const [search, setSearch] = useState("");
    const [stream, setStream] = useState("");
    const [career, setCareer] = useState("");

    useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    const savedCareer = localStorage.getItem("recommendedCareer");

    if (savedProfile?.stream) {
        setStream(savedProfile.stream);
    }

    if (savedCareer) {
        setCareer(savedCareer);
    }
}, []);

    const opportunities = [
        {
    type: "Internships",
    icon: "💼",
    title: "Internship Opportunities",
    description:
        "Find internships to gain practical experience and understand different career paths.",
    examples: "Software, Data, Design, Business, Marketing, Research",
    streams: ["Science", "Commerce", "Arts", "Humanities", "Other"],
    link: "https://internshala.com/"
},
        {
    type: "Hackathons",
    icon: "🏆",
    title: "Hackathons & Competitions",
    description:
        "Participate in coding, business, design, and innovation competitions.",
    examples: "Coding, AI, Design, Business, Robotics, Innovation",
    streams: ["Science", "Commerce", "Arts", "Humanities", "Other"],
    link: "https://devpost.com/"
},
       {
    type: "Certifications",
    icon: "📜",
    title: "Certifications",
    description:
        "Build job-ready skills through relevant courses and certifications.",
    examples:
        "Programming, AI/ML, Cloud, Cybersecurity, Data Analytics, Business, Design",
    streams: ["Science", "Commerce", "Arts", "Humanities", "Other"],
    link: "https://www.coursera.org/"
},
        {
    type: "Scholarships",
    icon: "🎓",
    title: "Scholarships",
    description:
        "Explore scholarships that can support your education.",
    examples:
        "Merit Scholarships, Need-Based Scholarships, Government Scholarships, Private Scholarships",
    streams: ["Science", "Commerce", "Arts", "Humanities", "Other"],
    link: "https://scholarships.gov.in/"
},
        {
    type: "Research",
    icon: "🔬",
    title: "Research Opportunities",
    description:
        "Explore research projects and academic opportunities.",
    examples:
        "AI Research, Science, Engineering, Healthcare, Social Sciences, Technology",
    streams: ["Science", "Arts", "Humanities", "Other"],
    link: "https://www.inspire-dst.gov.in/"
},
    ];

    const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesType =
        typeFilter === "All" ||
        opportunity.type === typeFilter;
        const matchesStream =
    !stream ||
    opportunity.streams?.includes(stream) ||
    opportunity.streams?.includes("Other");

    const matchesSearch =
        opportunity.title?.toLowerCase().includes(search.toLowerCase()) ||
        opportunity.description?.toLowerCase().includes(search.toLowerCase()) ||
        opportunity.examples?.toLowerCase().includes(search.toLowerCase());

    return matchesType && matchesSearch && matchesStream;
});

    return (
        <div className="dashboard-page">
            <h1>🚀 Opportunities</h1>

            <p>
                Discover opportunities that can help you build your
                skills, experience, and career.
            </p>

            {(stream || career) && (
    <div className="dashboard-card">
        <h2>🎯 Recommended For You</h2>

        {stream && (
            <p>
                <strong>Stream:</strong> {stream}
            </p>
        )}

        {career && (
            <p>
                <strong>Recommended Career:</strong> {career}
            </p>
        )}

        <p>
            Explore opportunities that can support your career journey.
        </p>
    </div>
)}

        <div className="search-section">
            <input
    className="college-search"
    type="text"
    placeholder="Search opportunities..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
</div>

            <div className="college-filters">
                <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option value="All">All Opportunities</option>
                    <option value="Internships">Internships</option>
                    <option value="Hackathons">
                        Hackathons & Competitions
                    </option>
                    <option value="Certifications">
                        Certifications
                    </option>
                    <option value="Scholarships">
                        Scholarships
                    </option>
                    <option value="Research">
                        Research Opportunities
                    </option>
                </select>
            </div>

            <div className="dashboard-cards">
                {filteredOpportunities.map((opportunity, index) => (
                    <div className="dashboard-card opportunity-card" key={index}>
                        <h2>
    {opportunity.icon} {opportunity.title}
</h2>

{stream && (
    <p className="opportunity-recommended">
        ✨ Recommended for your {stream} background
    </p>
)}
<p>{opportunity.description}</p>

<div>
    <p>
        <strong>Explore:</strong> {opportunity.examples}
    </p>

    <a
        href={opportunity.link}
        target="_blank"
        rel="noopener noreferrer"
        className="opportunities-btn opportunity-explore"
    >
        Explore
    </a>
</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Opportunities;