import { Link } from "react-router-dom";
import "./Login.css";

function Register() {

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error("Registration error:", error);
            alert("Unable to connect to the server");
        }
    };

    return(
        <div className="auth-page">

            <div className="auth-card">

                <div className="auth-header">
                    <h1>Create your Account</h1>
                    <p>Start building your career with CareerAI.</p>
                </div>

                <form onSubmit={handleRegister}>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text"
                        name="name" 
                        placeholder="Enter your full name"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label>email</label>
                        <input type="email"
                        name="email"
                        placeholder="Enter your Email"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label>password</label>
                        <input type="password"
                        name="password"
                        placeholder="Create a Password"
                        required
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Create Account
                    </button>

                </form>

                <p className="auth-footer">
                    Already have an account?{" "}
                    <Link to="/Login">Login</Link>
                </p>
                
            </div>

        </div>
    );
}

export default Register;