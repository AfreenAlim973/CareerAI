import { useLocation, useNavigate} from "react-router-dom";
import "./Dashboard.css";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    const career = location.state?.career || "Career not available";

    const scores = location.state?.scores || {};

    const careerDetails = {
        "Software Developer": {
            description: "You may enjoy solving technical problems and building software applications.",
            skills: ["JavaScript", "React", "Node.js", "Git & GitHub"]
        },

        "UI/UX Designer": {
            description: "You may enjoy creativity, visual design, and improving your experience.",
            skills: ["Figma", "UI Design", "UX Research", "Prototyping"]
        },

        "HR / Counselor": {
            description: "You may enjoy communication, understanding people, and helping others.",
            skills: ["Communication", "Active Listening", "Problem Solving", "Teamwork"]
        },

        "Project Manager": {
            description: "You may enjoy organising tasks, leading teams, and managing projects.",
            skills: ["Leadership", "Communication", "Planning", "Team Management"]
        }
    };

    const details = careerDetails[career];

    const relatedCareers = {
    "Software Developer": [
        "AI/ML Engineer",
        "Cloud Engineer",
        "Cybersecurity Analyst"
    ],

    "UI/UX Designer": [
        "Frontend Developer",
        "Product Designer",
        "Graphic Designer"
    ],

    "HR / Counselor": [
        "HR Manager",
        "Career Counselor",
        "Training Specialist"
    ],

    "Project Manager": [
        "Product Manager",
        "Business Analyst",
        "Operations Manager"
    ]
};

    return(
        <div className="dashboard-page">
            <div className="dashboard-card">
               <h1>Your Career Recommendation.</h1> 

               <p>
                Based on your assessment answers, CareerAI recommends:
               </p>

               <h2>{career}</h2>

               {details && (
                <>
                    <h3>Why this career?</h3>

                    <p>{details.description}</p>

                    <h3>key Skills to Learn</h3>

                    <ul>
                        {details.skills.map((skill,index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>

                    <h3>📊 Your Assessment Scores</h3>

                    <ul>
                        {Object.entries(scores).map(([careerName, score]) => (
                            <li key={careerName}>
                                <strong>
                                    { careerName}:
                                </strong> {score} points
                            </li>
                        ))}
                    </ul>

                            <h3>Related Career Options</h3>

        <ul>
            {relatedCareers[career]?.map((relatedCareer, index) => (
                <li key={index}>{relatedCareer}</li>
            ))}
        </ul>
                </>

               )}

               <button onClick={() => navigate("/dashboard")}>
                Back to Dashboard
               </button>

            </div>
        </div>
    );
}

export default Result;