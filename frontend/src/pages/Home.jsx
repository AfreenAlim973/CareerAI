import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return(
        <div className="home">
            {/*Navabr*/}
            <nav className ="navbar">
                <h2 className="logo">CareerAI</h2>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register" className="nav-button">Get Strarted</Link>
                </div>
            </nav>

            {/*Hero Section*/}
            <section className="hero">
                <div className="hero-content">
                    <p className="tagline">AI-POWERED CAREER GUIDANCE</p>

                    <h1>
                        Build the career
                        <br />
                        <span>you deserve.</span>
                    </h1>

                    <p className="hero-text">
                        Discover the right career path, identify your skill gaps, and get a personalized roadmap to reach your goals.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/register" className="primary button">
                        Get started
                        </Link>

                        <Link to="/login" className="secondary button">
                        Login
                        </Link>
                    </div>
                </div>

            </section>

            {/*Features*/}
            <section className="features">

                <h2>Everything you need to plan your career</h2>

                <div className="feature-container">
                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h3>Career Guidance</h3>
                        <p>
                            Discover career options based on your skills,interests and goals.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3>Skill Gap Analysis</h3>
                        <p>Understand which skill you already have and which ones you need to develope.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🗺️</div>
                        <h3>Learning Roadmap</h3>
                        <p>
                            Follow a personalized step-by-step roadmap towards your chosen career.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;