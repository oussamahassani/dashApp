import express from 'express';
import {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
} from '../controllers/userManagement/index.js'
import isAuth from '../middlewares/isAuth.js';
import isAdmin from '../middlewares/isAdmin.js';


const router = express.Router();


router.post("/add", isAuth, isAdmin, addUser);
router.put("/:id", isAuth, isAdmin, updateUser);
router.get("/:id", isAuth, isAdmin, getUser);
router.get("/users", isAuth, isAdmin, getAllUsers);
router.delete("/deluser", isAuth, isAdmin, deleteUser)

export default router;