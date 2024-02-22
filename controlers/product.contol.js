const Product=require('../models/details.model');
const product = require('../models/details.model');

const getProducts =async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
}

const getProductbuid = async(req,res)=>{
    try{
        const {id}=req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
}

const addproduct = async(req,res)=>{
    try{
       const product= await Product.create(req.body)
       if(!product){return res.status(400).send("Invalid data")}
        res.send(product);
       res.status(200).json(product);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};

const updateproduct =  async(req,res)=>{
    try{
        const{id} = req.params;
        await product.findByIdAndUpdate(id,req.body);

        if(!product)
        {
            return res.status(404).json({message: "No product found"});
        }

       const updatedproduct= await product.findById(id);
       res.status(200).json(updatedproduct);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
}

const deleteproduct = async (req, res) => {
    try {
        const {id}=req.params;
        await product.findByIdAndDelete(id);
        if(!product)
        return res.status(404).json({message:"product not found"})

        res.status(200).json({message:"product deleted"});
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
}

module.exports ={
    getProducts , getProductbuid , updateproduct,deleteproduct,addproduct
};