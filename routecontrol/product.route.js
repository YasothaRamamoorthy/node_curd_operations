const express = require("express");
const router=express.Router();
const product = require('./models/details.model');
const {getProducts,getProductbuid,updateproduct,deleteproduct} = require('../controlers/product.contol.js')

router.post( "/", getProducts);  // add products to the database
router.get('/', getProducts);
router.get('/:id', getProductbuid);
router.put( '/:id' , updateproduct);
router.delete('/:id',deleteproduct);

module.exports =router;