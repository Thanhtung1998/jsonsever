const router = require("express").Router();
const Product = require('../models/Product')

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get("/", async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;