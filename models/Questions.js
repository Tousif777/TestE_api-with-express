import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

//.model(name_of_model_in_db, the_schema)
const Questions = mongoose.model("Questions", questionsSchema);
export default Questions;
