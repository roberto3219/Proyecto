const express = require("express")
const router = express.Router()

//controller

const mainController=require("../controllers/mainController")

//Router

router.get("/",mainController.index);

module.exports = router