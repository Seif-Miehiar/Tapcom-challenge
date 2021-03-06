const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
require('dotenv').config()
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const connectDB = require('./database/db')
const authRoutes = require("./routes/auth.route")
const catagoryRoutes = require('./routes/catagory.route')
const productRoutes = require("./routes/product.route")

// middlewares
app.use(cors());
//to parse incoming data to express server
app.use(express.json());
app.use(cookieParser())
//for devlopment use only
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use('/api/catagory', catagoryRoutes)
app.use('/api/product', productRoutes);
app.use(express.static(path.join(__dirname, 'client/build')));


// creating connection with database
connectDB();

// port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})