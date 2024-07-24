import prisma from "../db";

export const createSession = async (req, res, next) => {
	try {
		const session = await prisma.session.create({
			data: {
				examId: req.body.examId,
				roomId: req.body.roomId,
				staffId: req.body.staffId,
				startTime: req.body.startTime,
				endTime: req.body.endTime,
			},
		});

		res.json({ session });
	} catch (err) {
		console.error(err);
	}
};

export const deleteSession = async (req, res, next) => {
    try {
        const session = await prisma.session.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        res.json({ session });
    } catch (err) {
        console.error(err);
    }
};

export const getSession = async (req, res, next) => {
    try {
        const session = await prisma.session.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        res.json({ session });
    } catch (err) {
        console.error(err);
    }
};

export const updateSession = async (req, res, next) => {
    try {
        const session = await prisma.session.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                ...req.body
            },
        });
        res.json({ session });
    } catch (err) {
        console.error(err);
    }   
};
