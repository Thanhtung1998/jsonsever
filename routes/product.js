const router = require("express").Router();
const Product = require('../models/Product')
const queryString = require('query-string')

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get("/all", async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/", async (req, res) => {

    try {

        const queryParam = queryString.parse(req._parsedUrl.query)


        // console.log(queryParam);

        const _skip = (queryParam._page - 1) * queryParam._limit || 10
        const _limit = Number.parseInt(queryParam._limit) || 10
        const productLength = await Product.find();

        const product = await Product.find().limit(_limit).skip(_skip).exec()


        const result = {
            product: product,
            pagination: {
                _page: Number.parseInt(queryParam._page) || 1,
                _limit: _limit,
                _totalRow: Number.parseInt(productLength.length),
            }
        }
        res.status(200).jsonp(result);


    } catch (error) {
        res.status(500).jsonp(error)
    }

})

module.exports = router;