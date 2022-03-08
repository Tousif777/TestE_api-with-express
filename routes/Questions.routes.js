import express from "express";
import Questions from "../models/Questions.js";

const router = express.Router();

//create a question
router.post("/", async (req, res) => {
  try {
    const question = new Questions(req.body);
    await question.save();
    res
      .status(201)
      .send(`Question ${question.question} has been created successfully!`);
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete a question by id
router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const question = await Questions.findByIdAndDelete(_id);
    if (!question) {
      return res.status(404).send();
    }
    res.send(question);
  } catch (error) {
    res.status(500).send(error);
  }
});
// get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Questions.find({});
    res.send(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
