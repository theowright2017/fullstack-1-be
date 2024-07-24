import express from "express";
import { body } from "express-validator";
import { protect } from "../helpers/auth";
import {
	createStudent,
	getStudent,
	updateStudent,
	deleteStudent,
} from "../handlers/student";

const studentRouter = express.Router();

studentRouter.post(
	"/students",
	body("name").exists().isString(),
	body("email").exists().isString(),
	protect,
	createStudent
);

studentRouter.get("/students/:id", protect, getStudent);

studentRouter.put(
	"/students/:id",
	body("name").isString(),
	body("email").isString(),
	body("cohortId").isString(),
	protect,
	updateStudent
);

studentRouter.delete("/students/:id", protect, deleteStudent);

export default studentRouter;
