import { useState, useEffect } from "react";
import "./Colleges.css";

function Colleges() {

    const [search, setSearch] = useState("");
    const [stateFilter, setStateFilter] = useState("All");
    const [courseFilter, setCourseFilter] = useState("All");
    const [typeFilter, setTypeFilter] = useState("All");
    const [recommendedCareer, setRecommendedCareer] = useState("");

    const careerCourseMap = {
    "Software Developer": "B.Tech",
    "AI/ML Engineer": "B.Tech",
    "Data Scientist": "B.Tech",
    "Data Analyst": "BCA",
    "Cybersecurity Analyst": "B.Tech",
    "Cloud Engineer": "B.Tech",
    "UI/UX Designer": "B.A.",
    "Chartered Accountant": "B.Com",
    "Financial Analyst": "B.Com",
    "Business Analyst": "BBA",
    "Management Consultant": "MBA",
    "Marketing Specialist": "BBA",
    "Doctor / Medical Practitioner": "MBBS",
    "Pharmacist": "B.Sc",
    "Biotechnology Professional": "B.Sc",
    "Healthcare Administrator": "MBA",
    "Civil Engineer": "B.Tech",
    "Mechanical Engineer": "B.Tech",
    "Electrical Engineer": "B.Tech",
    "Robotics & Automation Engineer": "B.Tech",
    "Lawyer": "LL.B.",
    "Civil Services": "B.A.",
    "Policy Analyst": "B.A.",
    "Graphic Designer": "B.A.",
    "Digital Content Creator": "B.A.",
    "Journalist": "B.A.",
    "Animator": "B.A.",
    "Psychologist": "B.A.",
    "Teacher / Educator": "B.A.",
    "Translator": "B.A.",
    "Environmental Scientist": "B.Sc",
    "Research Scientist": "B.Sc",
    "Mathematician": "B.Sc"
};

    useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
        const savedCareer = localStorage.getItem("recommendedCareer");

        if (savedCareer) {
            setRecommendedCareer(savedCareer);

            const recommendedCourse = careerCourseMap[savedCareer];

            if (recommendedCourse) {
                setCourseFilter("All");
            }
        }
    }
}, []);

    const colleges = [
        {
            name: "Maulana Azad National Urdu University (MANUU)",
            city: "Hyderabad",
            state: "Telangana",
            courses: "B.Tech, M.Tech, MCA, MBA, B.Ed, M.Ed, B.A., M.A., B.Sc., M.Sc., B.Com, M.Com, Ph.D.",
            website: "https://manuu.edu.in/",
            type: "Central University"
        },
        {
            name: "University of Hyderabad (UoH)",
            city: "Hyderabad",
            state: "Telangana",
            courses: "Integrated M.Sc./M.A., B.S. (Hons), M.Sc., M.A., M.Tech, MBA, MCA, MFA, Ph.D.",
            website: "https://uohyd.ac.in/",
            type: "Central University"
        },
        {
            name: "Osmania University (OU)",
            city: "Hyderabad",
            state: "Telangana",
            courses: "B.A., B.Sc., B.Com, B.E./B.Tech, MBA, MCA, LLB, LLM, M.A., M.Sc., M.Com, M.E./M.Tech, Ph.D.",
            website: "https://osmania.ac.in/",
            type: "State University"
        },
        {
            name: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
            city: "Hyderabad",
            state: "Telangana",
            courses: "B.Tech, M.Tech, B.Pharmacy, M.Pharmacy, MBA, MCA, Integrated Dual Degree Programs, Ph.D.",
            website: "https://jntuh.ac.in/",
            type: "State Technological University"
        },
        {
            name: "University of Delhi (DU)",
            city: "New Delhi",
            state: "Delhi",
            courses: "B.A. (Hons), B.Sc. (Hons), B.Com (Hons), B.Tech, BMS, B.Ed, M.A., M.Sc., M.Com, MBA, MCA, LL.B., LL.M., Ph.D.",
            website: "https://www.du.ac.in/",
            type: "Central University"
        },
        {
            name: "Jamia Millia Islamia (JMI)",
            city: "New Delhi",
            state: "Delhi",
            courses: "B.Tech, B.Arch, BDS, B.A. (Hons), B.Sc. (Hons), B.Com (Hons), BBA, MBA, MCA, M.Tech, M.A., M.Sc., LL.B., LL.M., Ph.D.",
            website: "https://jmi.ac.in/",
            type: "Central University"
        },
        {
            name: "Jawaharlal Nehru University (JNU)",
            city: "New Delhi",
            state: "Delhi",
            courses: "B.A. (Hons.) in Foreign Languages, Integrated B.Tech+M.Tech, M.A., M.Sc., MCA, MBA, MPH, M.Tech, Ph.D.",
            website: "https://jnu.ac.in/",
            type: "Central University"
        },
        {
            name: "Indira Gandhi National Open University (IGNOU)",
            city: "New Delhi",
            state: "Delhi",
            courses: "B.A., B.Sc., B.Com, BCA, BBA, B.Ed, M.A., M.Sc., M.Com, MCA, MBA, Ph.D., Diploma and Certificate programs",
            website: "https://ignou.ac.in/",
            type: "Central University"
        },
        {
            name: "Aligarh Muslim University (AMU)",
            city: "Aligarh",
            state: "Uttar Pradesh",
            courses: "B.Tech, B.Arch, MBBS, BDS, BA, B.Sc, B.Com, B.Ed, LLB, MBA, MCA, M.Tech, MA, M.Sc, M.Com, LLM, Ph.D.",
            website: "https://amu.ac.in/",
            type: "Central University"
        },
        {
            name: "Banaras Hindu University (BHU)",
            city: "Varanasi",
            state: "Uttar Pradesh",
            courses: "B.A., B.Sc., B.Com, B.Tech, B.A.LL.B., MBBS, B.Ed, M.A., M.Sc., M.Com, MBA, M.Tech, LL.M., Ph.D.",
            website: "https://bhu.ac.in/",
            type: "Central University"
        },
        {
            name: "University of Allahabad (AU)",
            city: "Prayagraj",
            state: "Uttar Pradesh",
            courses: "B.A., B.Sc., B.Com, B.A.LL.B., BCA, B.Tech, M.A., M.Sc., M.Com, MBA, MCA, LL.M., Ph.D.",
            website: "https://allduniv.ac.in/",
            type: "Central University"
        },
        {
            name: "University of Mysore (UOM)",
            city: "Mysuru",
            state: "Karnataka",
            courses: "B.A., B.Sc., B.Com, BCA, BBA, B.Arch, M.A., M.Sc., M.Com, MBA, MCA, LL.M., M.Tech, Ph.D.",
            website: "https://uni-mysore.ac.in/",
            type: "State University"
        },
        {
            name: "Bangalore University (BU)",
            city: "Bengaluru",
            state: "Karnataka",
            courses: "B.A., B.Sc., B.Com, BBA, BCA, B.Ed, M.A., M.Sc., M.Com, MBA, MCA, M.Ed, Ph.D.",
            website: "https://bangaloreuniversity.ac.in/",
            type: "State University"
        },
        {
            name: "Visvesvaraya Technological University (VTU)",
            city: "Belagavi",
            state: "Karnataka",
            courses: "B.E./B.Tech, B.Arch, B.Plan, M.Tech, MBA, MCA, M.Arch, Ph.D.",
            website: "https://vtu.ac.in/",
            type: "State Technological University"
        },
        {
            name: "Jadavpur University (JU)",
            city: "Kolkata",
            state: "West Bengal",
            courses: "B.E./B.Tech, B.Arch, B.Pharm, B.A. (Hons), B.Sc. (Hons), M.E./M.Tech, M.A., M.Sc., MCA, Ph.D.",
            website: "https://jadavpuruniversity.in/",
            type: "State University"
        },
        {
            name: "University of Calcutta (CU)",
            city: "Kolkata",
            state: "West Bengal",
            courses: "B.A., B.Sc., B.Com, B.Tech, LL.B., B.Ed, M.A., M.Sc., M.Com, M.Tech, LL.M., MBA, Ph.D.",
            website: "https://caluniv.ac.in/",
            type: "State University"
        },
        {
            name: "University of Mumbai (MU)",
            city: "Mumbai",
            state: "Maharashtra",
            courses: "B.A., B.Sc., B.Com, B.E./B.Tech, B.Arch, LL.B., B.M.S., M.A., M.Sc., M.Com, M.E./M.Tech, MBA/MMS, MCA, LL.M., Ph.D.",
            website: "https://mu.ac.in/",
            type: "State University"
        },
        {
            name: "University of Madras (UNOM)",
            city: "Chennai",
            state: "Tamil Nadu",
            courses: "B.A., B.Sc., B.Com, BBA, BCA, M.A., M.Sc., M.Com, MBA, MCA, M.Tech, Ph.D.",
            website: "https://www.unom.ac.in/",
            type: "State University"
        },
        {
            name: "Anna University",
            city: "Chennai",
            state: "Tamil Nadu",
            courses: "B.E./B.Tech, B.Arch, B.Plan, M.E./M.Tech, M.Arch, M.Plan, MBA, MCA, M.Sc., Ph.D.",
            website: "https://www.annauniv.edu/",
            type: "State Technological University"
        },
        {
            name: "University of Kerala",
            city: "Thiruvananthapuram",
            state: "Kerala",
            courses: "B.A., B.Sc., B.Com, BCA, BBA, B.Ed, M.A., M.Sc., M.Com, MBA, MCA, M.Ed, Ph.D.",
            website: "https://keralauniversity.ac.in/",
            type: "State University"
        },
        {
    name: "University of Rajasthan",
    city: "Jaipur",
    state: "Rajasthan",
    type: "State University",
    courses: "B.A., B.Com, B.Sc, BBA, MBA, MCA, LL.B.",
    website: "https://www.uniraj.ac.in/"
},

{
    name: "University of Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    type: "State University",
    courses: "B.A., B.Com, B.Sc, BBA, MBA, MCA, LL.B.",
    website: "https://www.lkouniv.ac.in/"
},

{
    name: "University of Calicut",
    city: "Malappuram",
    state: "Kerala",
    type: "State University",
    courses: "B.A., B.Com, B.Sc, BBA, MBA, MCA",
    website: "https://uoc.ac.in/"
},

{
    name: "Savitribai Phule Pune University",
    city: "Pune",
    state: "Maharashtra",
    type: "State University",
    courses: "B.A., B.Com, B.Sc, BBA, MBA, MCA, LL.B.",
    website: "https://www.unipune.ac.in/"
},

{
    name: "University of Jammu",
    city: "Jammu",
    state: "Jammu and Kashmir",
    type: "Central University",
    courses: "B.A., B.Com, B.Sc, BBA, MBA, MCA, LL.B.",
    website: "https://www.jammuuniversity.ac.in/"
},

{
    name: "Panjab University",
    city: "Chandigarh",
    state: "Chandigarh",
    type: "Central University",
    courses: "B.A., B.Com, B.Sc, BBA, MBA, MCA, LL.B.",
    website: "https://puchd.ac.in/"
},

{
    name: "University of Patna",
    city: "Patna",
    state: "Bihar",
    type: "State University",
    courses: "B.A., B.Com, B.Sc, BBA, MBA, LL.B.",
    website: "https://pup.ac.in/"
},
{
    name: "Gauhati University",
    city: "Guwahati",
    state: "Assam",
    type: "State University",
    courses: "B.A., B.Com, B.Sc, BBA, MBA, MCA, LL.B.",
    website: "https://gauhati.ac.in/"
},
{
    name: "Osmania Medical College",
    city: "Hyderabad",
    state: "Telangana",
    type: "Government Medical College",
    courses: "MBBS, B.Pharm",
    website: "https://osmaniamedicalcollege.org/"
},
{
    name: "Gandhi Medical College",
    city: "Hyderabad",
    state: "Telangana",
    type: "Government Medical College",
    courses: "MBBS",
    website: "https://gandhihospital.gov.in/"
},

{
    name: "Nizam's Institute of Medical Sciences",
    city: "Hyderabad",
    state: "Telangana",
    type: "Medical Institute",
    courses: "MBBS",
    website: "https://www.nims.edu.in/"
},

{
    name: "Institute of Medical Sciences, BHU",
    city: "Varanasi",
    state: "Uttar Pradesh",
    type: "Medical Institute",
    courses: "MBBS",
    website: "https://www.bhu.ac.in/ims/"
},

{
    name: "King George's Medical University",
    city: "Lucknow",
    state: "Uttar Pradesh",
    type: "Medical University",
    courses: "MBBS",
    website: "https://www.kgmu.org/"
},

{
    name: "Manipal College of Pharmaceutical Sciences",
    city: "Manipal",
    state: "Karnataka",
    type: "Pharmacy College",
    courses: "B.Pharm",
    website: "https://www.manipal.edu/mcops.html"
},
    ];

    const filteredColleges = colleges.filter((college) => {

    const matchesSearch =
        college.name.toLowerCase().includes(search.toLowerCase()) ||
        college.city.toLowerCase().includes(search.toLowerCase()) ||
        college.state.toLowerCase().includes(search.toLowerCase()) ||
        college.type.toLowerCase().includes(search.toLowerCase()) ||
        college.courses.toLowerCase().includes(search.toLowerCase());

    const matchesState =
        stateFilter === "All" ||
        college.state === stateFilter;

    const matchesCourse =
        courseFilter === "All" ||
        college.courses.toLowerCase().includes(courseFilter.toLowerCase());

    const matchesType =
        typeFilter === "All" ||
        college.type === typeFilter;

    return (
        matchesSearch &&
        matchesState &&
        matchesCourse &&
        matchesType
    );
});

    return (
        <div className="colleges-page">

          {recommendedCareer && (
        <div className="dashboard-card">
            <h3>🎯 Your Recommended Career</h3>
            <p>
                CareerAI recommends exploring colleges and courses related to:
            </p>
            <h2>{recommendedCareer}</h2>

             {careerCourseMap[recommendedCareer] && (
            <p>
                💡 Suggested course:
                <strong> {careerCourseMap[recommendedCareer]}</strong>
            </p>
        )}
        </div>
    )}
  

            <div className="colleges-header">
                <h1>Government College Explorer 🎓</h1>

                <p>
                    Explore government universities and find opportunities
                    that match your career goals.
                </p>
            </div>

            <input
                className="college-search"
                type="text"
                placeholder="Search by college, city, state, course or type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="college-filters">

    <select
        value={stateFilter}
        onChange={(e) => setStateFilter(e.target.value)}
    >
        <option value="All">All States</option>
        <option value="Telangana">Telangana</option>
        <option value="Delhi">Delhi</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Karnataka">Karnataka</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Kerala">Kerala</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Bihar">Bihar</option>
        <option value="Assam">Assam</option>
    </select>

    <select
        value={courseFilter}
        onChange={(e) => setCourseFilter(e.target.value)}
    >
        <option value="All">All Courses</option>
<option value="B.Tech">B.Tech / Engineering</option>
<option value="BCA">BCA / Computer Applications</option>
<option value="B.Sc">B.Sc / Science</option>
<option value="B.A.">B.A. / Arts & Humanities</option>
<option value="B.Com">B.Com / Commerce</option>
<option value="BBA">BBA / Management</option>
<option value="MBA">MBA / Management</option>
<option value="MCA">MCA / Computer Applications</option>
<option value="LL.B.">LL.B. / Law</option>
<option value="MBBS">MBBS / Medicine</option>
<option value="B.Pharm">B.Pharm / Pharmacy</option>
    </select>

    <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
    >
        <option value="All">All Types</option>
        <option value="Central University">Central University</option>
        <option value="State University">State University</option>
        <option value="State Technological University">
            State Technological University
        </option>
    </select>

</div>

            <div className="colleges-grid">

                {filteredColleges.map((college, index) => (
                    <div className="college-card" key={index}>

                        <h2>{college.name}</h2>

                        <p className="college-location">
                            📍 {college.city}, {college.state}
                        </p>

                        <p>
                            <strong>Type:</strong> {college.type}
                        </p>

                        <p className="college-courses">
                            <strong>Courses:</strong>{" "}
                            {college.courses}
                        </p>

                        <a
                            href={college.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="college-website"
                        >
                            Visit Official Website ↗
                        </a>

                    </div>
                ))}

            </div>

            {filteredColleges.length === 0 && (
    <div className="no-colleges">
        <h3>🔍 No colleges found</h3>
        <p>
            Try changing your search, state, course, or college type.
        </p>
        <p>
            You can also select <strong>All Courses</strong> and{" "}
            <strong>All States</strong> to explore everything available.
        </p>
    </div>
)}

        </div>
    );
}

export default Colleges;