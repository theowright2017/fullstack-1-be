import express from "express";
import { body } from "express-validator";
import { protect } from "../helpers/auth";
import {
	createNewExam,
	deleteExam,
	getExam,
	updateExam,
} from "../handlers/exams";

const examRouter = express.Router();

examRouter.post(
	"/exams",
	body("name").exists().isString(),
	body("description").isString(),
	protect,
	createNewExam
);

examRouter.get("/exams/:id", protect, getExam);

examRouter.put("exams/:id", protect, updateExam);

examRouter.delete("exmas/:id", protect, deleteExam);

export default examRouter;
