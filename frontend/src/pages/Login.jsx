import {Link, useNavigate} from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if(response.ok) {
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/dashboard");
            } else {
                alert(data.message);
            }
        } catch(error) {
            console.error("Login error:",error);
            alert("Unable to connect to the server");
        }
    };

    return(
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Welcome back</h1>
                    <p>Login to continue your career journey.</p>
                </div>

                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                        name="email" 
                        placeholder="Enter your Email"
                        required
                        />
                        
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                        name="password"
                        placeholder="Enter your Password"
                        required
                        />
                        
                    </div>

                    <button type="submit" className="auth-button">
                        Login
                    </button>

                </form>

                <p className="auth-footer">
                 <Link to="/forgot-password">Forgot Password?</Link>
                </p>

                <p className="auth-footer">
                    Don't have an Account?{" "}
                    <Link to="/register">Create One</Link>
                </p>

            </div>
        </div>
    );
}

export default Login;