import { useState, useEffect } from "react";
import "./Dashboard.css";

function Profile() {

    const [stream, setStream] = useState("");
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
                    setStream(data.stream || "");
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

        if (
            !stream.trim() ||
            !course.trim() ||
            !skills.trim() ||
            !interests.trim()
        ) {
            alert("Please fill in all fields.");
            return;
        }

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            alert("Please login first.");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/profile",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: savedUser.email,
                        stream,
                        course,
                        skills,
                        interests
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                const profile = {
                    stream,
                    course,
                    skills,
                    interests
                };

                localStorage.setItem(
                    "profile",
                    JSON.stringify(profile)
                );

                alert("Profile saved successfully!");

            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error("Profile update error:", error);
            alert("Unable to connect to the server");
        }
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-card">

                <h1>👤 Complete your profile</h1>

                <p>
                    Add your details to get more personalized career guidance.
                </p>

                <form onSubmit={handleSave}>

                    {/* Stream */}

                    <div className="form-group">
                        <label>Stream</label>

                        <select
                            value={stream}
                            onChange={(e) => setStream(e.target.value)}
                            required
                        >
                            <option value="">
                                Select your stream
                            </option>

                            <option value="Science">
                                Science
                            </option>

                            <option value="Commerce">
                                Commerce
                            </option>

                            <option value="Arts/Humanities">
                                Arts / Humanities
                            </option>

                            <option value="Other">
                                Other
                            </option>
                        </select>
                    </div>

                    {/* Course */}

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

                    {/* Skills */}

                    <div className="form-group">
                        <label>Skills</label>

                        <input
                            type="text"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            placeholder="e.g. Java, Python, React"
                            required
                        />
                    </div>

                    {/* Interests */}

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