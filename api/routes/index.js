import express from 'express';

import user from './user.route.js'
import authentifier from './auth.route.js';
import apparail from './app.route.js';
// import historique from './historique.route.js'

const router = express.Router();

router.use("/api/user", user);
router.use("/api/auth", authentifier);
router.use("/api/app", apparail);
// router.use("/api/historique", historique);

export default router;