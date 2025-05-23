import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    res.send('Branch created');
});

export default router;
