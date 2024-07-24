import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../helpers/auth";

export const createNewUser = async (req, res, next) => {
	try {
		const hashedPassword = await hashPassword(req.body.password);
		const user = await prisma.user.create({
			data: {
				name: req.body.name,
				email: req.body.email,
				password: hashedPassword,
			},
		});
		res.json({ id: user.id, name: user.name, email: user.email });
	} catch (err) {
		console.error(err);
	}
};

export const login = async (req, res, next) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email: req.body.email,
			},
		});
		if (!user) {
			res.status(401);
			res.json({ message: "invalid email or password" });
			return;
		}
		const isMatch = await comparePasswords(req.body.password, user.password);
		if (!isMatch) {
			res.status(401);
			res.json({ message: "invalid email or password" });
			return;
		}
		const token = createJWT(user);
		res.json({ token });
	} catch (err) {
		console.error(err);
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ user });
	} catch (err) {
		console.error(err);
	}
};

export const updateUser = async (req, res, next) => {
	try {
		const user = await prisma.user.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: req.body.name,
				email: req.body.email,
			},
		});
		res.json({ user });
	} catch (err) {
		console.error(err);
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		const user = await prisma.user.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ user });
	} catch (err) {
		console.error(err);
	}
};
