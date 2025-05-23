import jwt from 'jsonwebtoken';
import sha256 from 'sha256';

export const register = async (req, res) => {
    const { surname, lastname, email, password, r_password, img, bithDate, role } = req.body;
    if (password !== r_password) return res.status(400).json({ message: 'Passwords invalid' });

    const token = jwt.sign({ email, role }, process.env.JWT_SECRET);
    res.json({ token });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const token = jwt.sign({ email, role: "user" }, process.env.JWT_SECRET);
    res.json({ token });
};

