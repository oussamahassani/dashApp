import express from 'express';
import {
    getAppHistory,
    getAllAppsHistory,
} from '../controllers/historique.controller.js'
const router = express.Router();

router.get("/app/:id", getAppHistory);
router.get("/apps/history", getAllAppsHistory);


export default router;