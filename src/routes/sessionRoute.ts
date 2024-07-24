import express from "express";
import { body } from "express-validator";
import { protect } from "../helpers/auth";
import {
	createSession,
	deleteSession,
	getSession,
	updateSession,
} from "../handlers/session";

const sessionRouter = express.Router();

sessionRouter.post(
	"/sessions",
	body("examId").exists().isString(),
	body("roomId").exists().isString(),
	body("staffId").exists().isString(),
	body("startTime").exists(),
	body("endTime").exists(),
	protect,
	createSession
);

sessionRouter.get("/sessions/:id", protect, getSession);

sessionRouter.put(
	"/sessions/:id",
	body("roomId").exists().isString(),
	body("staffId").exists().isString(),
	body("startTime").exists(),
	body("endTime").exists(),
	protect,
	updateSession
);

sessionRouter.delete("/sessions/:id", protect, deleteSession);

export default sessionRouter;
