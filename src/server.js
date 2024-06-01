
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: 'https://your-frontend-domain.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.get("/", (req,res)=>{
res.send("server working");
});

app.listen(8080, ()=>{
console.log("Server Listen on http://localhost:8080");
});
 
