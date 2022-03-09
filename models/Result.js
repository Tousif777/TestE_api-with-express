import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);
export default Result;
