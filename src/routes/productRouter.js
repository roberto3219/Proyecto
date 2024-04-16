const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")

router.get("/all",productController.product)
router.get("/create",productController.create_design)
router.post("/create",productController.create)
router.get("/update/:id",productController.Update_design)
router.put("/update/:id",productController.Update)
router.delete("/delete/:id",productController.Delete)
router.get("/build_pc")

module.exports = router