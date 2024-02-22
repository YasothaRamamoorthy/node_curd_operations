const express = require("express");
const router=express.Router();

const {getProducts,getProductbuid,updateproduct,deleteproduct,addproduct} = require('../controlers/product.contol.js')

router.post( "/", addproduct);  // add products to the database


router.get('/', getProducts);
router.get('/:id', getProductbuid);
router.put( '/:id' , updateproduct);
router.delete('/:id',deleteproduct);

module.exports =router;