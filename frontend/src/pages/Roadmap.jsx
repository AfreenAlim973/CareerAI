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
                `https://careerai-cagq.onrender.com/api/assessment/${savedUser.email}`
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
    "Management Consultant": [

    {
        number: 1,
        title: "Build Business Fundamentals",
        description: "Learn the basics of business, economics, finance, and organizations."
    },

    {
        number: 2,
        title: "Develop Problem-Solving Skills",
        description: "Practice structured thinking, analysis, and solving real-world business problems."
    },

    {
        number: 3,
        title: "Learn Data Analysis",
        description: "Build skills in Excel, data analysis, and interpreting business information."
    },

    {
        number: 4,
        title: "Practice Case Studies",
        description: "Solve business case studies and develop structured approaches to complex problems."
    },

    {
        number: 5,
        title: "Improve Communication",
        description: "Develop presentation, teamwork, communication, and leadership skills."
    },

    {
        number: 6,
        title: "Gain Practical Experience",
        description: "Work on projects, internships, or business-related activities."
    },

    {
        number: 7,
        title: "Prepare for Consulting Opportunities",
        description: "Build your resume and prepare for consulting interviews and case discussions."
    }

],
"Chartered Accountant": [

    {
        number: 1,
        title: "Build Accounting Fundamentals",
        description: "Learn the basics of accounting, business, economics, and financial concepts."
    },

    {
        number: 2,
        title: "Prepare for CA Foundation",
        description: "Study the subjects and requirements for the CA Foundation examination."
    },

    {
        number: 3,
        title: "Continue CA Intermediate",
        description: "Develop deeper knowledge of accounting, taxation, auditing, and financial reporting."
    },

    {
        number: 4,
        title: "Complete Practical Training",
        description: "Gain practical experience through the required training and professional work."
    },

    {
        number: 5,
        title: "Prepare for CA Final",
        description: "Strengthen your advanced accounting, auditing, taxation, and financial knowledge."
    },

    {
        number: 6,
        title: "Qualify as a Chartered Accountant",
        description: "Complete the required examinations, training, and professional requirements."
    },

    {
        number: 7,
        title: "Explore Career Opportunities",
        description: "Explore opportunities in accounting, auditing, taxation, finance, consulting, and related fields."
    }

],
"Financial Analyst": [

    {
        number: 1,
        title: "Learn Financial Fundamentals",
        description: "Build a strong understanding of accounting, finance, economics, and financial concepts."
    },

    {
        number: 2,
        title: "Learn Excel & Data Analysis",
        description: "Develop practical skills in Excel, data analysis, and working with financial information."
    },

    {
        number: 3,
        title: "Learn Financial Modeling",
        description: "Practice financial models, forecasting, budgeting, and analyzing business performance."
    },

    {
        number: 4,
        title: "Understand Financial Markets",
        description: "Learn about stocks, bonds, investments, markets, and major financial institutions."
    },

    {
        number: 5,
        title: "Practice Financial Analysis",
        description: "Analyze companies, financial statements, and real-world business data."
    },

    {
        number: 6,
        title: "Build Projects & Portfolio",
        description: "Create financial analysis projects and showcase your skills in a professional portfolio."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Improve your resume, communication, interview skills, and prepare for internships and jobs."
    }

],
"Data Scientist": [

    {
        number: 1,
        title: "Learn Python & Statistics",
        description: "Build strong foundations in Python, statistics, probability, and data analysis."
    },

    {
        number: 2,
        title: "Learn SQL & Databases",
        description: "Learn how to collect, query, and manage data using SQL and databases."
    },

    {
        number: 3,
        title: "Learn Data Analysis",
        description: "Practice working with datasets using tools such as Pandas, NumPy, and visualization libraries."
    },

    {
        number: 4,
        title: "Learn Machine Learning",
        description: "Study machine learning algorithms and learn how to build predictive models."
    },

    {
        number: 5,
        title: "Build Data Science Projects",
        description: "Work on real-world datasets and create projects that demonstrate your analytical skills."
    },

    {
        number: 6,
        title: "Build a Portfolio",
        description: "Showcase your projects, analysis, and technical skills through GitHub and a professional portfolio."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Improve your resume, interview skills, and prepare for internships and data science roles."
    }

],

"Data Analyst": [

    {
        number: 1,
        title: "Learn Excel",
        description: "Build strong spreadsheet and data-handling skills using Excel."
    },

    {
        number: 2,
        title: "Learn SQL",
        description: "Learn how to query databases and work with structured data."
    },

    {
        number: 3,
        title: "Learn Statistics",
        description: "Understand basic statistics needed for analyzing and interpreting data."
    },

    {
        number: 4,
        title: "Learn Data Visualization",
        description: "Practice creating dashboards and visualizations using tools such as Power BI or Tableau."
    },

    {
        number: 5,
        title: "Practice Data Analysis",
        description: "Analyze real datasets and identify useful patterns and insights."
    },

    {
        number: 6,
        title: "Build Projects",
        description: "Create practical data analysis projects and add them to your portfolio."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Improve your resume, communication, and interview skills for analyst roles."
    }

],

"Business Analyst": [

    {
        number: 1,
        title: "Learn Business Fundamentals",
        description: "Understand organizations, business processes, markets, and basic economics."
    },

    {
        number: 2,
        title: "Learn Excel & Data Analysis",
        description: "Develop skills in spreadsheets, data analysis, and business reporting."
    },

    {
        number: 3,
        title: "Learn SQL",
        description: "Understand how to retrieve and analyze information from databases."
    },

    {
        number: 4,
        title: "Learn Business Requirements",
        description: "Practice understanding problems, gathering requirements, and documenting business needs."
    },

    {
        number: 5,
        title: "Learn Data Visualization",
        description: "Create reports and dashboards that help organizations make decisions."
    },

    {
        number: 6,
        title: "Build Business Projects",
        description: "Work on case studies and projects that demonstrate business analysis skills."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Build your resume, communication skills, and prepare for business analyst interviews."
    }

],

"Marketing Specialist": [

    {
        number: 1,
        title: "Learn Marketing Fundamentals",
        description: "Understand branding, customers, markets, and basic marketing strategies."
    },

    {
        number: 2,
        title: "Learn Digital Marketing",
        description: "Study SEO, social media, email marketing, and online advertising."
    },

    {
        number: 3,
        title: "Develop Content Skills",
        description: "Improve writing, communication, visual content, and storytelling skills."
    },

    {
        number: 4,
        title: "Learn Marketing Analytics",
        description: "Understand how to measure campaigns, audience behavior, and marketing performance."
    },

    {
        number: 5,
        title: "Create Marketing Projects",
        description: "Develop sample campaigns, social media strategies, or marketing plans."
    },

    {
        number: 6,
        title: "Build a Portfolio",
        description: "Showcase your campaigns, content, research, and marketing projects."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Improve your resume, communication skills, and prepare for marketing roles."
    }

],

"Doctor / Medical Practitioner": [

    {
        number: 1,
        title: "Build Science Fundamentals",
        description: "Develop strong foundations in Biology, Chemistry, and Physics."
    },

    {
        number: 2,
        title: "Prepare for Medical Entrance",
        description: "Prepare for the relevant medical entrance examination and admission requirements."
    },

    {
        number: 3,
        title: "Complete Medical Education",
        description: "Complete the required medical degree and develop knowledge of medical sciences."
    },

    {
        number: 4,
        title: "Complete Clinical Training",
        description: "Gain practical clinical experience through the required internship and training."
    },

    {
        number: 5,
        title: "Meet Registration Requirements",
        description: "Complete the professional registration requirements applicable to your practice."
    },

    {
        number: 6,
        title: "Choose a Specialization",
        description: "Explore medical specialties and pursue further training if you choose to specialize."
    },

    {
        number: 7,
        title: "Continue Professional Development",
        description: "Keep developing clinical knowledge, skills, and professional experience."
    }

],

"Pharmacist": [

    {
        number: 1,
        title: "Build Science Fundamentals",
        description: "Strengthen your knowledge of Biology, Chemistry, and related science subjects."
    },

    {
        number: 2,
        title: "Choose a Pharmacy Program",
        description: "Explore appropriate pharmacy education pathways such as D.Pharm or B.Pharm."
    },

    {
        number: 3,
        title: "Study Pharmaceutical Sciences",
        description: "Learn pharmacology, pharmaceutics, pharmaceutical chemistry, and related subjects."
    },

    {
        number: 4,
        title: "Complete Practical Training",
        description: "Gain practical experience through laboratory, pharmacy, or healthcare training."
    },

    {
        number: 5,
        title: "Meet Registration Requirements",
        description: "Complete the applicable professional registration requirements."
    },

    {
        number: 6,
        title: "Gain Professional Experience",
        description: "Build experience in pharmacy, healthcare, pharmaceutical companies, or related areas."
    },

    {
        number: 7,
        title: "Explore Further Opportunities",
        description: "Consider employment, specialization, higher studies, research, or pharmaceutical careers."
    }

],

"Biotechnology Professional": [

    {
        number: 1,
        title: "Build Biology & Chemistry Fundamentals",
        description: "Strengthen your understanding of biology, chemistry, and life sciences."
    },

    {
        number: 2,
        title: "Complete a Biotechnology Degree",
        description: "Study biotechnology or a related life-science field."
    },

    {
        number: 3,
        title: "Learn Laboratory Techniques",
        description: "Develop practical laboratory, research, and scientific analysis skills."
    },

    {
        number: 4,
        title: "Work on Projects",
        description: "Participate in biotechnology projects, laboratory work, or internships."
    },

    {
        number: 5,
        title: "Choose a Specialization",
        description: "Explore areas such as healthcare, pharmaceuticals, agriculture, or research."
    },

    {
        number: 6,
        title: "Build Research Experience",
        description: "Develop practical research experience and strengthen your scientific portfolio."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Explore industry roles, research positions, internships, and higher studies."
    }

],

"Healthcare Administrator": [

    {
        number: 1,
        title: "Learn Healthcare Fundamentals",
        description: "Understand healthcare systems, hospitals, patients, and healthcare operations."
    },

    {
        number: 2,
        title: "Learn Management Fundamentals",
        description: "Develop knowledge of management, finance, operations, and organizations."
    },

    {
        number: 3,
        title: "Study Healthcare Administration",
        description: "Learn about hospital administration, healthcare policies, and operations."
    },

    {
        number: 4,
        title: "Develop Leadership Skills",
        description: "Improve communication, teamwork, organization, and leadership abilities."
    },

    {
        number: 5,
        title: "Gain Practical Experience",
        description: "Gain experience through healthcare projects, internships, or administrative activities."
    },

    {
        number: 6,
        title: "Build Professional Skills",
        description: "Develop knowledge of healthcare operations, reporting, and resource management."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Build your resume and prepare for healthcare administration roles."
    }

],
"Civil Engineer": [

    {
        number: 1,
        title: "Build Mathematics & Physics Fundamentals",
        description: "Strengthen your understanding of mathematics, physics, and basic engineering concepts."
    },

    {
        number: 2,
        title: "Complete a Civil Engineering Degree",
        description: "Study civil engineering and develop knowledge of structures, construction, and infrastructure."
    },

    {
        number: 3,
        title: "Learn Engineering Software",
        description: "Develop practical skills with tools used for design, drafting, and engineering analysis."
    },

    {
        number: 4,
        title: "Work on Practical Projects",
        description: "Gain hands-on experience through academic projects, internships, and site exposure."
    },

    {
        number: 5,
        title: "Develop Technical Skills",
        description: "Strengthen knowledge in structural, construction, transportation, or environmental engineering."
    },

    {
        number: 6,
        title: "Build a Professional Profile",
        description: "Create a resume and showcase your projects, technical skills, and practical experience."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Prepare for engineering jobs, internships, competitive examinations, or higher studies."
    }

],

"Mechanical Engineer": [

    {
        number: 1,
        title: "Build Mathematics & Physics Fundamentals",
        description: "Strengthen mathematics, physics, and mechanical engineering fundamentals."
    },

    {
        number: 2,
        title: "Complete a Mechanical Engineering Degree",
        description: "Study mechanics, thermodynamics, manufacturing, and mechanical systems."
    },

    {
        number: 3,
        title: "Learn CAD & Design Tools",
        description: "Develop practical skills in computer-aided design and engineering software."
    },

    {
        number: 4,
        title: "Build Technical Projects",
        description: "Work on mechanical design, manufacturing, or engineering projects."
    },

    {
        number: 5,
        title: "Gain Practical Experience",
        description: "Develop hands-on experience through laboratories, internships, workshops, or projects."
    },

    {
        number: 6,
        title: "Develop Industry Skills",
        description: "Strengthen problem-solving, design, manufacturing, and technical communication skills."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Prepare your resume and apply for internships, engineering roles, or higher studies."
    }

],

"Electrical Engineer": [

    {
        number: 1,
        title: "Build Mathematics & Physics Fundamentals",
        description: "Develop strong foundations in mathematics, physics, and electrical concepts."
    },

    {
        number: 2,
        title: "Complete an Electrical Engineering Degree",
        description: "Study circuits, electrical machines, power systems, and control systems."
    },

    {
        number: 3,
        title: "Learn Electrical Design Tools",
        description: "Develop practical skills with engineering software and electrical design tools."
    },

    {
        number: 4,
        title: "Build Electrical Projects",
        description: "Create practical projects involving circuits, control systems, power, or electronics."
    },

    {
        number: 5,
        title: "Gain Practical Experience",
        description: "Gain experience through laboratories, internships, workshops, and engineering projects."
    },

    {
        number: 6,
        title: "Develop Technical Skills",
        description: "Strengthen problem-solving, system analysis, safety, and technical communication."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Prepare for engineering roles, competitive examinations, internships, or higher studies."
    }

],

"Robotics & Automation Engineer": [

    {
        number: 1,
        title: "Build Mathematics & Physics Fundamentals",
        description: "Strengthen mathematics, physics, and engineering fundamentals."
    },

    {
        number: 2,
        title: "Learn Programming",
        description: "Develop programming skills and learn how software interacts with machines."
    },

    {
        number: 3,
        title: "Study Electronics & Control Systems",
        description: "Learn sensors, electronics, control systems, and automation concepts."
    },

    {
        number: 4,
        title: "Learn Robotics",
        description: "Study robotics concepts, robotic systems, automation, and intelligent machines."
    },

    {
        number: 5,
        title: "Build Robotics Projects",
        description: "Create practical robotics and automation projects to apply your knowledge."
    },

    {
        number: 6,
        title: "Gain Practical Experience",
        description: "Participate in projects, competitions, laboratories, or internships."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Build your technical portfolio and prepare for robotics and automation roles."
    }

],

"Lawyer": [

    {
        number: 1,
        title: "Build Communication & Reading Skills",
        description: "Develop strong reading, writing, reasoning, communication, and comprehension skills."
    },

    {
        number: 2,
        title: "Choose a Law Degree Path",
        description: "Explore an appropriate law education pathway such as an integrated law degree or LL.B."
    },

    {
        number: 3,
        title: "Study Core Areas of Law",
        description: "Learn important areas of law and develop an understanding of legal systems."
    },

    {
        number: 4,
        title: "Develop Legal Research Skills",
        description: "Practice legal research, writing, analysis, and interpretation."
    },

    {
        number: 5,
        title: "Gain Practical Experience",
        description: "Gain experience through internships, legal clinics, or other supervised opportunities."
    },

    {
        number: 6,
        title: "Choose a Legal Area",
        description: "Explore areas such as corporate, criminal, constitutional, family, or intellectual property law."
    },

    {
        number: 7,
        title: "Prepare for Legal Opportunities",
        description: "Build your professional profile and prepare for relevant legal career opportunities."
    }

],

"Civil Services": [

    {
        number: 1,
        title: "Complete a Bachelor's Degree",
        description: "Complete a recognized bachelor's degree in a subject that interests you."
    },

    {
        number: 2,
        title: "Understand the Examination",
        description: "Learn about the Civil Services Examination structure, eligibility, and syllabus."
    },

    {
        number: 3,
        title: "Build General Studies Knowledge",
        description: "Study history, geography, polity, economics, science, environment, and current affairs."
    },

    {
        number: 4,
        title: "Choose an Optional Subject",
        description: "Explore the available optional subjects and choose one that suits your strengths and interests."
    },

    {
        number: 5,
        title: "Practice Previous Papers",
        description: "Solve previous examination papers and take mock tests to improve your preparation."
    },

    {
        number: 6,
        title: "Prepare for Examination Stages",
        description: "Prepare systematically for the required stages of the examination."
    },

    {
        number: 7,
        title: "Continue Professional Development",
        description: "After selection and training, continue developing administrative, communication, and leadership skills."
    }

],

"Policy Analyst": [

    {
        number: 1,
        title: "Learn Economics & Government",
        description: "Build an understanding of economics, government institutions, society, and public issues."
    },

    {
        number: 2,
        title: "Complete a Relevant Degree",
        description: "Study a relevant field such as economics, political science, public policy, statistics, or social sciences."
    },

    {
        number: 3,
        title: "Develop Research Skills",
        description: "Learn how to research issues, evaluate evidence, and interpret information."
    },

    {
        number: 4,
        title: "Learn Data Analysis",
        description: "Develop analytical skills and learn how data can support policy decisions."
    },

    {
        number: 5,
        title: "Study Public Policy",
        description: "Understand how policies are designed, implemented, evaluated, and improved."
    },

    {
        number: 6,
        title: "Work on Policy Projects",
        description: "Build experience through research projects, internships, or policy-related activities."
    },

    {
        number: 7,
        title: "Prepare for Policy Opportunities",
        description: "Build your research portfolio and prepare for policy, research, and public-sector roles."
    }

],
"Graphic Designer": [

    {
        number: 1,
        title: "Learn Design Fundamentals",
        description: "Understand composition, color, typography, layout, and visual communication."
    },

    {
        number: 2,
        title: "Learn Design Tools",
        description: "Practice using tools such as Figma, Photoshop, Illustrator, or other design software."
    },

    {
        number: 3,
        title: "Practice Visual Design",
        description: "Create posters, social media designs, illustrations, and other visual projects."
    },

    {
        number: 4,
        title: "Build Design Projects",
        description: "Work on practical projects that demonstrate your creativity and design skills."
    },

    {
        number: 5,
        title: "Build a Portfolio",
        description: "Create a professional portfolio showcasing your strongest design work."
    },

    {
        number: 6,
        title: "Gain Practical Experience",
        description: "Explore internships, freelance projects, competitions, or other design opportunities."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Improve your resume, portfolio, and communication skills for design roles."
    }

],

"Digital Content Creator": [

    {
        number: 1,
        title: "Choose a Content Niche",
        description: "Explore your interests and choose topics or themes you would enjoy creating content about."
    },

    {
        number: 2,
        title: "Learn Content Creation",
        description: "Develop skills in writing, photography, video, design, or other forms of digital content."
    },

    {
        number: 3,
        title: "Learn Social Media",
        description: "Understand major social platforms, audience engagement, trends, and content formats."
    },

    {
        number: 4,
        title: "Learn Analytics",
        description: "Understand audience insights and use analytics to improve your content."
    },

    {
        number: 5,
        title: "Create Consistently",
        description: "Publish useful and creative content regularly while developing your own style."
    },

    {
        number: 6,
        title: "Build an Online Portfolio",
        description: "Collect your best work and create a professional portfolio of your content."
    },

    {
        number: 7,
        title: "Explore Professional Opportunities",
        description: "Explore freelance work, internships, brand projects, media roles, and other opportunities."
    }

],

"Journalist": [

    {
        number: 1,
        title: "Build Writing Skills",
        description: "Strengthen writing, reading, communication, grammar, and storytelling skills."
    },

    {
        number: 2,
        title: "Study Journalism or Mass Communication",
        description: "Explore education pathways in journalism, mass communication, media, or related fields."
    },

    {
        number: 3,
        title: "Learn News Research",
        description: "Learn how to research topics, identify reliable sources, and understand current events."
    },

    {
        number: 4,
        title: "Develop Reporting Skills",
        description: "Practice interviewing, reporting, fact-checking, and presenting information clearly."
    },

    {
        number: 5,
        title: "Create a Journalism Portfolio",
        description: "Write articles, reports, interviews, or other work to demonstrate your abilities."
    },

    {
        number: 6,
        title: "Gain Practical Experience",
        description: "Look for internships, student publications, media projects, or other supervised opportunities."
    },

    {
        number: 7,
        title: "Prepare for Media Opportunities",
        description: "Build your resume and portfolio and prepare for journalism and media roles."
    }

],

"Animator": [

    {
        number: 1,
        title: "Learn Drawing & Design Fundamentals",
        description: "Develop skills in drawing, composition, character design, and visual storytelling."
    },

    {
        number: 2,
        title: "Choose 2D or 3D Animation",
        description: "Explore different animation styles and choose an area that interests you."
    },

    {
        number: 3,
        title: "Learn Animation Software",
        description: "Practice using appropriate 2D or 3D animation and design tools."
    },

    {
        number: 4,
        title: "Practice Character & Motion Design",
        description: "Learn movement, timing, storytelling, character animation, and visual effects."
    },

    {
        number: 5,
        title: "Create Animation Projects",
        description: "Build short animations and creative projects to demonstrate your skills."
    },

    {
        number: 6,
        title: "Build a Demo Reel",
        description: "Create a portfolio and demo reel that showcases your strongest animation work."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Develop your professional profile and explore internships, studios, freelance work, and animation roles."
    }

],

"Psychologist": [

    {
        number: 1,
        title: "Study Psychology Fundamentals",
        description: "Learn about human behaviour, cognition, emotions, development, and social interaction."
    },

    {
        number: 2,
        title: "Complete a Psychology Degree",
        description: "Study psychology at the undergraduate level and build a strong academic foundation."
    },

    {
        number: 3,
        title: "Develop Research Skills",
        description: "Learn research methods, observation, basic statistics, and psychological assessment concepts."
    },

    {
        number: 4,
        title: "Explore Specializations",
        description: "Explore areas such as clinical, counselling, educational, organizational, or research psychology."
    },

    {
        number: 5,
        title: "Pursue Further Study",
        description: "Complete relevant postgraduate study and additional training required for your intended role."
    },

    {
        number: 6,
        title: "Gain Practical Experience",
        description: "Build supervised practical, research, or field experience where appropriate."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Build your academic and professional profile and explore psychology-related career paths."
    }

],

"Teacher / Educator": [

    {
        number: 1,
        title: "Build Subject Knowledge",
        description: "Develop strong knowledge in the subject or subjects you want to teach."
    },

    {
        number: 2,
        title: "Complete a Relevant Degree",
        description: "Study an appropriate bachelor's degree or other relevant qualification."
    },

    {
        number: 3,
        title: "Complete Teacher Training",
        description: "Explore the teacher education and training requirements relevant to your intended teaching role."
    },

    {
        number: 4,
        title: "Develop Teaching Skills",
        description: "Improve communication, classroom management, lesson planning, and presentation skills."
    },

    {
        number: 5,
        title: "Gain Practical Experience",
        description: "Build experience through teaching practice, tutoring, volunteering, or supervised classroom activities."
    },

    {
        number: 6,
        title: "Meet Eligibility Requirements",
        description: "Check the relevant eligibility, certification, or examination requirements for your target teaching role."
    },

    {
        number: 7,
        title: "Prepare for Teaching Opportunities",
        description: "Build your resume and prepare for teaching positions, examinations, or further education."
    }

],

"Translator": [

    {
        number: 1,
        title: "Strengthen Language Skills",
        description: "Develop strong reading, writing, listening, and communication skills in your working languages."
    },

    {
        number: 2,
        title: "Study Languages or Translation",
        description: "Explore education in languages, linguistics, translation, or related fields."
    },

    {
        number: 3,
        title: "Practice Translation",
        description: "Practice translating different types of written and spoken content accurately and clearly."
    },

    {
        number: 4,
        title: "Learn Translation Tools",
        description: "Become familiar with digital translation tools and techniques used in professional work."
    },

    {
        number: 5,
        title: "Build a Translation Portfolio",
        description: "Create sample translations that demonstrate your language ability and versatility."
    },

    {
        number: 6,
        title: "Gain Practical Experience",
        description: "Explore internships, freelance projects, language organizations, or other relevant opportunities."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Build your professional profile and explore translation, localization, media, and language-related roles."
    }

],
"Environmental Scientist": [

    {
        number: 1,
        title: "Build Science Fundamentals",
        description: "Strengthen your knowledge of biology, chemistry, geography, and environmental science."
    },

    {
        number: 2,
        title: "Complete a Relevant Degree",
        description: "Study environmental science or a related science field."
    },

    {
        number: 3,
        title: "Learn Environmental Research",
        description: "Develop skills in environmental research, data collection, and scientific analysis."
    },

    {
        number: 4,
        title: "Study Sustainability",
        description: "Learn about climate change, ecosystems, pollution, conservation, and sustainable development."
    },

    {
        number: 5,
        title: "Gain Field Experience",
        description: "Participate in fieldwork, laboratory work, research projects, or internships."
    },

    {
        number: 6,
        title: "Work on Environmental Projects",
        description: "Build practical projects related to environmental issues, conservation, or sustainability."
    },

    {
        number: 7,
        title: "Prepare for Opportunities",
        description: "Build your resume and explore environmental science roles, research opportunities, or higher studies."
    }

],

"Research Scientist": [

    {
        number: 1,
        title: "Build Strong Science Fundamentals",
        description: "Develop a strong foundation in the scientific subjects related to your area of interest."
    },

    {
        number: 2,
        title: "Complete a Relevant Degree",
        description: "Study a relevant science or technical field at the undergraduate level."
    },

    {
        number: 3,
        title: "Develop Research Skills",
        description: "Learn research methods, scientific analysis, experimentation, and data interpretation."
    },

    {
        number: 4,
        title: "Gain Research Experience",
        description: "Participate in laboratory work, research projects, internships, or academic activities."
    },

    {
        number: 5,
        title: "Pursue Higher Studies",
        description: "Consider postgraduate study for advanced research and specialized scientific roles."
    },

    {
        number: 6,
        title: "Work on Research Projects",
        description: "Develop expertise by working on meaningful research projects and contributing to scientific work."
    },

    {
        number: 7,
        title: "Build a Research Career",
        description: "Prepare for research, laboratory, academic, R&D, or other science-related opportunities."
    }

],

"Mathematician": [

    {
        number: 1,
        title: "Build Strong Mathematics Fundamentals",
        description: "Strengthen algebra, calculus, geometry, statistics, and mathematical reasoning."
    },

    {
        number: 2,
        title: "Complete a Mathematics Degree",
        description: "Study mathematics or a related field at the undergraduate level."
    },

    {
        number: 3,
        title: "Learn Advanced Mathematics",
        description: "Explore areas such as analysis, algebra, probability, statistics, or applied mathematics."
    },

    {
        number: 4,
        title: "Develop Problem-Solving Skills",
        description: "Practice mathematical reasoning, proofs, modeling, and complex problem solving."
    },

    {
        number: 5,
        title: "Work on Mathematical Projects",
        description: "Apply mathematical concepts to research, modeling, computing, or real-world problems."
    },

    {
        number: 6,
        title: "Consider Higher Studies",
        description: "Explore postgraduate study for advanced academic, research, or specialized mathematical careers."
    },

    {
        number: 7,
        title: "Explore Career Opportunities",
        description: "Explore opportunities in mathematics, research, education, analytics, technology, and related fields."
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