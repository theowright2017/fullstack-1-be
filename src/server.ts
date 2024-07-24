import express from "express";
import morgan from "morgan";
import cors from "cors";
import { validate } from "./middleware/validate";
import examRouter from "./routes/examRoute";
import userRouter from "./routes/userRoute";
import cohortRouter from "./routes/cohortRoute";
import studentRouter from "./routes/studentRoute";
import sessionRouter from "./routes/sessionRoute";
import roomRouter from "./routes/roomRoute";
import staffRouter from "./routes/staffRoute";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', validate, examRouter);
app.use('/api', validate, userRouter);
app.use('/api', validate, cohortRouter);
app.use('/api', validate, studentRouter);
app.use('/api', validate, sessionRouter);
app.use('/api', validate, roomRouter);
app.use('/api', validate, staffRouter);

export default app;