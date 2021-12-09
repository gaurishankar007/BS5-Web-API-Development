const mongoose = require("mongoose");

const profile = mongoose.model("Profile", {
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "User" // Referring object_id from user module
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    gender: {
        type: String
    },
    birthday: {
        type: Date
    },
    hobbies: {
        type: String
    },
    biography: {
        type: String
    }
});

module.exports = profile;