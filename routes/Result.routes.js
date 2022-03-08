import express from "express";
import Result from "../models/Result.js";

const router = express.Router();

//create a result
router.post("/", async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res
      .status(201)
      .send(
        `Result ${result.name} with score ${result.score} has been created successfully!`
      );
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all results
router.get("/", async (req, res) => {
  try {
    const results = await Result.find({});
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete a result by id
router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await Result.findByIdAndDelete(_id);
    if (!result) {
      return res.status(404).send();
    }
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
