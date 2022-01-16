const express = require("express");
const app = express();
const cors = require("cors"); // Accepts requests from other websites,
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

require("./database/db");

const userRoute = require("./routes/userRoute");
app.use(userRoute);

const productRoute = require("./routes/ProductRoute");
app.use(productRoute);

app.listen(80);