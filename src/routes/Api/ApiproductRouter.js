const express = require("express")
const router = express.Router()

const ApiproductController = require("../../controllers/Api/productControllerApi")

router.get("/",ApiproductController.main)

module.exports = router