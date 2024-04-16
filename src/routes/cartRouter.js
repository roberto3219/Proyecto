const express = require("express")
const router = express.Router()

const cartController = require("../controllers/cartController")

router.get("/",cartController.index)
router.put("/remove/:id",cartController.remove)
router.delete("/delete/:id",cartController.delete)
router.put("/comprar",cartController.buy)

module.exports = router