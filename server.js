import express from "express";
import mongoose from "mongoose";
import usersRouter from "./routes/User.routes.js";
import questionsRouter from "./routes/Questions.routes.js";
import resultsRouter from "./routes/Result.routes.js";
import cors from "cors";

const port = 3001;
const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://tousif:tousif777@cluster0.5c37q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(`Error: ${error}`));
db.once("open", () => console.log(`DB connected!`));

app.use(express.json());

//routes
app.use(`/users`, usersRouter);
app.use(`/questions`, questionsRouter);
app.use(`/results`, resultsRouter);

app.listen(port, () => console.log(`server has started at port  ${port}`));
