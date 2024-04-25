import express from 'express';
import {
    addApp,
    updateApp,
    deleteApp,
    getApp,
    getAllApps,
} from '../controllers/deviceManagement/apps.controller.js'
const router = express.Router();


router.post("/add", addApp);
router.put("/update", updateApp);
router.delete("/user/:id", deleteApp);
router.get("/:id", getApp);
router.get("/", getAllApps)

export default router;