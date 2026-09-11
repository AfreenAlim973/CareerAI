import { useState, useEffect } from "react";
import "./Dashboard.css";

function Profile() {

    const [course, setCourse] = useState("");
const [skills, setSkills] = useState("");
const [interests, setInterests] = useState("");

useEffect(() => {
    const loadProfile = async () => {
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            alert("Please login first.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/profile/${savedUser.email}`
            );

            const data = await response.json();

            if (response.ok) {
                setCourse(data.course || "");
                setSkills(data.skills || "");
                setInterests(data.interests || "");
            }

        } catch (error) {
            console.error("Profile loading error:", error);
        }
    };

    loadProfile();
}, []);

    const handleSave = async (event) => {
    event.preventDefault();

    if (!course.trim() || !skills.trim() || !interests.trim()) {
        alert("Please fill in all fields.");
        return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("Please login first.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: savedUser.email,
                course,
                skills,
                interests
            })
        });

        const data = await response.json();

        if (response.ok) {

            const profile = {
                course,
                skills,
                interests
            };

            localStorage.setItem("profile", JSON.stringify(profile));

            alert("Profile saved successfully!");
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error("Profile update error:", error);
        alert("Unable to connect to the server");
    }
};

    

    return(
        <div className="dashboard-page">
            <div className="dashboard-card">

                <h1>👤 Complete your profile</h1>

                <p>
                    Add your details to get more personalized career guidance.
                </p>

                <form onSubmit={handleSave}>

                    <div className="form-group">
                        <label>Course / Degree</label>
                        <input 
                            type="text"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder="e.g. B.Tech Computer Science"
                            required
                            />
                    </div>

                    <div className="form-group">
                        <label>Skills</label>
                        <input 
                            type="text"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            placeholder="e.g. java, Python, React"
                            required
                            />
                    </div>

                    <div className="form-group">
                        <label>Interests</label>
                        <input 
                            type="text"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            placeholder="e.g. Web development, AI"
                            required
                            />
                    </div>

                    <button type="submit">
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Profile;