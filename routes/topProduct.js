const router = require("express").Router();
const topProduct = require('../models/topProduct')
const queryString = require('query-string')

router.get("/:id", async (req, res) => {
    try {
        const product = await topProduct.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
});


router.get("/", async (req, res) => {
    try {
        const product = await topProduct.find()
        const result = {
            product: product
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;