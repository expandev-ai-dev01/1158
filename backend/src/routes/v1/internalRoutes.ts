import { Router } from 'express';
import * as bankController from '@/api/v1/internal/bank/controller';

const router = Router();

router.post('/bank', bankController.postHandler);

export default router;
