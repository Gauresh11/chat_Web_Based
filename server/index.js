const express = require('express');
const cors  = require('cors');
const authRoutes = require("./routes/auth.js");
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
    origin: '*'
}));
app.get('/', (req,res) =>{
    res.send("hello world!");
});
app.use('/auth', authRoutes);
app.listen(PORT,()=> console.log(`Server Running on port ${PORT}`));
