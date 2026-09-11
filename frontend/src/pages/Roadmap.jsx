import "./Dashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Roadmap() {

    const navigate = useNavigate();

    const [career, setCareer] = useState("your chosen career");

useEffect(() => {
    const loadCareer = async () => {

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/assessment/${savedUser.email}`
            );

            const data = await response.json();

            if (response.ok && data.recommendedCareer) {
                setCareer(data.recommendedCareer);

                // Keep localStorage updated
                localStorage.setItem(
                    "recommendedCareer",
                    data.recommendedCareer
                );
            }

        } catch (error) {
            console.error("Roadmap career loading error:", error);
        }
    };

    loadCareer();
}, []);

    const roadmapSteps = {

    "Software Developer": [
        {
            number: 1,
            title: "Complete Your Profile",
            description: "Add your course, skills, and interests."
        },
        {
            number: 2,
            title: "Learn Programming",
            description: "Strengthen your programming fundamentals and problem-solving skills."
        },
        {
            number: 3,
            title: "Learn Web Development",
            description: "Build skills in HTML, CSS, JavaScript, React, and backend development."
        },
        {
            number: 4,
            title: "Build Projects",
            description: "Create practical software projects and upload them to GitHub."
        },
        {
            number: 5,
            title: "Prepare for Opportunities",
            description: "Improve your resume, interview skills, and job-readiness."
        }
    ],

    "UI/UX Designer": [
        {
            number: 1,
            title: "Learn UI/UX Fundamentals",
            description: "Understand design principles, user experience, and usability."
        },
        {
            number: 2,
            title: "Learn Figma",
            description: "Practice creating interfaces, wireframes, and prototypes."
        },
        {
            number: 3,
            title: "Practice UX Research",
            description: "Learn how to understand users and identify their needs."
        },
        {
            number: 4,
            title: "Build a Design Portfolio",
            description: "Create projects that demonstrate your design and problem-solving skills."
        },
        {
            number: 5,
            title: "Prepare for Opportunities",
            description: "Improve your portfolio, resume, and interview skills."
        }
    ],

    "AI/ML Engineer": [
        {
            number: 1,
            title: "Strengthen Python",
            description: "Build a strong foundation in Python programming."
        },
        {
            number: 2,
            title: "Learn Mathematics & Statistics",
            description: "Develop the mathematical and statistical foundations needed for machine learning."
        },
        {
            number: 3,
            title: "Learn Machine Learning",
            description: "Study machine learning algorithms and work with real datasets."
        },
        {
            number: 4,
            title: "Build AI/ML Projects",
            description: "Create practical projects that demonstrate your skills."
        },
        {
            number: 5,
            title: "Prepare for Opportunities",
            description: "Build your portfolio, resume, and interview skills."
        }
    ],

    "Cybersecurity Analyst": [
        {
            number: 1,
            title: "Learn Networking",
            description: "Understand networks, protocols, and basic security concepts."
        },
        {
            number: 2,
            title: "Learn Linux & Security",
            description: "Develop Linux skills and understand common security principles."
        },
        {
            number: 3,
            title: "Study Cybersecurity",
            description: "Learn about threats, vulnerabilities, and defensive security."
        },
        {
            number: 4,
            title: "Build Security Projects",
            description: "Practice security concepts through safe, legal learning projects."
        },
        {
            number: 5,
            title: "Prepare for Opportunities",
            description: "Build your resume and prepare for cybersecurity interviews."
        }
    ],

    "Cloud Engineer": [
        {
            number: 1,
            title: "Learn Linux",
            description: "Build a strong foundation in Linux and command-line concepts."
        },
        {
            number: 2,
            title: "Learn Cloud Fundamentals",
            description: "Understand cloud computing, services, and infrastructure."
        },
        {
            number: 3,
            title: "Learn AWS or Azure",
            description: "Develop practical knowledge of a major cloud platform."
        },
        {
            number: 4,
            title: "Build Cloud Projects",
            description: "Create projects that demonstrate cloud and deployment skills."
        },
        {
            number: 5,
            title: "Prepare for Opportunities",
            description: "Improve your resume, portfolio, and interview skills."
        }
    ],

    "Project Manager": [
        {
            number: 1,
            title: "Learn Project Management",
            description: "Understand project planning, scheduling, and organization."
        },
        {
            number: 2,
            title: "Improve Communication",
            description: "Develop communication, teamwork, and leadership skills."
        },
        {
            number: 3,
            title: "Learn Project Tools",
            description: "Practice using tools for task management and collaboration."
        },
        {
            number: 4,
            title: "Work on Projects",
            description: "Gain practical experience by planning and managing projects."
        },
        {
            number: 5,
            title: "Prepare for Opportunities",
            description: "Improve your resume, interview skills, and professional profile."
        }
    ]
};

const steps = roadmapSteps[career] || [
    {
        number: 1,
        title: "Complete Your Profile",
        description: "Add your course, skills, and interests."
    },
    {
        number: 2,
        title: "Take Career Assessment",
        description: "Discover careers that match your interests and strengths."
    },
    {
        number: 3,
        title: "Learn Required Skills",
        description: "Develop the skills needed for your chosen career."
    },
    {
        number: 4,
        title: "Build Projects",
        description: "Create practical projects to demonstrate your skills."
    },
    {
        number: 5,
        title: "Prepare for Opportunities",
        description: "Work on your resume, interview skills, and job applications."
    }
];

    return (
        <div className="dashboard-page">

            <h1>📅 {career} Career Roadmap</h1>

            <p>
                Follow these steps to build your career journey with CareerAI.
            </p>

            <div className="dashboard-cards">

                {steps.map((step) => (
                    <div className="dashboard-card" key={step.number}>

                        <h2>
                            Step {step.number}: {step.title}
                        </h2>

                        <p>{step.description}</p>

                    </div>
                ))}

            </div>

            <button onClick={() => navigate("/dashboard")}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default Roadmap;