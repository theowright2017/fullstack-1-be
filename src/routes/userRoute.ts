import express from "express";
import { body } from "express-validator";
import { protect } from "../helpers/auth";
import {
	createNewUser,
	getUser,
	updateUser,
	deleteUser,
    login,
} from "../handlers/user";

const userRouter = express.Router();

userRouter.post(
	"/users",
	body("name").exists().isString(),
	body("email").exists().isString(),
	body("password").exists().isString(),
	createNewUser
);

userRouter.post(
    'users/login',
    body('email').exists().isString(),
    body('password').exists().isString(),
    login
)

userRouter.get("/users/:id", protect, getUser);

userRouter.put(
	"users/:id",
	body("name").isString(),
	body("email").isString(),
	body("password").isString(),
	protect,
	updateUser
);

userRouter.delete("users/:id", protect, deleteUser);

export default userRouter