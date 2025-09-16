import express, { Router } from 'express';

import userRoutes from './UserRoutes';

const router: Router = express.Router();

router.use('/users', userRoutes);

export default router;