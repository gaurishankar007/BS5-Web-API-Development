const mongoose = require("mongoose");

const product = mongoose.model('Product', {
    pName: {
        type: String
    },
    pPrice: {
        type: String
    },
    pColor: {
        type: String
    },
    pImage: {
        type: String
    }
});

module.exports = product;