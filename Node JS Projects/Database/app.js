const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/first-node-mangoDB', {
    useNewUrlParser: true,
    useUnifiedTopology : true
});

// const user = mongoose.model('User', {
//     username: {
//         type: String
//     },
//     phone: {
//         type: String
//     },
//     address: {
//         type: String
//     }
// });

// const userData = new user({
//     username: "Gauri",
//     phone: "9816346714",
//     address: "Morang, Sundarharaincha-1",
// });

// userData.save();

// const product = mongoose.model("Product", {
//     pName: {
//         type: String
//     },
//     pPrice: {
//         type: String
//     },
//     pColor: {
//         type: String
//     }
// });

// const productData  = new product({
//     pName: "Marker",
//     pPrice: "$10",
//     pColor: "Black"
// });

// productData.save();
 
app.post("/product/insert", function(req, res){
    res.send("test test test");
    console.log("Username: " + req.body.username+ ", Address: "+ req.body.address);
});

app.listen(90);