const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product");
const topProductRoute = require("./routes/topProduct")
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());

dotenv.config();

mongoose
    .connect("mongodb+srv://ShoppingApp:ShoppingApp@cluster0.2bryy.mongodb.net/ShoppingApp?retryWrites=true&w=majority", {
        autoCreate: true
        // useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/TopProduct", topProductRoute);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("Backend server is running!"))