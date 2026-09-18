import "./Dashboard.css";
import {useEffect, useState} from "react";
import { Link, useNavigate} from "react-router-dom";

function Dashboard() {

    const [recommendedCareer, setRecommendedCareer] = useState("");

    const [assessmentScores, setAssessmentScores] = useState({});

useEffect(() => {
    const loadCareer = async () => {
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            return;
        }

        try {
            const response = await fetch(
                `https://careerai-cagq.onrender.com/api/assessment/${savedUser.email}`
            );

            const data = await response.json();

            if (response.ok) {

    if (data.recommendedCareer) {
        setRecommendedCareer(data.recommendedCareer);

        localStorage.setItem(
            "recommendedCareer",
            data.recommendedCareer
        );
    }

    if (data.assessmentScores) {
        setAssessmentScores(data.assessmentScores);
    }
}

        } catch (error) {
            console.error("Career loading error:", error);
        }
    };

    loadCareer();
}, []);

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const savedProfile = localStorage.getItem("profile");

        if(savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    },[]);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        } else {
            navigate("/login");
        }
    }, [navigate]);

    return(
        <div>

            <h1>Welcome, {user ? user.name : "User" }! 👋</h1>

            <button onClick={handleLogout}>
    Logout
</button>

            {recommendedCareer && (
    <div className="dashboard-card">
        <h2>🎯 Your Recommended Career</h2>
        <h3>{recommendedCareer}</h3>
        <p>
            This career was recommended based on your assessment.
        </p>
    </div>
)}

{Object.keys(assessmentScores).length > 0 && (
    <div className="dashboard-card">
        <h2>📊 Assessment Summary</h2>

        <ul>
            {Object.entries(assessmentScores).map(
                ([careerName, score]) => (
                    <li key={careerName}>
                        <strong>{careerName}:</strong> {score} points
                    </li>
                )
            )}
        </ul>
    </div>
)}

    {profile && (
        <div className="dashboard-card">
            <h2>👤 Profile Status</h2>
            <p>✅ Your profile is completed.</p>
            <p><strong>Course:</strong> {profile.course}</p>
            <p><strong>Skills:</strong>
            {profile.skills}</p>
            <p><strong>Interests</strong> {profile.interests}</p>
        </div>
    )}

            <p>
                 Let's build your career with CareerAI.
            </p>

            <div>

                <h2>Complete your profile</h2>

                <p>
                    Tell us about your education, skills and interests so we can recommend suitable career paths. 
                </p>

                <Link to="/profile">
                    <button>Complete Profile</button>
                </Link>

            </div>

            <div className="dashboard-cards">

    <div className="dashboard-card">
        <h2>📝 Career Assessment</h2>
        <p>Discover your strengths and interests.</p>
        <button onClick={ () => navigate("/assessment")}>
            Start Assessment
        </button>
    </div>

    <div className="dashboard-card">
        <h2>🎯 Career Recommendations</h2>
        <p>Explore careers that match your profile.</p>
        <button onClick={() => navigate("/careers")}>
            View Careers
        </button>
    </div>

    <div className="dashboard-card">
        <h2>🏫 Government Colleges</h2>
        <p>Find government colleges and courses.</p>
        <button onClick={() => navigate("/colleges")}>
            Explore Colleges
        </button>
    </div>

    <div className="dashboard-card">
        <h2>📅 Career Roadmap</h2>
        <p>Track your goals and career progress.</p>
        <button onClick={() => navigate("/roadmap")}>View Roadmap</button>
    </div>

            <div className="dashboard-card">
        <h2>🚀 Opportunities</h2>

        <p>
            Explore internships, hackathons, certifications,
            scholarships, and research opportunities.
        </p>

        <button onClick={() => navigate("/opportunities")}>
            Explore Opportunities 
        </button>
    </div>

</div>

</div>
        
    );
}

export default Dashboard;