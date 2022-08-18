const express = require('express');
const cors  = require('cors');
const authRoutes = require("./routes/auth.js");
const app = express();

const PORT = process.env.PORT || 5000;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req,res) =>{
    res.send("hello world!");
});
app.use('/auth', authRoutes,);
app.listen(PORT,()=> console.log(`Server Running on port ${PORT}`));
