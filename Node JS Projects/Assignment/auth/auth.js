const jwt = require("jsonwebtoken");
const user = require("../models/userModel.js");

// guard for normal user
module.exports.verifyUser = function(req, res, next) {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, "mountainDuke");
        user.findOne({_id: userData.userId}).then((userData1)=>{
            req.userInfo = userData1;
            next();
        }).catch(function(e){
            res.json({error: e});
        });
    }
    catch(e) {
        res.json({error: e});
    }
} 

// guard for admin user
module.exports.verifyAdmin = function(req, res, next) {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, "mountainDuke");
        user.findOne({_id: userData.userId}).then((userData1)=>{
            req.userInfo = userData1;
            next();
        }).catch(function(e){
            res.json({error: e});
        });
    }
    catch(e) {
        res.json({error: e});
    }
} 