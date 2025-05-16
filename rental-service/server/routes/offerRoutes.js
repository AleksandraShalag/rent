import { Router } from "express";
import upload from "../middleware/upload.js";
import { createOffer, getAllOffers } from "../controllers/offerController.js";
import { getFullOffer } from '../controllers/offerController.js';

// const router = new Router();
// router.get('/offers', getAllOffers);

const router = new Router();
router.get('/offers/:id', getFullOffer); // Новый маршрут

router.post('/offers', upload.fields([
    {name: 'previewImage', maxCount: 1},
    {name: 'photos', maxCount: 6}
]),createOffer);


export default router;