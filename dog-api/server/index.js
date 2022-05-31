import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import dogRouter from "./routes/dog.js";


const app = express();

app.use(morgan("dog-api"));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/users", userRouter);
app.use("/dog", dogRouter);
const MONGODB_URL = "mongodb+srv://banana:pk520520@my-cluster.knk7s.mongodb.net/?retryWrites=true&w=majority"

const port = 5000;

mongoose.connect(MONGODB_URL).then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)});
})
.catch((error) => console.log(`${error} did not connect`));