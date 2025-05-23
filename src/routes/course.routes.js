import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Course route ishladi' });
});

export default router;
