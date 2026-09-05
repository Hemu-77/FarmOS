import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const header = req.headers.authorization;

        if (!header) {
            return res.status(401).json({
                message: "Authorization header missing",
            });
        }

        const [bearer, token] = header.split(" ");

        if (bearer !== "Bearer" || !token) {
            return res.status(401).json({
                message: "Invalid authorization format",
            });
        }

        const user = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = user.userId;

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};