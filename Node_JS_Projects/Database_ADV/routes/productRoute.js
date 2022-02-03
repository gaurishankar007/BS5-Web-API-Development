const express = require("express");
const router = new express.Router();
const product = require("../models/productModel");
const auth = require("../auth/auth");
const productFile = require("../upload/setting/product");

/*
const productData  = new product({
    pName: "Marker",
    pPrice: "$10",
    pColor: "Black"
});

productData.save();
*/
 
router.post("/product/insert", auth.verifyUser, productFile.single("product_image"), function(req, res){
    const pName = req.body.pName;
    const pPrice = req.body.pPrice;
    const pColor = req.body.pColor;
    const pImage = req.file.filename;
    const productData = new product({
            pName: pName,
            pPrice: pPrice,
            pColor: pColor,
            pImage: pImage
        });
    productData.save().then(()=> {            
        res.json({message: "Product added successfully."});
    });
});

router.get("/product/get", auth.verifyUser, async function(req, res) {
    const productData = await product.find();
    res.status(200).send(productData);
});

router.delete("/product/delete/:id", auth.verifyUser, function(req, res) {
    const id = req.params.id;
    product.findByIdAndDelete(id).then(()=> {        
        res.send("product has been deleted successfully.");
    }).catch((e)=> {
        console.log(e);
    });
});

router.get("/product/update/:pId", auth.verifyUser, function(req, res) { 
    const id = req.params.pId;
    product.findById(id).then((result)=>  {
        res.status(200).send(result);
    });
});

router.put("/product/update", auth.verifyUser,  function(req, res) {  
    const id = req.body.pid;
    const name = req.body.name;
    const price = req.body.price;
    const color = req.body.color;
    product.updateOne({_id: id}, {pName: name, pPrice: price, pColor: color}).then((result)=> {
        res.status(200).send({message: "Product Updated"});
    }).catch();
});

// router.delete("/product/delete/:id", function(req, res) {
//     res.send("mobile has been deleted successfully.");
//     const id = req.body.id; // but you have to give {"id": "61a31d43fef4d97eb7a6e471"} in body of postman
//     product.findByIdAndDelete(id).then().catch();
// });

module.exports = router;