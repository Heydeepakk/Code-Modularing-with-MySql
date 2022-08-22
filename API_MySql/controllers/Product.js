import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
        res.status(501).send("something went wrong")
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
        res.status(501).send("something went wrong")

    }
}

export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
        res.status(501).send("something went wrong")

    }
}

export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
        res.status(501).send("something went wrong")

    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
        res.status(501).send("something went wrong")

    }
}