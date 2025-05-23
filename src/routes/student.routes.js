import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Student route ishladi' });
});

export default router;
