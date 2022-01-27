const express = require("express");
const router = new express.Router();
const product = require("../models/productModel");
const auth = require("../auth/auth");

/*
const productData  = new product({
    pName: "Marker",
    pPrice: "$10",
    pColor: "Black"
});

productData.save();
*/
 
router.post("/product/insert", auth.verifyUser, function(req, res){
    const productData = new product(req.body);
    productData.save().then(()=> {            
        res.json({message: "Product added successfully."});
    });
});

router.delete("/product/delete/:id", function(req, res) {
    res.send("product has been deleted successfully.");
    const id = req.params.id;
    product.findByIdAndDelete(id).then().catch();
});

router.put("/product/update", function(req, res) {    
    res.send("product has been updated successfully.");
    const id = req.body.myid;
    const name = req.body.name;
    const price = req.body.price;
    product.updateOne({_id: id}, {pName: name, pPrice: price}).then().catch();
    // postman body
    // {
    //     "myid": "61a31ce3da5833ecdf61d5d4",
    //     "name": "HDMI Cable"
    // }
});

// router.delete("/product/delete/:id", function(req, res) {
//     res.send("mobile has been deleted successfully.");
//     const id = req.body.id; // but you have to give {"id": "61a31d43fef4d97eb7a6e471"} in body of postman
//     product.findByIdAndDelete(id).then().catch();
// });

module.exports = router;