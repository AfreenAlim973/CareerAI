import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function CareerDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const career = location.state?.career;

    if (!career) {
        return (
            <div className="dashboard-page">
                <h1>Career Not Found</h1>
                <p>Please select a career from Career Explorer.</p>

                <button
                    className="career-details-btn"
                    onClick={() => navigate("/careers")}
                >
                    ← Back to Careers
                </button>
            </div>
        );
    }

    return (
        <div className="dashboard-page">
            <button
                className="career-details-btn"
                onClick={() => navigate("/careers")}
            >
                ← Back to Careers
            </button>

            <h1>
                {career.icon} {career.title}
            </h1>

            <p>{career.description}</p>

            <div className="dashboard-card">
                <h2>📖 About This Career</h2>
                <p>{career.details}</p>
            </div>

            <div className="dashboard-card">
                <h2>🛠️ Key Skills</h2>
                <ul>
                    {career.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-card">
                <h2>🎓 Education Path</h2>
                <p>
                    {career.education ||
                        "Education requirements vary depending on the career path."}
                </p>
            </div>

            <div className="dashboard-card">
                <h2>📚 Important Subjects</h2>
                <ul>
                    {(career.subjects || []).map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
            <div className="dashboard-card">
                 <h2>🗺️ Career Roadmap</h2>

                    <ol>
                    {(career.roadmap || []).map((step, index) => (
                     <li key={index}>{step}</li>
                 ))}
            </ol>
        </div>
        </div>
    );
}

export default CareerDetails;