import prisma from "../db";

export const createRoom = async (req, res, next) => {
	try {
		const room = await prisma.room.create({
			data: {
				name: req.body.name,
				capacity: req.body.capacity,
			},
		});

		res.json({ room });
	} catch (err) {
		console.error(err);
	}
};

export const getRoom = async (req, res, next) => {
	try {
		const room = await prisma.room.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ room });
	} catch (err) {
		console.error(err);
	}
};

export const updateRoom = async (req, res, next) => {
	try {
		const room = await prisma.room.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: req.body.name,
				capacity: req.body.capacity,
			},
		});
		res.json({ room });
	} catch (err) {
		console.error(err);
	}
};

export const deleteRoom = async (req, res, next) => {
	try {
		const room = await prisma.room.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ room });
	} catch (err) {
		console.error(err);
	}
};
