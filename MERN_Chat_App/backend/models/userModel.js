const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")

const userSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},        
        password: {type: String, required: true},
        pic: {type: String, required: true, default: "https://www.shareicon.net/data/2016/09/15/829474_user_512x512.png"}
    },
    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password);
  };

userSchema.pre("save", async function (next) {
    if (!this.isModified) {
      next();
    }
  
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
  });

const user = mongoose.model("user", userSchema);

module.exports = user;