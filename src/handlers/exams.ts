import prisma from "../db";


export const createNewExam = async (req, res, next) => {
	try {
		const exam = prisma.exam.create({
			data: {
				name: req.body.name,
				description: req.body.description,
			},
		});

		res.json({ exam });
	} catch (err) {
		console.error(err);
	}
};

export const getExam = async (req, res, next) => {
	try {
		const exam = prisma.exam.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ exam });
	} catch (err) {
		console.error(err);
	}
};

export const updateExam = async (req, res, next) => {
	try {
		const exam = prisma.exam.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: req.body.name,
				description: req.body.description,
			},
		});
		res.json({ exam });
	} catch (err) {
		console.error(err);
	}
};

export const deleteExam = async (req, res, next) => {
	try {
		const exam = prisma.exam.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ exam });
	} catch (err) {
		console.error(err);
	}
};
