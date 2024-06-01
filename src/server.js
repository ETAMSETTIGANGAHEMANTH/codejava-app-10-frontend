
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: 'codejava-app-10-frontend-1ef5c823fa33.herokuapp.com',
}));
app.get("/", (req,res)=>{
res.send("server working");
});

app.listen(8080, ()=>{
console.log("Server Listen on http://localhost:8080");
});
 
