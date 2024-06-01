
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: 'https://codejava-app-10-frontend-1ef5c823fa33.herokuapp.com',
}));
app.get("/", (req,res)=>{
res.send("server working");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
 
