const bodyParser = require("body-parser");
const express = require('express');
const app = express();
// const PORT = process.env.port || 8080;
const userRoutes = require("./server/routes/users.routes");


app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist"))

app.use("/users", userRoutes);

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.get('/*', (req, res)=>{
    res.redirect('back');
})

app.listen(8080);