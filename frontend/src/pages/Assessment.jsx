import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Assessment() {

    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            question: "Which activity do you enjoy the most?",
            options: [
                "Programming",
                "Designing",
                "Helping People",
                "Managing Projects"
            ]
        },
        {
            question: "Which subject interests you the most?",
            options: [
                "Computer Science",
                "Mathematics",
                "Business",
                "Psychology"
            ]
        },
        {
            question: "What type of job do you prefer?",
            options: [
                "Solving technical problems",
                "Working with people",
                "Leading a team"
            ]
        },
        {
            question: "Which skill do you like to improve?",
            options: [
                "Coding",
                "Creativity",
                "Communication",
                "Leadership"
            ]
        },
        {
            question: "What kind of career environment do you prefer?",
            options: [
                "Technology",
                "Creativity",
                "Social",
                "Business"
            ]
        }
    ];


 const calculateCareer = async (answers) => {

    let technology = 0;
    let creative = 0;
    let social = 0;
    let business = 0;

    answers.forEach((answer) => {

        switch (answer) {

            case "Programming":
                technology += 3;
                break;

            case "Designing":
                creative += 3;
                break;

            case "Helping People":
                social += 3;
                break;

            case "Managing Projects":
                business += 3;
                break;


            case "Computer Science":
                technology += 3;
                break;

            case "Mathematics":
                technology += 2;
                break;

            case "Business":
                business += 3;
                break;

            case "Psychology":
                social += 3;
                break;


            case "Solving technical problems":
                technology += 3;
                break;

            case "Working with people":
                social += 3;
                break;

            case "Leading a team":
                business += 3;
                break;


            case "Coding":
                technology += 3;
                break;

            case "Creativity":
                creative += 3;
                break;

            case "Communication":
                social += 3;
                break;

            case "Leadership":
                business += 3;
                break;


            case "Technology":
                technology += 3;
                break;

            case "Social":
                social += 3;
                break;

            default:
                break;
        }
    });


    const scores = {
        "Software Developer": technology,
        "UI/UX Designer": creative,
        "HR / Counselor": social,
        "Project Manager": business
    };


    const career = Object.keys(scores).reduce((best, current) =>
        scores[current] > scores[best] ? current : best
    );


    // Save career locally
    localStorage.setItem("recommendedCareer", career);


    // Save career to MongoDB
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {

        try {

            const response = await fetch(
                "http://localhost:5000/api/assessment",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: savedUser.email,
                        recommendedCareer: career,
                        assessmentScores: scores
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


    navigate("/result", {
        state: {
            career: career,
            scores: scores
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