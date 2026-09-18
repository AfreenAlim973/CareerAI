import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Assessment() {

    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
    {
        question: "Which activity sounds most interesting to you?",
        options: [
            "Building apps or solving technical problems",
            "Creating designs, videos or visual content",
            "Helping people and understanding their needs",
            "Planning, organizing or leading activities"
        ]
    },
    {
        question: "Which subject area do you enjoy the most?",
        options: [
            "Computer Science or Mathematics",
            "Art, Design or Languages",
            "Biology, Psychology or Health",
            "Business, Economics or Commerce"
        ]
    },
    {
        question: "What kind of problems do you enjoy solving?",
        options: [
            "Logical and technical problems",
            "Creative and visual problems",
            "People-related or social problems",
            "Business or organizational problems"
        ]
    },
    {
        question: "Which type of work would you enjoy most?",
        options: [
            "Working with technology and data",
            "Creating content or designs",
            "Working directly with people",
            "Managing projects or finances"
        ]
    },
    {
        question: "Which skill would you most like to develop?",
        options: [
            "Programming and analytical thinking",
            "Creativity and visual communication",
            "Communication and empathy",
            "Leadership and decision-making"
        ]
    },
    {
        question: "Which environment would you prefer?",
        options: [
            "Technology or engineering environment",
            "Creative or media environment",
            "Healthcare, education or social environment",
            "Business, finance or government environment"
        ]
    },
    {
        question: "What type of project would excite you most?",
        options: [
            "Building a software or technology project",
            "Designing a website, animation or media project",
            "Creating something that helps people or improves wellbeing",
            "Planning a business, financial or community project"
        ]
    },
    {
        question: "Which strength describes you best?",
        options: [
            "Logical thinking",
            "Creativity",
            "Understanding people",
            "Leadership and organization"
        ]
    },
    {
        question: "Which type of knowledge would you like to explore more?",
        options: [
            "Technology, engineering and computing",
            "Arts, media and communication",
            "Health, psychology and society",
            "Business, economics, law and public service"
        ]
    },
    {
        question: "What kind of impact would you like your career to have?",
        options: [
            "Build useful technology and solve complex problems",
            "Create ideas, designs or content that inspire people",
            "Help people and improve communities or wellbeing",
            "Lead organizations, manage resources or influence decisions"
        ]
    }
];


const calculateCareer = async (answers) => {

    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    const stream = savedProfile?.stream || "";

    const careerScores = {
        "Software Developer": 0,
        "AI/ML Engineer": 0,
        "Data Scientist": 0,
        "Data Analyst": 0,
        "Cybersecurity Analyst": 0,
        "Cloud Engineer": 0,
        "UI/UX Designer": 0,

        "Chartered Accountant": 0,
        "Financial Analyst": 0,
        "Business Analyst": 0,
        "Management Consultant": 0,
        "Marketing Specialist": 0,

        "Doctor / Medical Practitioner": 0,
        "Pharmacist": 0,
        "Biotechnology Professional": 0,
        "Healthcare Administrator": 0,

        "Civil Engineer": 0,
        "Mechanical Engineer": 0,
        "Electrical Engineer": 0,
        "Robotics & Automation Engineer": 0,

        "Lawyer": 0,
        "Civil Services": 0,
        "Policy Analyst": 0,

        "Graphic Designer": 0,
        "Digital Content Creator": 0,
        "Journalist": 0,
        "Animator": 0,

        "Psychologist": 0,
        "Teacher / Educator": 0,
        "Translator": 0,

        "Environmental Scientist": 0,
        "Research Scientist": 0,
        "Mathematician": 0
    };

    // Technology
    answers.forEach((answer) => {

        if (answer === "Building apps or solving technical problems") {
            careerScores["Software Developer"] += 5;
            careerScores["AI/ML Engineer"] += 4;
            careerScores["Cybersecurity Analyst"] += 3;
            careerScores["Cloud Engineer"] += 3;
            careerScores["Data Scientist"] += 2;
            careerScores["Robotics & Automation Engineer"] += 2;
        }

        if (answer === "Computer Science or Mathematics") {
            careerScores["AI/ML Engineer"] += 5;
            careerScores["Data Scientist"] += 5;
            careerScores["Mathematician"] += 4;
            careerScores["Software Developer"] += 3;
            careerScores["Data Analyst"] += 3;
            careerScores["Robotics & Automation Engineer"] += 3;
            careerScores["Research Scientist"] += 2;
        }

        if (answer === "Logical and technical problems") {
            careerScores["Software Developer"] += 4;
            careerScores["AI/ML Engineer"] += 4;
            careerScores["Data Scientist"] += 4;
            careerScores["Cybersecurity Analyst"] += 4;
            careerScores["Data Analyst"] += 3;
            careerScores["Cloud Engineer"] += 3;
            careerScores["Robotics & Automation Engineer"] += 3;
            careerScores["Mathematician"] += 3;
        }

        if (answer === "Working with technology and data") {
            careerScores["Data Scientist"] += 5;
            careerScores["Data Analyst"] += 5;
            careerScores["AI/ML Engineer"] += 4;
            careerScores["Business Analyst"] += 2;
            careerScores["Cybersecurity Analyst"] += 2;
        }

        if (answer === "Programming and analytical thinking") {
            careerScores["Software Developer"] += 4;
            careerScores["AI/ML Engineer"] += 4;
            careerScores["Data Scientist"] += 4;
            careerScores["Data Analyst"] += 3;
            careerScores["Cybersecurity Analyst"] += 3;
        }

        if (answer === "Build a software or technology project") {
            careerScores["Software Developer"] += 5;
            careerScores["AI/ML Engineer"] += 4;
            careerScores["Cybersecurity Analyst"] += 3;
            careerScores["Cloud Engineer"] += 3;
            careerScores["Robotics & Automation Engineer"] += 3;
        }

        if (answer === "Logical thinking") {
            careerScores["Software Developer"] += 3;
            careerScores["AI/ML Engineer"] += 4;
            careerScores["Data Scientist"] += 4;
            careerScores["Data Analyst"] += 3;
            careerScores["Cybersecurity Analyst"] += 3;
            careerScores["Mathematician"] += 4;
            careerScores["Research Scientist"] += 2;
        }

        if (answer === "Technology, engineering and computing") {
            careerScores["Software Developer"] += 4;
            careerScores["AI/ML Engineer"] += 4;
            careerScores["Cybersecurity Analyst"] += 3;
            careerScores["Cloud Engineer"] += 3;
            careerScores["Robotics & Automation Engineer"] += 4;
            careerScores["Electrical Engineer"] += 2;
            careerScores["Mechanical Engineer"] += 2;
            careerScores["Civil Engineer"] += 1;
        }

        if (answer === "Build useful technology and solve complex problems") {
            careerScores["Software Developer"] += 4;
            careerScores["AI/ML Engineer"] += 4;
            careerScores["Data Scientist"] += 3;
            careerScores["Cybersecurity Analyst"] += 3;
            careerScores["Robotics & Automation Engineer"] += 3;
            careerScores["Research Scientist"] += 2;
        }

        // Creative
        if (answer === "Creating designs, videos or visual content") {
            careerScores["Graphic Designer"] += 5;
            careerScores["Digital Content Creator"] += 5;
            careerScores["Animator"] += 4;
            careerScores["UI/UX Designer"] += 4;
            careerScores["Journalist"] += 2;
            careerScores["Marketing Specialist"] += 2;
        }

        if (answer === "Art, Design or Languages") {
            careerScores["Graphic Designer"] += 5;
            careerScores["Animator"] += 4;
            careerScores["UI/UX Designer"] += 4;
            careerScores["Translator"] += 4;
            careerScores["Digital Content Creator"] += 3;
        }

        if (answer === "Creative and visual problems") {
            careerScores["Graphic Designer"] += 5;
            careerScores["UI/UX Designer"] += 5;
            careerScores["Animator"] += 4;
            careerScores["Digital Content Creator"] += 3;
        }

        if (answer === "Creating content or designs") {
            careerScores["Digital Content Creator"] += 5;
            careerScores["Graphic Designer"] += 4;
            careerScores["Animator"] += 3;
            careerScores["Marketing Specialist"] += 3;
        }

        if (answer === "Creativity and visual communication") {
            careerScores["UI/UX Designer"] += 5;
            careerScores["Graphic Designer"] += 5;
            careerScores["Digital Content Creator"] += 4;
            careerScores["Animator"] += 4;
        }

        if (answer === "Creative or media environment") {
            careerScores["Digital Content Creator"] += 5;
            careerScores["Journalist"] += 4;
            careerScores["Graphic Designer"] += 4;
            careerScores["Animator"] += 4;
            careerScores["Marketing Specialist"] += 3;
        }

        if (answer === "Designing a website, animation or media project") {
            careerScores["UI/UX Designer"] += 5;
            careerScores["Animator"] += 5;
            careerScores["Graphic Designer"] += 4;
            careerScores["Digital Content Creator"] += 4;
        }

        if (answer === "Creativity") {
            careerScores["Graphic Designer"] += 4;
            careerScores["UI/UX Designer"] += 4;
            careerScores["Animator"] += 4;
            careerScores["Digital Content Creator"] += 4;
            careerScores["Marketing Specialist"] += 2;
        }

        if (answer === "Arts, media and communication") {
            careerScores["Journalist"] += 5;
            careerScores["Digital Content Creator"] += 5;
            careerScores["Graphic Designer"] += 4;
            careerScores["Animator"] += 3;
            careerScores["Translator"] += 3;
        }

        if (answer === "Create ideas, designs or content that inspire people") {
            careerScores["Digital Content Creator"] += 5;
            careerScores["Graphic Designer"] += 4;
            careerScores["Marketing Specialist"] += 4;
            careerScores["Journalist"] += 3;
            careerScores["Animator"] += 3;
        }

        // Healthcare / People
        if (answer === "Helping people and understanding their needs") {
            careerScores["Psychologist"] += 5;
            careerScores["Doctor / Medical Practitioner"] += 4;
            careerScores["Teacher / Educator"] += 3;
            careerScores["Healthcare Administrator"] += 2;
        }

        if (answer === "Biology, Psychology or Health") {
            careerScores["Doctor / Medical Practitioner"] += 5;
            careerScores["Pharmacist"] += 5;
            careerScores["Biotechnology Professional"] += 5;
            careerScores["Psychologist"] += 4;
            careerScores["Research Scientist"] += 3;
            careerScores["Environmental Scientist"] += 2;
        }

        if (answer === "People-related or social problems") {
            careerScores["Psychologist"] += 5;
            careerScores["Teacher / Educator"] += 4;
            careerScores["Civil Services"] += 3;
            careerScores["Lawyer"] += 3;
            careerScores["Policy Analyst"] += 3;
        }

        if (answer === "Working directly with people") {
            careerScores["Psychologist"] += 5;
            careerScores["Doctor / Medical Practitioner"] += 4;
            careerScores["Teacher / Educator"] += 4;
            careerScores["Healthcare Administrator"] += 3;
            careerScores["Lawyer"] += 2;
        }

        if (answer === "Communication and empathy") {
            careerScores["Psychologist"] += 5;
            careerScores["Teacher / Educator"] += 5;
            careerScores["Doctor / Medical Practitioner"] += 3;
            careerScores["Lawyer"] += 2;
            careerScores["Translator"] += 2;
        }

        if (answer === "Healthcare, education or social environment") {
            careerScores["Psychologist"] += 5;
            careerScores["Teacher / Educator"] += 5;
            careerScores["Doctor / Medical Practitioner"] += 4;
            careerScores["Healthcare Administrator"] += 3;
        }

        if (answer === "Creating something that helps people or improves wellbeing") {
            careerScores["Psychologist"] += 5;
            careerScores["Doctor / Medical Practitioner"] += 4;
            careerScores["Teacher / Educator"] += 4;
            careerScores["Biotechnology Professional"] += 2;
            careerScores["Environmental Scientist"] += 2;
        }

        if (answer === "Understanding people") {
            careerScores["Psychologist"] += 6;
            careerScores["Teacher / Educator"] += 3;
            careerScores["Doctor / Medical Practitioner"] += 2;
        }

        if (answer === "Health, psychology and society") {
            careerScores["Psychologist"] += 5;
            careerScores["Doctor / Medical Practitioner"] += 4;
            careerScores["Teacher / Educator"] += 4;
            careerScores["Biotechnology Professional"] += 2;
        }

        if (answer === "Help people and improve communities or wellbeing") {
            careerScores["Psychologist"] += 5;
            careerScores["Doctor / Medical Practitioner"] += 4;
            careerScores["Teacher / Educator"] += 4;
            careerScores["Civil Services"] += 3;
        }

        // Business / Finance / Government
        if (answer === "Planning, organizing or leading activities") {
            careerScores["Management Consultant"] += 5;
            careerScores["Business Analyst"] += 4;
            careerScores["Healthcare Administrator"] += 3;
            careerScores["Civil Services"] += 3;
        }

        if (answer === "Business, Economics or Commerce") {
            careerScores["Chartered Accountant"] += 6;
            careerScores["Financial Analyst"] += 5;
            careerScores["Business Analyst"] += 5;
            careerScores["Management Consultant"] += 3;
            careerScores["Marketing Specialist"] += 2;
        }

        if (answer === "Business or organizational problems") {
            careerScores["Business Analyst"] += 6;
            careerScores["Management Consultant"] += 5;
            careerScores["Financial Analyst"] += 3;
            careerScores["Marketing Specialist"] += 2;
        }

        if (answer === "Managing projects or finances") {
            careerScores["Financial Analyst"] += 5;
            careerScores["Chartered Accountant"] += 5;
            careerScores["Business Analyst"] += 4;
            careerScores["Management Consultant"] += 3;
            careerScores["Healthcare Administrator"] += 2;
        }

        if (answer === "Leadership and decision-making") {
            careerScores["Management Consultant"] += 5;
            careerScores["Civil Services"] += 5;
            careerScores["Business Analyst"] += 3;
            careerScores["Healthcare Administrator"] += 3;
            careerScores["Policy Analyst"] += 3;
        }

        if (answer === "Business, finance or government environment") {
            careerScores["Chartered Accountant"] += 4;
            careerScores["Financial Analyst"] += 4;
            careerScores["Civil Services"] += 4;
            careerScores["Policy Analyst"] += 4;
            careerScores["Business Analyst"] += 3;
        }

        if (answer === "Planning a business, financial or community project") {
            careerScores["Management Consultant"] += 5;
            careerScores["Business Analyst"] += 4;
            careerScores["Financial Analyst"] += 3;
            careerScores["Civil Services"] += 3;
            careerScores["Policy Analyst"] += 2;
        }

        if (answer === "Leadership and organization") {
            careerScores["Management Consultant"] += 5;
            careerScores["Civil Services"] += 5;
            careerScores["Healthcare Administrator"] += 4;
            careerScores["Business Analyst"] += 3;
        }

        if (answer === "Business, economics, law and public service") {
            careerScores["Lawyer"] += 5;
            careerScores["Civil Services"] += 5;
            careerScores["Policy Analyst"] += 5;
            careerScores["Chartered Accountant"] += 2;
            careerScores["Management Consultant"] += 2;
        }

        if (answer === "Lead organizations, manage resources or influence decisions") {
            careerScores["Civil Services"] += 5;
            careerScores["Management Consultant"] += 5;
            careerScores["Policy Analyst"] += 4;
            careerScores["Business Analyst"] += 3;
            careerScores["Healthcare Administrator"] += 3;
        }

        // Science / Research
        if (answer === "Biology, Psychology or Health") {
            careerScores["Research Scientist"] += 3;
            careerScores["Environmental Scientist"] += 2;
        }

        if (answer === "Computer Science or Mathematics") {
            careerScores["Research Scientist"] += 3;
            careerScores["Mathematician"] += 4;
        }

        // Engineering
        if (answer === "Technology, engineering and computing") {
            careerScores["Robotics & Automation Engineer"] += 3;
            careerScores["Electrical Engineer"] += 2;
            careerScores["Mechanical Engineer"] += 2;
        }

        // Language
        if (answer === "Art, Design or Languages") {
            careerScores["Translator"] += 4;
        }
    });

    // Give a small boost based on the student's stream
if (stream === "Science") {
    careerScores["AI/ML Engineer"] += 3;
    careerScores["Data Scientist"] += 3;
    careerScores["Doctor / Medical Practitioner"] += 3;
    careerScores["Research Scientist"] += 2;
    careerScores["Biotechnology Professional"] += 2;
    careerScores["Software Developer"] += 2;
}

if (stream === "Commerce") {
    careerScores["Chartered Accountant"] += 3;
    careerScores["Financial Analyst"] += 3;
    careerScores["Business Analyst"] += 2;
    careerScores["Marketing Specialist"] += 2;
    careerScores["Management Consultant"] += 2;
}

if (stream === "Arts" || stream === "Humanities") {
    careerScores["Psychologist"] += 3;
    careerScores["Journalist"] += 3;
    careerScores["Graphic Designer"] += 2;
    careerScores["Digital Content Creator"] += 2;
    careerScores["Translator"] += 2;
    careerScores["Teacher / Educator"] += 2;
}

if (stream === "Other") {
    careerScores["Digital Content Creator"] += 1;
    careerScores["Marketing Specialist"] += 1;
    careerScores["Business Analyst"] += 1;
}

    // Find top 3 careers
    const topCareers = Object.entries(careerScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([career]) => career);

    const career = topCareers[0];

    // Save best career locally
    localStorage.setItem("recommendedCareer", career);

    // Save assessment to MongoDB
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
        try {
            const response = await fetch(
                "https://careerai-cagq.onrender.com/api/assessment",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: savedUser.email,
                        recommendedCareer: career,
                        assessmentScores: careerScores
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.error(
                    "Assessment save failed:",
                    data.message
                );
            }

        } catch (error) {
            console.error(
                "Assessment save error:",
                error
            );
        }
    }

    // Go to result page
    navigate("/result", {
        state: {
            career: career,
            topCareers: topCareers,
            scores: careerScores
        }
    });
};


    const handleAnswer = (option) => {

        const updatedAnswers = [...answers, option];

        setAnswers(updatedAnswers);

        if (currentQuestion < questions.length - 1) {

            setCurrentQuestion(currentQuestion + 1);

        } else {

            calculateCareer(updatedAnswers);
        }
    };


    return (
        <div className="dashboard-page">

            <h1>Career Assessment 📝</h1>

            <p>
                Answer these questions to help CareerAI understand
                your interests and strengths.
            </p>

            <div className="dashboard-card">

                <h2>
                    Question {currentQuestion + 1} of {questions.length}
                </h2>

                <h3>
                    {questions[currentQuestion].question}
                </h3>

                {questions[currentQuestion].options.map((option, index) => (

                    <button
                        key={index}
                        className="assessment-option"
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </button>

                ))}

            </div>

        </div>
    );
}

export default Assessment;