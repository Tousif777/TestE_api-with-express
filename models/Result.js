import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);
export default Result;
