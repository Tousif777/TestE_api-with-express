import express from "express";
import User from "../models/User.js";

const router = express.Router();

//create a user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res
      .status(201)
      .send(
        `User ${user.name} with email ${user.email} has been created successfully!`
      );
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get a user by id
router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete a user by id
router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update a user by id
router.put("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// login a user by email and password
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send();
    }
    if (user.password !== password) {
      return res.status(404).send();
    }
    if (user.email !== email) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
