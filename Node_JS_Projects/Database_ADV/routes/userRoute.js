const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");

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
    const username = req.body.username;
    const password = req.body.password;
    const phone = req.body.phone;
    const address = req.body.address;
    bcryptjs.hash(password, 10, function(e, hashed_value11){
        const userData = new user({username: username, password: hashed_value11, phone: phone, address: address});
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

router.post("/user/login", (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    user.findOne({username: username}).then((userData)=> {
        if(userData!=null) {
            // Now comparing client password with the given password
            bcryptjs.compare(password, userData.password, function(e, result){
                if(!result) {
                    return res.json({message: "Incorrect password, try again."});
                }
                // Now lets generate token
                const token = jwt.sign({userId: userData._id}, "loginKey");
                res.json({token: token, message: "Login success"});         
            });
        }
        else {
            res.json({message: "Username did not match."});                    
        }
    });
});
// router.delete();
// router.get();

module.exports = router;