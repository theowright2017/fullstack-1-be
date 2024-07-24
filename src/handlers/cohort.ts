import prisma from "../db";

export const createCohort = async (req, res, next) => {
	try {
		const cohort = await prisma.cohort.create({
			data: {
				name: req.body.name,
				examId: req.body.examId,
			},
		});

		res.json({ cohort });
	} catch (err) {
		console.error(err);
	}
};

export const getCohort = async (req, res, next) => {
	try {
		const cohort = await prisma.cohort.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ cohort });
	} catch (err) {
		console.error(err);
	}
};

export const updateCohort = async (req, res, next) => {
	try {
		const cohort = await prisma.cohort.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: req.body.name,
			},
		});
		res.json({ cohort });
	} catch (err) {
		console.error(err);
	}
};

export const deleteCohort = async (req, res, next) => {
	try {
		const cohort = await prisma.cohort.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ cohort });
	} catch (err) {
		console.error(err);
	}
};
