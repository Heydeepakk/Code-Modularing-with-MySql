import Product from "../models/datatype.js";

export const findbook = async(req,res)=>{
    try {
    const book = await Product.findAll({
    });
    res.send(book[0]);
} catch (err) {
    console.log(err);
    res.status(501).send("something went wrong")

}
};

export const findbookbyid = async(req,res)=>{
    try {
    const book = await Product.findAll({
        where: {
            id: req.params.id
        }
    });
    res.send(book[0]);
} catch (err) {
    console.log(err);
    res.status(501).send("something went wrong")

}
};

export const uploadbook = async(req,res)=>{
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
        res.status(501).send("something went wrong")

    }
    };

export const updatebook = async(req,res)=>{
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
};

export const deletebook = async(req,res)=>{
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
};

