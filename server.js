const express = require('express')
const app = express()
const mongoose = require('mongoose');



const ProductRoute = require('./routecontrol/product.route')
app.use(express.json()) // middleware

app.use("/api/products",ProductRoute);

app.get( '/', (req, res) => {
res.send("Hello from Node Api updated now");
});


mongoose.connect('mongodb://localhost:27017/curd_op')
  .then(() => {console.log('Connected!');

  app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
});








