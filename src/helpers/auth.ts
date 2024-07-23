import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePasswords = async (
	plainTextPassword: string,
	hashedPassword: string
) => {
	const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
	return isMatch;
};

export const hashPassword = async (password: string) => {
	const hashedPassword = await bcrypt.hash(password, 10);
	return hashedPassword;
};

export const createJWT = (user) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
    );
    return token;
};

export const protect = async (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401);
        res.json({ message: "not authorized" });
        return;
    }
    const [, token] = bearer.split(" ");
    if (!token) {
        res.status(401);
        res.json({ message: "not authorized" });
        return;
    }
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
        res.status(401);
        res.json({ message: "not authorized" });
        return;
    }
   
    req.user = user;
    next();
}