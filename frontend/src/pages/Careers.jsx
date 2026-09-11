import "./Dashboard.css";
import { useEffect, useState } from "react";

function Careers() {

    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const loadRecommendations = async () => {

            const savedUser = JSON.parse(localStorage.getItem("user"));

            if (!savedUser) {
                return;
            }

            try {
                const response = await fetch(
                    `http://localhost:5000/api/recommendations/${savedUser.email}`
                );

                const data = await response.json();

                if (response.ok) {
                    setRecommendations(data.recommendations || []);
                }

            } catch (error) {
                console.error("Recommendation loading error:", error);
            }
        };

        loadRecommendations();
    }, []);


    const careers = [
        {
            title: "Software Developer",
            icon: "💻",
            description: "Build websites, applications, and software solutions.",
            skills: ["JavaScript", "React", "Node.js", "Git"],
            details: "Software developers design, build, test, and maintain software applications."
        },
        {
            title: "UI/UX Designer",
            icon: "🎨",
            description: "Design user-friendly and visually appealing digital experiences.",
            skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
            details: "UI/UX designers create user-friendly interfaces and improve how people interact with digital products."
        },
        {
            title: "Data Analyst",
            icon: "📊",
            description: "Analyze data and turn information into useful insights.",
            skills: ["Python", "SQL", "Excel", "Data Visualization"],
            details: "Data analysts examine data, identify patterns, and create insights that help organizations make decisions."
        },
        {
            title: "AI/ML Engineer",
            icon: "🤖",
            description: "Develop intelligent systems using artificial intelligence and machine learning.",
            skills: ["Python", "Machine Learning", "Statistics", "TensorFlow"],
            details: "AI/ML engineers build intelligent systems that learn from data and solve complex problems."
        },
        {
            title: "Cybersecurity Analyst",
            icon: "🔐",
            description: "Help protect systems, networks, and data from security threats.",
            skills: ["Networking", "Linux", "Security", "Ethical Hacking"],
            details: "Cybersecurity analysts help protect computer systems, networks, and information from security threats."
        },
        {
            title: "Cloud Engineer",
            icon: "☁️",
            description: "Build and manage applications and infrastructure in the cloud.",
            skills: ["AWS", "Cloud Computing", "Linux", "DevOps"],
            details: "Cloud engineers design and manage cloud-based infrastructure, applications, and services."
        }
    ];


    return (
        <div className="dashboard-page">

            <h1>Career Explorer 🎯</h1>

            <p>
                Explore different career paths and discover the skills
                you can develop for each one.
            </p>


            {/* PERSONALIZED RECOMMENDATIONS */}

            {recommendations.length > 0 && (
                <div className="dashboard-card">

                    <h2>⭐ Recommended For You</h2>

                    <p>
                        Based on your CareerAI assessment:
                    </p>

                    <ul>
                        {recommendations.map((career, index) => (
                            <li key={index}>
                                {career}
                            </li>
                        ))}
                    </ul>

                </div>
            )}


            {/* ALL CAREERS */}

            <h2>Explore All Careers</h2>

            <div className="dashboard-cards">

                {careers.map((career, index) => (

                    <div className="dashboard-card" key={index}>

                        <h2>
                            {career.icon} {career.title}
                        </h2>

                        <p>{career.description}</p>

                        <p>{career.details}</p>

                        <h3>Key Skills</h3>

                        <ul>
                            {career.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                            ))}
                        </ul>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Careers;