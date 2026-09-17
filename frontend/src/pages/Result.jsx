import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    const career = location.state?.career || "Career not available";
    const topCareers = location.state?.topCareers || [career];
    const scores = location.state?.scores || {};

    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    const stream = savedProfile?.stream || "Not specified";

    const careerDetails = {
        "Software Developer": {
            icon: "💻",
            description: "Build software applications and solve technical problems using programming.",
            skills: ["Programming", "JavaScript", "React", "Node.js", "Git & GitHub"],
            education: "B.Tech/B.E. in Computer Science, BCA, MCA or a related field.",
            subjects: ["Programming", "Data Structures", "Databases", "Computer Networks"],
            roadmap: [
                "Learn Programming Fundamentals",
                "Learn Data Structures and Algorithms",
                "Learn Frontend and Backend Development",
                "Learn Databases and APIs",
                "Build Real-World Projects",
                "Create a Portfolio and GitHub Profile",
                "Prepare for Internships and Placements"
            ]
        },

        "AI/ML Engineer": {
            icon: "🤖",
            description: "Build intelligent systems using programming, mathematics, statistics and machine learning.",
            skills: ["Python", "Machine Learning", "Statistics", "Deep Learning", "TensorFlow"],
            education: "B.Tech/B.E. in Computer Science, AI/ML, Data Science or a related field.",
            subjects: ["Python", "Mathematics", "Statistics", "Machine Learning"],
            roadmap: [
                "Learn Python and Mathematics",
                "Learn Statistics and Data Analysis",
                "Learn Machine Learning Fundamentals",
                "Learn Deep Learning",
                "Build AI/ML Projects",
                "Create a Portfolio",
                "Prepare for Internships and Jobs"
            ]
        },

        "Data Scientist": {
            icon: "📊",
            description: "Analyze data, discover patterns and use statistics and machine learning to solve problems.",
            skills: ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization"],
            education: "A degree in Computer Science, Data Science, Mathematics, Statistics or a related field.",
            subjects: ["Mathematics", "Statistics", "Programming", "Data Analysis"],
            roadmap: [
                "Learn Python and Statistics",
                "Learn Data Analysis",
                "Learn SQL and Databases",
                "Learn Machine Learning",
                "Practice Data Visualization",
                "Build Data Science Projects",
                "Create a Portfolio and Prepare for Jobs"
            ]
        },

        "Data Analyst": {
            icon: "📈",
            description: "Work with data and turn information into useful insights for decision-making.",
            skills: ["Excel", "SQL", "Statistics", "Power BI", "Data Visualization"],
            education: "A degree in Computer Science, Statistics, Mathematics, Business or a related field.",
            subjects: ["Mathematics", "Statistics", "Computer Science", "Business"],
            roadmap: [
                "Learn Excel and Data Fundamentals",
                "Learn SQL",
                "Learn Statistics",
                "Learn Data Visualization",
                "Practice Power BI or Tableau",
                "Build Data Analysis Projects",
                "Prepare for Internships and Jobs"
            ]
        },

        "Cybersecurity Analyst": {
            icon: "🔐",
            description: "Protect computer systems, networks and information from security threats.",
            skills: ["Networking", "Linux", "Cybersecurity", "Security Tools"],
            education: "A degree or relevant education in Computer Science, Cybersecurity, IT or a related field.",
            subjects: ["Computer Networks", "Operating Systems", "Cybersecurity", "Programming"],
            roadmap: [
                "Learn Computer Fundamentals",
                "Learn Networking",
                "Learn Operating Systems",
                "Learn Cybersecurity Fundamentals",
                "Practice Security Tools and Labs",
                "Build Security Projects",
                "Prepare for Certifications and Jobs"
            ]
        },

        "Cloud Engineer": {
            icon: "☁️",
            description: "Design, deploy and manage applications and infrastructure using cloud platforms.",
            skills: ["Cloud Computing", "AWS/Azure", "Linux", "Networking", "DevOps"],
            education: "A degree in Computer Science, IT or a related field can provide a strong foundation.",
            subjects: ["Computer Networks", "Operating Systems", "Cloud Computing", "Programming"],
            roadmap: [
                "Learn Linux and Networking",
                "Learn Cloud Computing Fundamentals",
                "Choose a Cloud Platform",
                "Learn Cloud Services and Security",
                "Practice Deployment and Automation",
                "Build Cloud Projects",
                "Prepare for Cloud Certifications and Jobs"
            ]
        },

        "UI/UX Designer": {
            icon: "🎨",
            description: "Design user-friendly digital experiences by combining creativity, research and problem-solving.",
            skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
            education: "A degree or diploma in Design, UI/UX, Computer Science or a related field can be useful.",
            subjects: ["Design", "Art", "Computer Science", "Communication"],
            roadmap: [
                "Learn Design Principles",
                "Learn UI/UX Fundamentals",
                "Learn Figma and Design Tools",
                "Practice User Research and Prototyping",
                "Design Real-World Projects",
                "Create a UX Portfolio",
                "Prepare for Internships and Jobs"
            ]
        },

        "Chartered Accountant": {
            icon: "💰",
            description: "Work with accounting, auditing, taxation and financial information.",
            skills: ["Accounting", "Taxation", "Auditing", "Financial Analysis"],
            education: "Complete the required Chartered Accountancy course and examinations.",
            subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics"],
            roadmap: [
                "Understand the CA Course Structure",
                "Build Accounting Fundamentals",
                "Prepare for CA Foundation",
                "Continue CA Intermediate Studies",
                "Complete Practical Training Requirements",
                "Prepare for CA Final",
                "Qualify as a Chartered Accountant"
            ]
        },

        "Financial Analyst": {
            icon: "💹",
            description: "Analyze financial information and support business and investment decisions.",
            skills: ["Finance", "Excel", "Financial Modeling", "Data Analysis"],
            education: "A degree in Finance, Commerce, Economics, Business or a related field.",
            subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics"],
            roadmap: [
                "Learn Accounting and Financial Fundamentals",
                "Learn Excel and Data Analysis",
                "Learn Financial Modeling",
                "Understand Financial Markets",
                "Practice Financial Analysis",
                "Build Projects and a Portfolio",
                "Prepare for Internships and Jobs"
            ]
        },

        "Business Analyst": {
            icon: "📋",
            description: "Solve business problems and help organizations improve processes and decisions.",
            skills: ["Data Analysis", "Communication", "Problem Solving", "Excel"],
            education: "A degree in Business, Commerce, Economics, Computer Science or a related field.",
            subjects: ["Business Studies", "Economics", "Mathematics", "Computer Science"],
            roadmap: [
                "Learn Business Fundamentals",
                "Learn Excel and Data Analysis",
                "Learn SQL and Databases",
                "Learn Business Requirements and Processes",
                "Practice Data Visualization",
                "Build Business Analysis Projects",
                "Prepare for Internships and Jobs"
            ]
        },

        "Management Consultant": {
            icon: "📊",
            description: "Help organizations solve complex problems and develop effective strategies.",
            skills: ["Problem Solving", "Research", "Communication", "Business Strategy"],
            education: "A bachelor's degree in Business, Economics, Engineering or another relevant field can be a foundation.",
            subjects: ["Business Studies", "Economics", "Mathematics", "Communication"],
            roadmap: [
                "Build Business and Economics Fundamentals",
                "Develop Problem-Solving Skills",
                "Learn Data Analysis",
                "Practice Case Studies",
                "Develop Communication and Presentation Skills",
                "Gain Project or Internship Experience",
                "Prepare for Consulting Interviews"
            ]
        },

        "Marketing Specialist": {
            icon: "📣",
            description: "Use creativity, communication and analytics to promote products, services and ideas.",
            skills: ["Digital Marketing", "Communication", "SEO", "Content Strategy"],
            education: "A degree in Marketing, Business, Commerce, Communication or a related field.",
            subjects: ["Business Studies", "Economics", "Communication", "Computer Applications"],
            roadmap: [
                "Learn Marketing Fundamentals",
                "Learn Digital Marketing",
                "Develop Content and Communication Skills",
                "Learn SEO and Social Media Marketing",
                "Learn Marketing Analytics",
                "Build Marketing Projects or a Portfolio",
                "Prepare for Internships and Jobs"
            ]
        },

        "Doctor / Medical Practitioner": {
            icon: "🩺",
            description: "Work in healthcare, diagnose and treat patients, and contribute to people's wellbeing.",
            skills: ["Biology", "Medical Knowledge", "Communication", "Decision Making"],
            education: "In India, becoming a doctor generally involves medical education such as MBBS followed by required training and registration.",
            subjects: ["Biology", "Physics", "Chemistry"],
            roadmap: [
                "Complete Higher Secondary Education with Science Subjects",
                "Prepare for Medical Entrance Requirements",
                "Complete MBBS",
                "Complete Internship and Required Registration",
                "Choose a Medical Specialization if Desired",
                "Build Clinical Experience",
                "Continue Professional Development"
            ]
        },

        "Pharmacist": {
            icon: "💊",
            description: "Work with medicines, pharmaceutical sciences and patient medication support.",
            skills: ["Pharmacology", "Chemistry", "Biology", "Communication"],
            education: "Common pathways include D.Pharm or B.Pharm, followed by applicable registration requirements.",
            subjects: ["Biology", "Chemistry", "Pharmacy"],
            roadmap: [
                "Complete Higher Secondary Education with Science Subjects",
                "Choose D.Pharm or B.Pharm",
                "Study Pharmaceutical Sciences",
                "Complete Practical Training",
                "Meet Registration Requirements",
                "Gain Experience in Pharmacy or Healthcare",
                "Continue Professional Development"
            ]
        },

        "Biotechnology Professional": {
            icon: "🧬",
            description: "Apply biology and laboratory science to research and biotechnology applications.",
            skills: ["Biology", "Biotechnology", "Laboratory Skills", "Research"],
            education: "A degree in Biotechnology, Life Sciences or a related field is a common starting point.",
            subjects: ["Biology", "Chemistry", "Biotechnology"],
            roadmap: [
                "Build Biology and Chemistry Fundamentals",
                "Complete a Degree in Biotechnology or a Related Field",
                "Learn Laboratory and Research Techniques",
                "Gain Practical Experience Through Projects or Internships",
                "Choose a Specialization",
                "Build Research or Industry Experience",
                "Prepare for Higher Studies or Biotechnology Careers"
            ]
        },

        "Healthcare Administrator": {
            icon: "🏥",
            description: "Manage healthcare operations while supporting efficient delivery of healthcare services.",
            skills: ["Management", "Communication", "Healthcare Knowledge", "Organization"],
            education: "A degree in Healthcare Management, Hospital Administration, Management or a related field can be useful.",
            subjects: ["Biology", "Business Studies", "Management", "Communication"],
            roadmap: [
                "Learn Healthcare and Management Fundamentals",
                "Complete a Degree in Healthcare or Management",
                "Learn Hospital Administration",
                "Develop Communication and Leadership Skills",
                "Gain Healthcare Management Experience",
                "Build Knowledge of Healthcare Operations",
                "Prepare for Healthcare Administration Roles"
            ]
        },

        "Civil Engineer": {
            icon: "🏗️",
            description: "Design and develop infrastructure such as buildings, roads, bridges and other structures.",
            skills: ["Engineering", "AutoCAD", "Mathematics", "Project Management"],
            education: "B.Tech/B.E. in Civil Engineering or a related engineering qualification.",
            subjects: ["Mathematics", "Physics", "Engineering Drawing"],
            roadmap: [
                "Build Mathematics and Physics Fundamentals",
                "Complete a Degree in Civil Engineering",
                "Learn Structural and Construction Fundamentals",
                "Gain Practical Experience Through Projects or Internships",
                "Learn Engineering and Design Software",
                "Build a Technical Portfolio",
                "Prepare for Engineering Roles or Higher Studies"
            ]
        },

        "Mechanical Engineer": {
            icon: "⚙️",
            description: "Design and work with machines, mechanical systems and manufacturing processes.",
            skills: ["CAD", "Mechanics", "Mathematics", "Problem Solving"],
            education: "B.Tech/B.E. in Mechanical Engineering or a related engineering qualification.",
            subjects: ["Mathematics", "Physics", "Mechanical Engineering"],
            roadmap: [
                "Build Mathematics and Physics Fundamentals",
                "Complete a Degree in Mechanical Engineering",
                "Learn Mechanics, Thermodynamics and Manufacturing",
                "Learn CAD and Engineering Design Tools",
                "Gain Practical Experience Through Projects or Internships",
                "Build Technical Projects",
                "Prepare for Engineering Roles or Higher Studies"
            ]
        },

        "Electrical Engineer": {
            icon: "⚡",
            description: "Work with electrical systems, circuits, power systems and control technologies.",
            skills: ["Electrical Systems", "Circuit Design", "Mathematics", "Problem Solving"],
            education: "B.Tech/B.E. in Electrical Engineering or a related engineering qualification.",
            subjects: ["Mathematics", "Physics", "Electrical Engineering"],
            roadmap: [
                "Build Mathematics and Physics Fundamentals",
                "Complete a Degree in Electrical Engineering",
                "Learn Circuits and Electrical Machines",
                "Learn Power Systems and Control Systems",
                "Gain Practical Experience Through Projects or Internships",
                "Build Electrical Projects",
                "Prepare for Engineering Roles or Higher Studies"
            ]
        },

        "Robotics & Automation Engineer": {
            icon: "🤖",
            description: "Combine programming, electronics and engineering to build automated and robotic systems.",
            skills: ["Robotics", "Programming", "Electronics", "Automation"],
            education: "Engineering degrees in Robotics, Mechatronics, Electronics, Mechanical or related areas can provide a foundation.",
            subjects: ["Mathematics", "Physics", "Programming", "Electronics"],
            roadmap: [
                "Build Mathematics and Physics Fundamentals",
                "Learn Programming Fundamentals",
                "Study Electronics and Control Systems",
                "Learn Robotics and Automation",
                "Practice with Robotics Projects",
                "Gain Practical Experience Through Projects or Internships",
                "Prepare for Robotics and Automation Roles"
            ]
        },

        "Lawyer": {
            icon: "⚖️",
            description: "Use legal knowledge, research and communication skills to work on legal matters.",
            skills: ["Legal Research", "Communication", "Critical Thinking", "Writing"],
            education: "Common routes include an integrated law degree after school or an LL.B. after completing a bachelor's degree.",
            subjects: ["Political Science", "History", "English", "Economics"],
            roadmap: [
                "Build Strong Communication and Reading Skills",
                "Complete an LL.B. or Integrated Law Degree",
                "Study Core Areas of Law",
                "Develop Legal Research and Writing Skills",
                "Gain Practical Experience Through Internships",
                "Choose a Legal Area to Specialize In",
                "Prepare for Relevant Legal Career Opportunities"
            ]
        },

        "Civil Services": {
            icon: "🏛️",
            description: "Work in public administration and contribute to governance and public service.",
            skills: ["General Knowledge", "Communication", "Leadership", "Analytical Thinking"],
            education: "A bachelor's degree is generally required for the UPSC Civil Services Examination, subject to official eligibility rules.",
            subjects: ["History", "Geography", "Political Science", "Economics"],
            roadmap: [
                "Complete a Bachelor's Degree",
                "Understand the Civil Services Examination",
                "Choose the Examination Optional Subject",
                "Build General Studies and Current Affairs Knowledge",
                "Practice Previous Papers and Mock Tests",
                "Appear for the Examination Stages",
                "Complete Training After Selection"
            ]
        },

        "Policy Analyst": {
            icon: "📜",
            description: "Research public issues and analyze policies, data and government decisions.",
            skills: ["Research", "Data Analysis", "Writing", "Critical Thinking"],
            education: "Degrees in Economics, Political Science, Public Policy, Law or related fields can provide a foundation.",
            subjects: ["Political Science", "Economics", "History", "Statistics"],
            roadmap: [
                "Build Knowledge of Economics and Government",
                "Complete a Relevant Bachelor's Degree",
                "Develop Research and Data Analysis Skills",
                "Learn Public Policy Concepts",
                "Work on Policy Research Projects",
                "Gain Internship or Research Experience",
                "Prepare for Policy and Research Roles"
            ]
        },

        "Graphic Designer": {
            icon: "🎨",
            description: "Create visual designs that communicate ideas, information and stories.",
            skills: ["Photoshop", "Illustrator", "Typography", "Visual Design"],
            education: "A degree or diploma in Graphic Design, Visual Communication, Fine Arts or a related area can be useful.",
            subjects: ["Art", "Design", "Computer Applications", "Communication"],
            roadmap: [
                "Learn Design Fundamentals",
                "Learn Graphic Design Software",
                "Practice Typography and Visual Communication",
                "Create Design Projects",
                "Build a Design Portfolio",
                "Gain Freelance or Internship Experience",
                "Apply for Design Opportunities"
            ]
        },

        "Digital Content Creator": {
            icon: "📱",
            description: "Create digital content and communicate ideas to audiences through online platforms.",
            skills: ["Content Creation", "Video Editing", "Communication", "Social Media"],
            education: "Formal requirements vary; skills, creativity, communication and a strong portfolio are especially useful.",
            subjects: ["Communication", "Media", "Design", "Computer Applications"],
            roadmap: [
                "Choose a Content Niche",
                "Learn Content Creation Fundamentals",
                "Develop Writing, Video or Design Skills",
                "Learn Social Media Platforms and Analytics",
                "Create and Publish Consistently",
                "Build an Audience and Portfolio",
                "Explore Professional Content Opportunities"
            ]
        },

        "Journalist": {
            icon: "📰",
            description: "Research, verify and communicate information through journalism and media.",
            skills: ["Writing", "Research", "Communication", "Critical Thinking"],
            education: "A degree in Journalism, Mass Communication or a related field can be useful.",
            subjects: ["English", "Political Science", "History", "Communication"],
            roadmap: [
                "Build Strong Writing and Communication Skills",
                "Study Journalism or Mass Communication",
                "Learn News Research and Reporting",
                "Develop Interviewing and Fact-Checking Skills",
                "Create a Journalism Portfolio",
                "Gain Experience Through Internships",
                "Apply for Journalism and Media Roles"
            ]
        },

        "Animator": {
            icon: "🎬",
            description: "Create animated visuals and stories using drawing, design and animation techniques.",
            skills: ["Animation", "Storytelling", "3D Design", "Visual Arts"],
            education: "A degree or diploma in Animation, Multimedia, Fine Arts or a related field can be useful.",
            subjects: ["Art", "Design", "Computer Applications", "Animation"],
            roadmap: [
                "Learn Drawing and Design Fundamentals",
                "Learn 2D or 3D Animation",
                "Learn Animation Software",
                "Practice Character and Motion Design",
                "Create Animation Projects",
                "Build a Demo Reel and Portfolio",
                "Prepare for Animation Opportunities"
            ]
        },

        "Psychologist": {
            icon: "🧠",
            description: "Study human behaviour and support people through psychology-related work.",
            skills: ["Psychology", "Communication", "Research", "Empathy"],
            education: "Psychology degrees are a common starting point; specific professional roles may require postgraduate study and additional requirements.",
            subjects: ["Psychology", "Biology", "Sociology", "Communication"],
            roadmap: [
                "Complete a Bachelor's Degree in Psychology",
                "Build Knowledge of Human Behaviour",
                "Develop Research and Communication Skills",
                "Complete Relevant Postgraduate Study for Desired Roles",
                "Gain Supervised Practical Experience Where Required",
                "Choose a Psychology Specialization",
                "Continue Professional Development"
            ]
        },

        "Teacher / Educator": {
            icon: "👩‍🏫",
            description: "Help students learn by explaining concepts, guiding learning and supporting development.",
            skills: ["Communication", "Subject Knowledge", "Teaching", "Leadership"],
            education: "Requirements vary by teaching level and institution and may include relevant teacher education or training.",
            subjects: ["Your chosen subject", "Communication", "Education", "Psychology"],
            roadmap: [
                "Build Strong Subject Knowledge",
                "Complete a Relevant Bachelor's Degree",
                "Complete Required Teacher Education or Training",
                "Develop Teaching and Communication Skills",
                "Gain Classroom or Practical Experience",
                "Meet Relevant Teaching Eligibility Requirements",
                "Apply for Teaching Opportunities"
            ]
        },

        "Translator": {
            icon: "🌐",
            description: "Convert written or spoken information between languages while preserving meaning and context.",
            skills: ["Language Skills", "Writing", "Communication", "Cultural Awareness"],
            education: "Study languages, linguistics, translation or a related field and develop strong proficiency in the languages you work with.",
            subjects: ["Languages", "English", "Linguistics", "Communication"],
            roadmap: [
                "Develop Strong Skills in Two or More Languages",
                "Study Languages, Linguistics or Translation",
                "Practice Translation and Writing",
                "Learn Translation Tools and Techniques",
                "Build a Translation Portfolio",
                "Gain Freelance or Internship Experience",
                "Apply for Translation Opportunities"
            ]
        },

        "Environmental Scientist": {
            icon: "🌱",
            description: "Study environmental systems and help address environmental and sustainability challenges.",
            skills: ["Environmental Science", "Research", "Data Analysis", "Field Work"],
            education: "A degree in Environmental Science, Biology, Chemistry, Geography or a related field can provide a foundation.",
            subjects: ["Biology", "Chemistry", "Geography", "Environmental Science"],
            roadmap: [
                "Build Biology, Chemistry and Geography Fundamentals",
                "Complete a Relevant Science or Environmental Degree",
                "Learn Environmental Research Methods",
                "Study Environmental Issues and Sustainability",
                "Gain Field or Research Experience",
                "Work on Environmental Projects",
                "Prepare for Environmental Science Roles or Higher Studies"
            ]
        },

        "Research Scientist": {
            icon: "🔬",
            description: "Conduct scientific research, experiments and analysis to develop new knowledge.",
            skills: ["Research", "Scientific Methods", "Data Analysis", "Critical Thinking"],
            education: "A relevant science degree is a starting point; advanced research roles commonly require postgraduate study.",
            subjects: ["Science", "Mathematics", "Research Methods", "Statistics"],
            roadmap: [
                "Build Strong Science Fundamentals",
                "Complete a Relevant Bachelor's Degree",
                "Develop Research and Data Analysis Skills",
                "Gain Laboratory or Research Experience",
                "Pursue Postgraduate Study for Advanced Research Roles",
                "Work on Research Projects and Publications",
                "Build a Career in Research or R&D"
            ]
        },

        "Mathematician": {
            icon: "➗",
            description: "Use advanced mathematics, logical reasoning and problem-solving to work in research and analytical fields.",
            skills: ["Mathematics", "Logical Thinking", "Problem Solving", "Research"],
            education: "A bachelor's degree in Mathematics or a related field is a common foundation, with postgraduate study useful for advanced research roles.",
            subjects: ["Mathematics", "Statistics", "Computer Science", "Logic"],
            roadmap: [
                "Build Strong Mathematics Fundamentals",
                "Complete a Bachelor's Degree in Mathematics or a Related Field",
                "Develop Skills in Advanced Mathematics",
                "Learn Mathematical Modeling and Problem Solving",
                "Gain Research or Project Experience",
                "Pursue Postgraduate Study for Advanced or Research Roles",
                "Prepare for Mathematics, Research, Teaching, or Analytical Careers"
            ]
        }
    };

    const details = careerDetails[career];

    const maxScore = Math.max(...Object.values(scores), 1);
    const relativeMatch = Math.round(
        ((scores[career] || 0) / maxScore) * 100
    );

    const viewCareer = (careerName) => {
        const selectedCareer = careerDetails[careerName];

        if (!selectedCareer) return;

        navigate("/career-details", {
            state: {
                career: {
                    title: careerName,
                    icon: selectedCareer.icon,
                    description: selectedCareer.description,
                    details: selectedCareer.description,
                    skills: selectedCareer.skills,
                    education: selectedCareer.education,
                    subjects: selectedCareer.subjects,
                    roadmap: selectedCareer.roadmap
                }
            }
        });
    };

    return (
        <div className="dashboard-page">

            <div className="dashboard-card">

                <h1>🎯 Your Career Matches</h1>

                <p>
                    Based on your assessment answers, CareerAI found
                    career paths that may match your interests and strengths.
                </p>

                <div className="dashboard-card">
                <h3>🎓 Your Stream</h3>
                <p>{stream}</p>
                </div>
            
                <div className="dashboard-card">
    <h2>🥇 Best Career Match</h2>

    <h1>
        {careerDetails[career]?.icon} {career}
    </h1>
</div>

                <div className="dashboard-card">
                    <h3>📊 Match Strength</h3>

                    <p>
                        Your score: <strong>{scores[career] || 0} points</strong>
                    </p>

                    <p>
                        Relative match: <strong>{relativeMatch}%</strong>
                    </p>

                    <div
                        style={{
                            width: "100%",
                            height: "12px",
                            background: "#eee",
                            borderRadius: "10px",
                            overflow: "hidden"
                        }}
                    >
                        <div
                            style={{
                                width: `${relativeMatch}%`,
                                height: "100%",
                                background: "#222",
                                borderRadius: "10px"
                            }}
                        />
                    </div>
                </div>

                {details && (
                    <>
                        <div className="dashboard-card">
                            <h3>💡 Why this career?</h3>
                            <p>{details.description}</p>
                        </div>

                        <div className="dashboard-card">
                            <h3>🛠️ Key Skills</h3>

                            <ul>
                                {details.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="dashboard-card">
                            <h3>🎓 Education Path</h3>
                            <p>{details.education}</p>
                        </div>

                        <div className="dashboard-card">
                            <h3>📚 Important Subjects</h3>

                            <ul>
                                {details.subjects.map((subject, index) => (
                                    <li key={index}>{subject}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="dashboard-card">
                            <h3>🗺️ Career Roadmap</h3>

                            <ol>
                                {details.roadmap.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </>
                )}

                <h2>⭐ Your Top Career Matches</h2>

                <ol>
                    {topCareers.map((careerName, index) => (
                        <li key={careerName}>
                            <strong>{careerName}</strong>
                            {" — "}
                            {scores[careerName] || 0} points

                            <br />

                            <button
                                className="career-details-btn"
                                onClick={() => viewCareer(careerName)}
                            >
                                View Career Details →
                            </button>
                        </li>
                    ))}
                </ol>

                <h2>📊 Assessment Scores</h2>

                <ul>
                    {Object.entries(scores)
                        .sort((a, b) => b[1] - a[1])
                        .map(([careerName, score]) => (
                            <li key={careerName}>
                                <strong>{careerName}:</strong>{" "}
                                {score} points
                            </li>
                        ))}
                </ul>

                <button
                    className="career-details-btn"
                    onClick={() => navigate("/careers")}
                >
                    🔎 Explore Careers
                </button>

                <button
                    className="career-details-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    ← Back to Dashboard
                </button>

            </div>

        </div>
    );
}

export default Result;