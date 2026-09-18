const User = require("./models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.use(cors({
    origin: "https://career-ai-two-tau.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CareerAI backend is running!");
});


// REGISTER
app.post("/api/register", async (req, res) => {
  try {
    const { name, password } = req.body;
    const email = (req.body.email || "").toLowerCase().trim();

    if(!name.trim() || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    console.error("Registration error:", error.message);

    res.status(500).json({
      message: "Server error"
    });
  }
});


// LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { password } = req.body;
    const email = (req.body.email || "").toLowerCase().trim();

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

if (!passwordMatch) {
  return res.status(400).json({
    message: "Invalid email or password"
  });
}

    res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login error:", error.message);

    res.status(500).json({
      message: "Server error"
    });
  }
});

// FORGOT PASSWORD
app.post("/api/forgot-password", async (req, res) => {
  try {
    const email = (req.body.email || "").toLowerCase().trim();

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({
        message: "If the email exists, a reset link has been sent."
      });
    }

    const resetToken = require("crypto").randomBytes(32).toString("hex");

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save();

    const resetLink = `https://career-ai-two-tau.vercel.app/reset-password/${resetToken}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "CareerAI Password Reset",
      text: `You requested a password reset for your CareerAI account.

Use this link to reset your password:

${resetLink}

This link will expire in 15 minutes.

If you did not request this, you can ignore this email.`
    });

    res.status(200).json({
      message: "If the email exists, a reset link has been sent."
    });

  } catch (error) {
    console.error("Forgot password error:", error.message);

    res.status(500).json({
      message: "Unable to process password reset"
    });
  }
});

// RESET PASSWORD
app.post("/api/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        message: "Password is required"
      });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        message: "Reset link is invalid or expired"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = "";
    user.resetPasswordExpires = null;

    await user.save();

    res.status(200).json({
      message: "Password reset successfully"
    });

  } catch (error) {
    console.error("Reset password error:", error.message);

    res.status(500).json({
      message: "Server error"
    });
  }
});

app.put("/api/profile", async (req, res) => {
  try {
    const { email, stream, course, skills, interests } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.stream = stream;
    user.course = course;
    user.skills = skills;
    user.interests = interests;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully"
    });

  } catch (error) {
    console.error("Profile update error:", error.message);

    res.status(500).json({
      message: "Server error"
    });
  }
});

// GET PROFILE
app.get("/api/profile/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      stream: user.stream,
      course: user.course,
      skills: user.skills,
      interests: user.interests
    });

  } catch (error) {
    console.error("Get profile error:", error.message);

    res.status(500).json({
      message: "Server error"
    });
  }
});

// SAVE ASSESSMENT RESULT
app.put("/api/assessment", async (req, res) => {
  try {
    const { email, recommendedCareer, assessmentScores } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.recommendedCareer = recommendedCareer;

    user.assessmentScores = assessmentScores;

    await user.save();

    res.status(200).json({
      message: "Assessment result saved successfully"
    });

  } catch (error) {
    console.error("Assessment save error:", error.message);

    res.status(500).json({
      message: "Server error"
    });
  }
});

//Get Assessment result

app.get("/api/assessment/:email", async(req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      recommendedCareer: user.recommendedCareer,
      assessmentScores: user.assessmentScores
    });

  } catch (error) {
    console.error("Get assessment error:", error.message);

    res.status(500).json({
      message: "Server error"
    });
  }
});


app.get("/api/recommendations/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const profileText = `
      ${user.course}
      ${user.skills}
      ${user.interests}
    `.toLowerCase();

    const recommendations = [];

    // Assessment-based recommendation
    if (user.recommendedCareer === "Software Developer") {
      recommendations.push(
        "Software Developer",
        "AI/ML Engineer",
        "Cloud Engineer",
        "Cybersecurity Analyst"
      );
    }

    if (user.recommendedCareer === "UI/UX Designer") {
      recommendations.push(
        "UI/UX Designer",
        "Product Designer",
        "Frontend Developer",
        "Graphic Designer"
      );
    }

    if (user.recommendedCareer === "HR / Counselor") {
      recommendations.push(
        "HR Manager",
        "Career Counselor",
        "Training Specialist"
      );
    }

    if (user.recommendedCareer === "Project Manager") {
      recommendations.push(
        "Project Manager",
        "Product Manager",
        "Business Analyst",
        "Operations Manager"
      );
    }


    // Profile-based personalization

    if (
      profileText.includes("java") ||
      profileText.includes("javascript") ||
      profileText.includes("react") ||
      profileText.includes("node") ||
      profileText.includes("programming") ||
      profileText.includes("coding") ||
      profileText.includes("software")
    ) {
      recommendations.push("Software Developer");
    }

    if (
      profileText.includes("python") ||
      profileText.includes("ai") ||
      profileText.includes("machine learning") ||
      profileText.includes("ml") ||
      profileText.includes("data science")
    ) {
      recommendations.push("AI/ML Engineer");
    }

    if (
      profileText.includes("sql") ||
      profileText.includes("excel") ||
      profileText.includes("data analyst") ||
      profileText.includes("analytics") ||
      profileText.includes("statistics")
    ) {
      recommendations.push("Data Analyst");
    }

    if (
      profileText.includes("cybersecurity") ||
      profileText.includes("security") ||
      profileText.includes("ethical hacking") ||
      profileText.includes("networking")
    ) {
      recommendations.push("Cybersecurity Analyst");
    }

    if (
      profileText.includes("aws") ||
      profileText.includes("azure") ||
      profileText.includes("cloud") ||
      profileText.includes("devops") ||
      profileText.includes("docker")
    ) {
      recommendations.push("Cloud Engineer");
    }

    if (
      profileText.includes("design") ||
      profileText.includes("figma") ||
      profileText.includes("ui") ||
      profileText.includes("ux") ||
      profileText.includes("creativity")
    ) {
      recommendations.push("UI/UX Designer");
    }

    if (
      profileText.includes("leadership") ||
      profileText.includes("management") ||
      profileText.includes("project") ||
      profileText.includes("planning")
    ) {
      recommendations.push("Project Manager");
    }

    if (
      profileText.includes("hr") ||
      profileText.includes("psychology") ||
      profileText.includes("communication") ||
      profileText.includes("counseling")
    ) {
      recommendations.push("HR / Counselor");
    }


    // Remove duplicate careers
    const uniqueRecommendations = [...new Set(recommendations)];

    res.status(200).json({
      recommendedCareer: user.recommendedCareer,
      recommendations: uniqueRecommendations
    });

  } catch (error) {
    console.error(
      "Recommendation error:",
      error.message
    );

    res.status(500).json({
      message: "Server error"
    });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });