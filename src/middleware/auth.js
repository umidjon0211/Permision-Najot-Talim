import jwt from 'jsonwebtoken';

export const checkToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        res.sendStatus(401);
    }
};

export const isSuperAdmin = (req, res, next) => {
    if (req.user.role !== 'superAdmin') return res.sendStatus(403);
    next();
};
