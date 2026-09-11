const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    course: {
        type: String,
        default: ""
    },
    skills: {
        type: String,
        default: ""
    },
    interests: {
        type: String,
        default: ""
    },
    recommendedCareer: {
        type: String,
        default: ""
    },
    assessmentScores: {
        type: Object,
        default: {}
    },
    resetPasswordToken: {
    type: String,
    default: ""
    },
    resetPasswordExpires: {
    type: Date,
    default: null
    }
});

module.exports = mongoose.model("User", userSchema);