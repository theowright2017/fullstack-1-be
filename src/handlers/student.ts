import prisma from "../db";

export const createStudent = async (req, res, next) => {
	try {
		const student = await prisma.student.create({
			data: {
				name: req.body.name,
				email: req.body.email,
			},
		});

		res.json({ student });
	} catch (err) {
		console.error(err);
	}
};

export const getStudent = async (req, res, next) => {
	try {
		const student = await prisma.student.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ student });
	} catch (err) {
		console.error(err);
	}
};

export const updateStudent = async (req, res, next) => {
	try {
		const student = await prisma.student.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: req.body.name,
				email: req.body.email,
				cohortId: req.body.cohortId,
			},
		});
		res.json({ student });
	} catch (err) {
		console.error(err);
	}
};

export const deleteStudent = async (req, res, next) => {
	try {
		const student = await prisma.student.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ student });
	} catch (err) {
		console.error(err);
	}
};
