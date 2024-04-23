import express from 'express';
import {
    addApp,
    updateApp,
    deleteApp,
    getApp,
    getAllApps,
} from '../controllers/apps.controller.js'
const router = express.Router();


router.post("add", addApp);
router.put("update", updateApp);
router.get("/user/:id", deleteApp);
router.get("/users", getApp);
router.delete("/deluser", getAllApps)

export default router;