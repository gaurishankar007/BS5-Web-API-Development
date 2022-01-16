const express = require("express");
const router = new express.Router();

const bcryptjs = require("bcryptjs");

const user = require("../models/userModel");

/*
const userData = new user({
    username: "Gauri",
    phone: "9816346714",
    address: "Morang, Sundarharaincha-1",
});

userData.save();
*/

router.post("/user/insert", function(req, res) {
    console.log("Username: " + req.body.username+ ", Address: "+ req.body.address);
    const username = req.body.username;
    const phone = req.body.phone;
    const address = req.body.address;
    bcryptjs.hash(phone, 10, function(e, hashed_value11){
        const userData = new user({username: username, phone: hashed_value11, address: address});
        userData.save().then(()=> {            
            res.json({message: "Register Success"});
        }
        );
    });
});

router.put("/user/update/:id", function(req, res) {
    res.send("User has been successfully updated.");
    user.updateOne({_id: req.params.id}, {phone: "9801236547", address: "Thamel"}).then().catch();
});
// router.delete();
// router.get();

module.exports = router;