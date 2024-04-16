const express = require("express")
const router = express.Router()

const userControllerApi = require("../../controllers/Api/userControllerApi")

router.get("/",userControllerApi.index);

module.exports = router