import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Login.css";

function ResetPassword() {
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/reset-password/${token}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Password reset successfully!");
                navigate("/login");
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error("Reset password error:", error);
            alert("Unable to connect to the server");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Reset Password 🔐</h1>
                    <p>Create a new password for your CareerAI account.</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>New Password</label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password"
                            required
                            minLength="6"
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            placeholder="Confirm new password"
                            required
                            minLength="6"
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Reset Password
                    </button>

                </form>

                <p className="auth-footer">
                    <Link to="/login">Back to Login</Link>
                </p>
            </div>
        </div>
    );
}

export default ResetPassword;