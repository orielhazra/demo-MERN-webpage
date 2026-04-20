import { Router } from 'express';
import { getBrands, getCases, getHomeContent } from '../controllers/contentController.js';

const router = Router();

router.get('/home', getHomeContent);
router.get('/cases', getCases);
router.get('/brands', getBrands);

export default router;
