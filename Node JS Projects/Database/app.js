const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/first-node-mangodb', {
    useNewUrlParser: true,
    useUnifiedTopology : true
});

const user = mongoose.model('User', {
    username: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
});

const product = mongoose.model('Product', {
    pName: {
        type: String
    },
    pPrice: {
        type: String
    },
    pColor: {
        type: String
    }
});

/*
const userData = new user({
    username: "Gauri",
    phone: "9816346714",
    address: "Morang, Sundarharaincha-1",
});

userData.save();

const product = mongoose.model("Product", {
    pName: {
        type: String
    },
    pPrice: {
        type: String
    },
    pColor: {
        type: String
    }
});

const productData  = new product({
    pName: "Marker",
    pPrice: "$10",
    pColor: "Black"
});

productData.save();
*/
 
app.post("/product/insert", function(req, res){
    res.send("Hello there! new product has been added.");
    const productData = new product(req.body);
    productData.save();
});

// app.post("/user/insert", function(req, res) {
//     res.send("Hello there! new user has been added.")
//    console.log("Username: " + req.body.pName+ ", Address: "+ req.body.address);
//     const userData = new user(req.body);
//     userData.save();
// });

app.listen(90);