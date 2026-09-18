import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Careers() {

    const navigate = useNavigate();

    const [recommendations, setRecommendations] = useState([]);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");

    useEffect(() => {
        const loadRecommendations = async () => {

            const savedUser = JSON.parse(localStorage.getItem("user"));

            if (!savedUser) {
                return;
            }

            try {
                const response = await fetch(
                    `https://careerai-cagq.onrender.com/api/recommendations/${savedUser.email}`
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
    // 💻 Technology & Digital
    {
    title: "Software Developer",
    icon: "💻",
    category: "Technology",
    description: "Build websites, applications, and software solutions.",
    skills: ["JavaScript", "React", "Node.js", "Git"],
    education: "B.Tech / B.E. in Computer Science, BCA, MCA, or related programs",
    subjects: ["Programming", "Data Structures", "Database Systems", "Computer Networks"],
    roadmap: [
        "Learn Programming Fundamentals",
        "Learn Data Structures and Algorithms",
        "Learn Frontend and Backend Developement",
        "Learn Databases and APIs",
        "Build Real-World Projects",
        "Create a portfolio and GitHub Profile",
        "Prepare for Internships and Placements"
    ],
    details: "Software developers design, build, test, and maintain software applications."
},
    {
        title: "AI/ML Engineer",
        icon: "🤖",
        category: "Technology",
        description: "Develop intelligent systems using artificial intelligence and machine learning.",
        skills: ["Python", "Machine Learning", "Statistics", "TensorFlow"],
        
        education: "B.Tech / B.E. in Computer Science, AI, Data Science, or related programs",
        subjects: ["Programming", "Mathematics", "Machine Learning", "Statistics"],
        roadmap: [
        "Learn Python and Mathematics",
        "Learn Statistics and Data Analysis",
        "Learn Machine Learning Fundamentals",
        "Learn Deep Learning",
        "Build AI/ML Projects",
        "Create a Portfolio",
        "Prepare for Internships and Jobs"
        ],
        details: "AI/ML engineers build intelligent systems that learn from data and solve complex problems."
    },
    {
        title: "Data Scientist",
        icon: "📈",
        category: "Technology",
        description: "Use data, statistics, and machine learning to solve real-world problems.",
        skills: ["Python", "SQL", "Statistics", "Machine Learning"],
        
        education: "B.Tech / B.E., B.Sc., or BCA/MCA in Computer Science, Data Science, Mathematics, or related fields",
        subjects: ["Statistics", "Mathematics", "Python", "Machine Learning"],
        roadmap: [
        "Learn Python and Statistics",
        "Learn Data Analysis",
        "Learn SQL and Databases",
        "Learn Machine Learning",
        "Practice Data Visualization",
        "Build Data Science Projects",
        "Create a Portfolio and Prepare for Jobs"
        ],
        details: "Data scientists analyze large datasets and build models to discover patterns and support decisions."
    
    },
    {
        title: "Data Analyst",
        icon: "📊",
        category: "Technology",
        description: "Analyze data and turn information into useful insights.",
        skills: ["Python", "SQL", "Excel", "Data Visualization"],
        
        education: "B.Tech / B.E., BCA, B.Sc., B.Com, or related programs",
        subjects: ["Statistics", "Excel", "Database Systems", "Data Visualization"],
        roadmap: [
        "Learn Excel and Data Fundamentals",
        "Learn SQL",
        "Learn Statistics",
        "Learn Data Visualization",
        "Practice Power BI or Tableau",
        "Build Data Analysis Projects",
        "Prepare for Internships and Jobs"
        ],
        details: "Data analysts examine data, identify patterns, and create insights that help organizations make decisions."
    },
    {
        title: "Cybersecurity Analyst",
        icon: "🔐",
        category: "Technology",
        description: "Help protect systems, networks, and data from security threats.",
        skills: ["Networking", "Linux", "Security", "Ethical Hacking"],
        
        education: "B.Tech / B.E. in Computer Science, Cybersecurity, IT, or related programs",
        subjects: ["Computer Networks", "Operating Systems", "Cybersecurity", "Programming"],
        roadmap: [
        "Learn Computer Fundamentals",
        "Learn Networking",
        "Learn Operating Systems",
        "Learn Cybersecurity Fundamentals",
        "Practice Security Tools and Labs",
        "Build Security Projects",
        "Prepare for Security Certifications and Jobs"
    ],
    details: "Cybersecurity analysts help protect computer systems, networks, and information from security threats."
    },
    {
        title: "Cloud Engineer",
        icon: "☁️",
        category: "Technology",
        description: "Build and manage applications and infrastructure in the cloud.",
        skills: ["AWS", "Cloud Computing", "Linux", "DevOps"],
        
        education: "B.Tech / B.E. in Computer Science, IT, or related programs",
        subjects: ["Computer Networks", "Operating Systems", "Cloud Computing", "Programming"],
        roadmap: [
        "Learn Linux and Networking",
        "Learn Cloud Computing Fundamentals",
        "Choose a Cloud Platform",
        "Learn Cloud Services and Security",
        "Practice Deployment and Automation",
        "Build Cloud Projects",
        "Prepare for Cloud Certifications and Jobs"
    ],
    details: "Cloud engineers design and manage cloud-based infrastructure, applications, and services."
    },
    {
        title: "UI/UX Designer",
        icon: "🎨",
        category: "Creative & Technology",
        description: "Design user-friendly and visually appealing digital experiences.",
        skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
        
        education: "Degree or diploma in Design, UI/UX, Computer Science, or related fields",
        subjects: ["Design Principles", "User Experience", "Graphic Design", "Human-Computer Interaction"],
        roadmap: [
        "Learn Design Principles",
        "Learn UI/UX Fundamentals",
        "Learn Figma and Design Tools",
        "Practice User Research and Prototyping",
        "Design Real-World Projects",
        "Create a UX Portfolio",
        "Prepare for Internships and Jobs"
    ],
    details: "UI/UX designers create user-friendly interfaces and improve how people interact with digital products."
    },

    // 💼 Business, Finance & Management
    {
        title: "Chartered Accountant",
        icon: "📑",
        category: "Finance & Business",
        description: "Work with accounting, taxation, auditing, and financial management.",
        skills: ["Accounting", "Taxation", "Auditing", "Financial Analysis"],
        education: "CA qualification through the ICAI pathway",
        subjects: ["Accounting", "Taxation", "Auditing", "Financial Management"],
        roadmap: [
        "Understand the CA Course Structure",
        "Build Accounting Fundamentals",
        "Prepare for CA Foundation",
        "Continue CA Intermediate Studies",
        "Complete Practical Training Requirements",
        "Prepare for CA Final",
        "Qualify as a Chartered Accountant"
    ],
        details: "Chartered accountants work in areas such as accounting, auditing, taxation, and financial reporting.",

    },
    {
        title: "Financial Analyst",
        icon: "💰",
        category: "Finance & Business",
        description: "Analyze financial information to support business and investment decisions.",
        skills: ["Finance", "Excel", "Financial Modeling", "Data Analysis"],
        
        education: "B.Com, BBA, B.Tech, Economics, Finance, or related degree",
        subjects: ["Accounting", "Finance", "Economics", "Statistics"],
        roadmap: [
        "Learn Accounting and Financial Fundamentals",
        "Learn Excel and Data Analysis",
        "Learn Financial Modeling",
        "Understand Financial Markets",
        "Practice Financial Analysis",
        "Build Projects and a Portfolio",
        "Prepare for Internships and Jobs"
    ],
    details: "Financial analysts study financial data and business performance to support financial decisions."
    },
    {
        title: "Business Analyst",
        icon: "📋",
        category: "Business",
        description: "Identify business problems and help organizations improve their processes.",
        skills: ["Data Analysis", "Communication", "Problem Solving", "Excel"],
        
        education: "Degree in Business, Computer Science, Economics, Engineering, or related fields",
        subjects: ["Business Analysis", "Statistics", "Database Systems", "Communication"],
        roadmap: [
        "Learn Business Fundamentals",
        "Learn Excel and Data Analysis",
        "Learn SQL and Databases",
        "Learn Business Requirements and Processes",
        "Practice Data Visualization",
        "Build Business Analysis Projects",
        "Prepare for Internships and Jobs"
    ],
    details: "Business analysts connect business needs with practical solutions and help improve organizational processes."
    },
    {
        title: "Management Consultant",
        icon: "💼",
        category: "Business",
        description: "Help organizations solve problems and improve their performance.",
        skills: ["Problem Solving", "Research", "Communication", "Business Strategy"],
        
        education: "Degree in Business, Economics, Engineering, Commerce, or related fields",
        subjects: ["Business Management", "Economics", "Statistics", "Communication"],
        roadmap: [
        "Build Business and Economics Fundamentals",
        "Develop Problem-Solving Skills",
        "Learn Data Analysis",
        "Practice Case Studies",
        "Develop Communication and Presentation Skills",
        "Gain Project or Internship Experience",
        "Prepare for Consulting Interviews"
    ],
    details: "Management consultants analyze organizational challenges and recommend strategies for improvement.",
    },
    {
        title: "Marketing Specialist",
        icon: "📣",
        category: "Business & Media",
        description: "Promote products, services, and organizations through marketing strategies.",
        skills: ["Digital Marketing", "Communication", "SEO", "Content Strategy"],
        
        education: "Degree in Marketing, Business Administration, Commerce, Mass Communication, or related fields",
        subjects: ["Marketing", "Consumer Behaviour", "Business Management", "Communication"],
        roadmap: [
        "Learn Marketing Fundamentals",
        "Learn Digital Marketing",
        "Develop Content and Communication Skills",
        "Learn SEO and Social Media Marketing",
        "Learn Marketing Analytics",
        "Build Marketing Projects or a Portfolio",
        "Prepare for Internships and Jobs"
    ],
    details: "Marketing specialists develop campaigns and strategies to connect organizations with their audiences.",
    },

    // 🏥 Healthcare & Life Sciences
    {
        title: "Doctor / Medical Practitioner",
        icon: "🩺",
        category: "Healthcare",
        description: "Diagnose and treat patients while helping improve their health.",
        skills: ["Biology", "Medical Knowledge", "Communication", "Decision Making"],
        
        education: "MBBS followed by specialization for specialist roles",
        subjects: ["Biology", "Chemistry", "Anatomy", "Physiology"],
        roadmap: [
        "Complete Higher Secondary Education with Science Subjects",
        "Prepare for Medical Entrance Requirements",
        "Complete MBBS",
        "Complete Internship and Required Registration",
        "Choose a Medical Specialization if Desired",
        "Build Clinical Experience",
        "Continue Professional Development"
    ],
    details: "Medical practitioners diagnose and treat health conditions and provide patient care."
    },
    {
        title: "Pharmacist",
        icon: "💊",
        category: "Healthcare",
        description: "Work with medicines, their safe use, and patient guidance.",
        skills: ["Pharmacology", "Chemistry", "Biology", "Communication"],
        
        education: "D.Pharm or B.Pharm from a recognized institution",
        subjects: ["Pharmaceutics", "Pharmacology", "Chemistry", "Biology"],
        roadmap: [
        "Complete Higher Secondary Education with Science Subjects",
        "Choose D.Pharm or B.Pharm",
        "Study Pharmaceutical Sciences",
        "Complete Practical Training",
        "Meet Registration Requirements",
        "Gain Experience in Pharmacy or Healthcare",
        "Continue Professional Development"
    ],
    details: "Pharmacists work with medicines and help ensure their safe and appropriate use."
    },
    {
        title: "Biotechnology Professional",
        icon: "🧬",
        category: "Life Sciences",
        description: "Apply biology and technology to research, healthcare, agriculture, and industry.",
        skills: ["Biology", "Biotechnology", "Laboratory Skills", "Research"],
        
        education: "B.Tech / B.Sc. in Biotechnology or related life-science programs",
        subjects: ["Biology", "Biochemistry", "Genetics", "Microbiology"],
        roadmap: [
        "Build Biology and Chemistry Fundamentals",
        "Complete a Degree in Biotechnology or a Related Field",
        "Learn Laboratory and Research Techniques",
        "Gain Practical Experience Through Projects or Internships",
        "Choose a Specialization",
        "Build Research or Industry Experience",
        "Prepare for Higher Studies or Biotechnology Careers"
    ],
    details: "Biotechnology professionals use biological science and technology to develop useful products and solutions.",
    },
    {
        title: "Healthcare Administrator",
        icon: "🏥",
        category: "Healthcare",
        description: "Manage healthcare organizations, services, and operations.",
        skills: ["Management", "Communication", "Healthcare Knowledge", "Organization"],
        
        education: "Degree in Healthcare Administration, Hospital Management, Business Administration, or a related field",
        subjects: ["Healthcare Management", "Hospital Administration", "Finance", "Communication"],
        roadmap: [
        "Learn Healthcare and Management Fundamentals",
        "Complete a Degree in Healthcare or Management",
        "Learn Hospital Administration",
        "Develop Communication and Leadership Skills",
        "Gain Healthcare Management Experience",
        "Build Knowledge of Healthcare Operations",
        "Prepare for Healthcare Administration Roles"
    ],
    details: "Healthcare administrators help manage the operations and services of healthcare organizations."
    },

    // ⚙️ Engineering & Manufacturing
    {
        title: "Civil Engineer",
        icon: "🏗️",
        category: "Engineering",
        description: "Design and develop infrastructure such as buildings, roads, and bridges.",
        skills: ["Engineering", "AutoCAD", "Mathematics", "Project Management"],
        
        education: "B.Tech / B.E. in Civil Engineering",
        subjects: ["Engineering Mechanics", "Structural Engineering", "Surveying", "Construction Materials"],
        roadmap: [
        "Build Mathematics and Physics Fundamentals",
        "Complete a Degree in Civil Engineering",
        "Learn Structural and Construction Fundamentals",
        "Gain Practical Experience Through Projects or Internships",
        "Learn Engineering and Design Software",
        "Build a Technical Portfolio",
        "Prepare for Engineering Roles or Higher Studies"
    ],
    details: "Civil engineers plan, design, and help construct infrastructure and public works."
    },
    {
        title: "Mechanical Engineer",
        icon: "⚙️",
        category: "Engineering",
        description: "Design and develop machines, mechanical systems, and equipment.",
        skills: ["CAD", "Mechanics", "Mathematics", "Problem Solving"],
        
        education: "B.Tech / B.E. in Mechanical Engineering",
        subjects: ["Engineering Mechanics", "Thermodynamics", "Machine Design", "Manufacturing"],
        roadmap: [
        "Build Mathematics and Physics Fundamentals",
        "Complete a Degree in Mechanical Engineering",
        "Learn Mechanics, Thermodynamics and Manufacturing",
        "Learn CAD and Engineering Design Tools",
        "Gain Practical Experience Through Projects or Internships",
        "Build Technical Projects",
        "Prepare for Engineering Roles or Higher Studies"
    ],
    details: "Mechanical engineers work with machines, mechanical systems, manufacturing, and product development."
    },
    {
        title: "Electrical Engineer",
        icon: "⚡",
        category: "Engineering",
        description: "Work with electrical systems, power, electronics, and control systems.",
        skills: ["Electrical Systems", "Circuit Design", "Mathematics", "Problem Solving"],
        
        education: "B.Tech / B.E. in Electrical Engineering",
        subjects: ["Electrical Circuits", "Power Systems", "Electrical Machines", "Control Systems"],
        roadmap: [
        "Build Mathematics and Physics Fundamentals",
        "Complete a Degree in Electrical Engineering",
        "Learn Circuits and Electrical Machines",
        "Learn Power Systems and Control Systems",
        "Gain Practical Experience Through Projects or Internships",
        "Build Electrical Projects",
        "Prepare for Engineering Roles or Higher Studies"
    ],
    details: "Electrical engineers design and work with electrical systems, equipment, and power technologies.",
    },
    {
        title: "Robotics & Automation Engineer",
        icon: "🦾",
        category: "Engineering & Technology",
        description: "Build automated machines and robotic systems.",
        skills: ["Robotics", "Programming", "Electronics", "Automation"],
        
        education: "B.Tech / B.E. in Robotics, Mechatronics, Mechanical, Electrical, or related fields",
        subjects: ["Robotics", "Control Systems", "Programming", "Automation"],
        roadmap: [
        "Build Mathematics and Physics Fundamentals",
        "Learn Programming Fundamentals",
        "Study Electronics and Control Systems",
        "Learn Robotics and Automation",
        "Practice with Robotics Projects",
        "Gain Practical Experience Through Projects or Internships",
        "Prepare for Robotics and Automation Roles"
    ],
    details: "Robotics and automation engineers develop systems that automate tasks and processes.",
    },

    // ⚖️ Law, Government & Public Service
    {
        title: "Lawyer",
        icon: "⚖️",
        category: "Law",
        description: "Help people and organizations understand and navigate legal matters.",
        skills: ["Legal Research", "Communication", "Critical Thinking", "Writing"],
        
        education: "LL.B. or integrated law degree such as B.A. LL.B.",
        subjects: ["Constitutional Law", "Contract Law", "Criminal Law", "Legal Research"],
        roadmap: [
        "Build Strong Communication and Reading Skills",
        "Complete an LL.B. or Integrated Law Degree",
        "Study Core Areas of Law",
        "Develop Legal Research and Writing Skills",
        "Gain Practical Experience Through Internships",
        "Choose a Legal Area to Specialize In",
        "Prepare for Relevant Legal Career Opportunities"
    ],
    details: "Lawyers provide legal advice and representation and work with laws and legal procedures."
    },
    {
        title: "Civil Services",
        icon: "🏛️",
        category: "Government & Public Service",
        description: "Serve in public administration and contribute to government and society.",
        skills: ["General Knowledge", "Communication", "Leadership", "Analytical Thinking"],
        
        education: "Bachelor's degree in any recognized discipline; specific eligibility depends on the examination",
        subjects: ["General Studies", "Current Affairs", "History", "Public Administration"],
        roadmap: [
        "Complete a Bachelor's Degree",
        "Understand the Civil Services Examination",
        "Choose the Examination Optional Subject",
        "Build General Studies and Current Affairs Knowledge",
        "Practice Previous Papers and Mock Tests",
        "Appear for the Examination Stages",
        "Complete Training After Selection"
    ],
    details: "Civil services careers involve public administration and government responsibilities. Specific eligibility and examinations depend on the service."
    },
    {
        title: "Policy Analyst",
        icon: "📜",
        category: "Government & Public Policy",
        description: "Research public issues and help develop and evaluate policies.",
        skills: ["Research", "Data Analysis", "Writing", "Critical Thinking"],
        
        education: "Degree in Economics, Political Science, Public Policy, Law, or related fields",
        subjects: ["Public Policy", "Economics", "Political Science", "Research Methods"],
        roadmap: [
        "Build Knowledge of Economics and Government",
        "Complete a Relevant Bachelor's Degree",
        "Develop Research and Data Analysis Skills",
        "Learn Public Policy Concepts",
        "Work on Policy Research Projects",
        "Gain Internship or Research Experience",
        "Prepare for Policy and Research Roles"
    ],
    details: "Policy analysts research social and economic issues and evaluate possible policy solutions.",
    },

    // 🎬 Arts, Media & Creative
    {
        title: "Graphic Designer",
        icon: "🖌️",
        category: "Creative",
        description: "Create visual designs for digital and print media.",
        skills: ["Photoshop", "Illustrator", "Typography", "Visual Design"],
        
        education: "Degree or diploma in Graphic Design, Visual Communication, Fine Arts, or related fields",
        subjects: ["Graphic Design", "Typography", "Visual Communication", "Digital Design"],
        roadmap: [
        "Learn Design Fundamentals",
        "Learn Graphic Design Software",
        "Practice Typography and Visual Communication",
        "Create Design Projects",
        "Build a Design Portfolio",
        "Gain Freelance or Internship Experience",
        "Apply for Design Opportunities"
    ],
    details: "Graphic designers create visual content for brands, publications, websites, and other media."
    },
    {
        title: "Digital Content Creator",
        icon: "🎥",
        category: "Media",
        description: "Create engaging digital content for online audiences.",
        skills: ["Content Creation", "Video Editing", "Communication", "Social Media"],
        
        education: "Degree or diploma in Media, Journalism, Communication, Marketing, Design, or related fields; formal degree is not always required",
        subjects: ["Content Creation", "Communication", "Digital Media", "Marketing"],
        roadmap: [
        "Choose a Content Niche",
        "Learn Content Creation Fundamentals",
        "Develop Writing, Video or Design Skills",
        "Learn Social Media Platforms and Analytics",
        "Create and Publish Consistently",
        "Build an Audience and Portfolio",
        "Explore Professional Content Opportunities"
    ],
    details: "Content creators develop videos, posts, articles, and other digital media for online platforms."
    },
    {
        title: "Journalist",
        icon: "📰",
        category: "Media",
        description: "Research, investigate, and communicate news and information.",
        skills: ["Writing", "Research", "Communication", "Critical Thinking"],
        
        education: "Degree in Journalism, Mass Communication, Media Studies, or related fields",
        subjects: ["Journalism", "Mass Communication", "Current Affairs", "Media Ethics"],
        roadmap: [
        "Build Strong Writing and Communication Skills",
        "Study Journalism or Mass Communication",
        "Learn News Research and Reporting",
        "Develop Interviewing and Fact-Checking Skills",
        "Create a Journalism Portfolio",
        "Gain Experience Through Internships",
        "Apply for Journalism and Media Roles"
    ],
    details: "Journalists research and report information for newspapers, websites, television, and other media."
    },
    {
        title: "Animator",
        icon: "🎞️",
        category: "Creative",
        description: "Create animated visuals for films, games, advertisements, and digital media.",
        skills: ["Animation", "Storytelling", "3D Design", "Visual Arts"],
        
        education: "Degree or diploma in Animation, Fine Arts, Design, Multimedia, or related fields",
        subjects: ["Animation", "Drawing", "Graphic Design", "3D Modeling"],
        roadmap: [
        "Learn Drawing and Design Fundamentals",
        "Learn 2D or 3D Animation",
        "Learn Animation Software",
        "Practice Character and Motion Design",
        "Create Animation Projects",
        "Build a Demo Reel and Portfolio",
        "Prepare for Animation Opportunities"
    ],
    details: "Animators create moving visual content for entertainment, education, advertising, and digital experiences."
    },

    // 📚 Humanities & Social Sciences
    {
        title: "Psychologist",
        icon: "🧠",
        category: "Humanities & Social Sciences",
        description: "Study human behavior and support people's psychological well-being.",
        skills: ["Psychology", "Communication", "Research", "Empathy"],
        
        education: "Bachelor's degree in Psychology followed by postgraduate study for many professional roles",
        subjects: ["Psychology", "Human Behaviour", "Research Methods", "Statistics"],
        roadmap: [
        "Complete a Bachelor's Degree in Psychology",
        "Build Knowledge of Human Behaviour",
        "Develop Research and Communication Skills",
        "Complete Relevant Postgraduate Study for Desired Roles",
        "Gain Supervised Practical Experience Where Required",
        "Choose a Psychology Specialization",
        "Continue Professional Development"
    ],
    details: "Psychology careers involve studying behavior and mental processes. Specific professional roles may require advanced education and applicable qualifications."
    },
    {
        title: "Teacher / Educator",
        icon: "👩‍🏫",
        category: "Education",
        description: "Help students learn, develop skills, and achieve their educational goals.",
        skills: ["Communication", "Subject Knowledge", "Teaching", "Leadership"],
        
        education: "Bachelor's degree with teacher education such as B.Ed., depending on the teaching level and eligibility requirements",
        subjects: ["Education", "Teaching Methods", "Communication", "Subject Knowledge"],
        roadmap: [
        "Build Strong Subject Knowledge",
        "Complete a Relevant Bachelor's Degree",
        "Complete Required Teacher Education or Training",
        "Develop Teaching and Communication Skills",
        "Gain Classroom or Practical Experience",
        "Meet Relevant Teaching Eligibility Requirements",
        "Apply for Teaching Opportunities"
    ],
    details: "Teachers and educators help learners understand subjects and develop academic and practical skills."
    },
    {
        title: "Translator",
        icon: "🌐",
        category: "Languages",
        description: "Convert written or spoken communication between languages.",
        skills: ["Language Skills", "Writing", "Communication", "Cultural Awareness"],
        
        education: "Degree or certification in Languages, Translation, Linguistics, or related fields",
        subjects: ["Languages", "Linguistics", "Translation Studies", "Communication"],
        roadmap: [
        "Develop Strong Skills in Two or More Languages",
        "Study Languages, Linguistics or Translation",
        "Practice Translation and Writing",
        "Learn Translation Tools and Techniques",
        "Build a Translation Portfolio",
        "Gain Freelance or Internship Experience",
        "Apply for Translation Opportunities"
    ],
    details: "Translators work with written or spoken language across different languages and contexts."
    },

    // 🔬 Science & Research
    {
        title: "Environmental Scientist",
        icon: "🌱",
        category: "Science",
        description: "Study environmental problems and develop solutions for sustainability.",
        skills: ["Environmental Science", "Research", "Data Analysis", "Field Work"],
        
        education: "B.Sc./B.Tech. in Environmental Science, Environmental Engineering, Biology, Chemistry, or related fields",
        subjects: ["Environmental Science", "Ecology", "Chemistry", "Geography"],
        roadmap: [
        "Build Biology, Chemistry and Geography Fundamentals",
        "Complete a Relevant Science or Environmental Degree",
        "Learn Environmental Research Methods",
        "Study Environmental Issues and Sustainability",
        "Gain Field or Research Experience",
        "Work on Environmental Projects",
        "Prepare for Environmental Science Roles or Higher Studies"
    ],
    details: "Environmental scientists study environmental systems and problems such as pollution, conservation, and sustainability."
    },
    {
        title: "Research Scientist",
        icon: "🔬",
        category: "Science & Research",
        description: "Conduct scientific research to discover and understand new knowledge.",
        skills: ["Research", "Scientific Methods", "Data Analysis", "Critical Thinking"],
        
        education: "Bachelor's degree followed by postgraduate study and research in a relevant scientific discipline",
        subjects: ["Research Methods", "Statistics", "Scientific Computing", "Subject Specialization"],
        roadmap: [
        "Build Strong Science Fundamentals",
        "Complete a Relevant Bachelor's Degree",
        "Develop Research and Data Analysis Skills",
        "Gain Laboratory or Research Experience",
        "Pursue Postgraduate Study for Advanced Research Roles",
        "Work on Research Projects and Publications",
        "Build a Career in Research or R&D"
    ],
    details: "Research scientists conduct experiments and investigations to answer scientific questions and develop new knowledge."
    },
    {
        title: "Mathematician",
        icon: "➗",
        category: "Science & Research",
        description: "Use mathematical theories and methods to solve complex problems.",
        skills: ["Mathematics", "Logical Thinking", "Problem Solving", "Research"],
        
        education: "B.Sc./B.A. in Mathematics followed by postgraduate study for many research and specialized roles",
        subjects: ["Calculus", "Algebra", "Statistics", "Mathematical Analysis"],
        roadmap: [
        "Build Strong Mathematics Fundamentals",
        "Complete a Bachelor's Degree in Mathematics or a Related Field",
        "Develop Skills in Advanced Mathematics",
        "Learn Mathematical Modeling and Problem Solving",
        "Gain Research or Project Experience",
        "Pursue Postgraduate Study for Advanced or Research Roles",
        "Prepare for Mathematics, Research, Teaching, or Analytical Careers"
    ],
    details: "Mathematicians develop and apply mathematical concepts to solve theoretical and practical problems."
    }
];

const categories = [
    "All",
    ...new Set(careers.map((career) => career.category))
];

const filteredCareers = careers.filter((career) => {
    const matchesSearch =
    career.title.toLowerCase().includes(search.toLowerCase()) ||
    career.description.toLowerCase().includes(search.toLowerCase()) ||
    career.category.toLowerCase().includes(search.toLowerCase()) ||
    career.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
    );

    const matchesCategory =
        categoryFilter === "All" ||
        career.category === categoryFilter;

    return matchesSearch && matchesCategory;
});

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

<div className="career-filters">

    <input
        type="text"
        placeholder="🔎 Search careers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />

    <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
    >
        {categories.map((category) => (
            <option key={category} value={category}>
                {category}
            </option>
        ))}
    </select>

</div>

            <div className="dashboard-cards">

                {filteredCareers.length > 0 ? (
    filteredCareers.map((career, index) => (
        <div className="dashboard-card" key={index}>
            <h2>
                {career.icon} {career.title}
            </h2>

            <p>{career.description}</p>

            <p>{career.details}</p>

            <p>
    <strong>Key Skills:</strong>{" "}
    {career.skills.slice(0, 3).join(", ")}
</p>

<button
    className="career-details-btn"
    onClick={() => navigate("/career-details", { state: { career } })}
>
    View Details →
</button>
        </div>
    ))
) : (
    <div className="dashboard-card">
        <h3>🔍 No careers found</h3>
        <p>
            Try searching for another career, skill, or category.
        </p>
    </div>
)}

            </div>

        </div>
    );
}

export default Careers;