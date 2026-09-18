import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(
    "https://careerai-cagq.onrender.com/api/forgot-password/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            }
        );

        const data = await response.json();

        alert(data.message);

    } catch (error) {
        console.error("Forgot password error:", error);
        alert("Unable to connect to the server");
    }
};
    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Forgot Password?</h1>
                    <p>
                        Enter your email to reset your CareerAI password.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
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

export default ForgotPassword;