const express = require("express");

const router = express.Router();

const {
    register,
    login,
    dashboard,
    getUsers,
    getAdmins,
    getDashboard,
    getRoles,
    addRole

} = require("../controller/usercontroller");

const authMiddleware =
require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get(
    "/dashboard",
    authMiddleware,
    dashboard
);
router.get("/users",
    authMiddleware,
    getUsers);

router.get("/admins",
    authMiddleware,
    getAdmins);



router.get("/dashboard-data",
    authMiddleware,
    getDashboard);

    router.get("/roles",
    authMiddleware,
    getRoles);

router.post("/roles", 
    authMiddleware,
    addRole);
module.exports = router;