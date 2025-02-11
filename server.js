const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Replace with your MongoDB URI)
/*mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const QuizSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Quiz = mongoose.model("Quiz", QuizSchema);

// API to add a quiz entry
app.post("/add-quiz", async (req, res) => {
  const { question, answer } = req.body;
  const newQuiz = new Quiz({ question, answer });
  await newQuiz.save();
  res.json({ message: "Quiz added!" });
});

// API to fetch all quizzes
app.get("/quizzes", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});
*/
// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running locally!");
});

const PORT = process.env.PORT || 3001;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Sample route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
