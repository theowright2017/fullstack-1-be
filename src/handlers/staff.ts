import prisma from "../db";

export const createStaff = async (req, res, next) => {
	try {
		const staff = await prisma.staff.create({
			data: {
				name: req.body.name,
				email: req.body.email,
			},
		});
		res.json({ staff });
	} catch (err) {
		console.error(err);
	}
};

export const getStaff = async (req, res, next) => {
	try {
		const staff = await prisma.staff.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ staff });
	} catch (err) {
		console.error(err);
	}
};

export const updateStaff = async (req, res, next) => {
	try {
		const staff = await prisma.staff.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: req.body.name,
				email: req.body.email,
				roleId: req.body.roleId,
			},
		});
		res.json({ staff });
	} catch (err) {
		console.error(err);
	}
};

export const deleteStaff = async (req, res, next) => {
	try {
		const staff = await prisma.staff.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ staff });
	} catch (err) {
		console.error(err);
	}
};
