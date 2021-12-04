const express = require("express");
const router = new express.Router();

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
    res.send("Hello there! new user has been added.")
    console.log("Username: " + req.body.pName+ ", Address: "+ req.body.address);
    const userData = new user(req.body);
    userData.save();
});

router.put("/user/update/:id", function(req, res) {
    res.send("User has been successfully updated.");
    user.updateOne({_id: req.params.id}, {phone: "9801236547", address: "Thamel"}).then().catch();
});
// router.delete();
// router.get();

module.exports = router;