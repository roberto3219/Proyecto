const express = require("express")
const router = express.Router()

const usersController = require("../controllers/userController")

router.get("/register",usersController.register_design)
router.post("/register",usersController.register)
router.get("/sign_In",usersController.signIn_design)
router.post("/sign_In",usersController.signIn)
router.get("/help",usersController.help)
module.exports = router