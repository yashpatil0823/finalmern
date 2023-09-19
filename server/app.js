const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

require("./db/conn")
const USER = require("./model/userSchema")

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));
//middleware 

const middleware = (req,res,next)=>{
    console.log(`middleware here`)
    next();
}

// app.get("/", (req, res) => {
//     res.send("hello world");
// })
app.get("/about",middleware, (req, res) => {
    console.log("about here")
    res.send("welcome to about page");
})
app.get("/contact", (req, res) => {
    res.cookie("token",'patil');
    res.send("welcome to contact page");
})
app.get("/login", (req, res) => {
    res.send("welcome to login page");
})
// app.get("/register", (req, res) => {
//     res.send("welcome to register page");
// })
app.listen(PORT, () => {
    console.log(`welcome to port ${PORT} `);
})

