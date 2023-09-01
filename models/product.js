import { Schema, model } from "mongoose";


const ProductSchema = new Schema({
    name:{type:String, required:true, },
    price:{type:Number, required:true, },
    description:{type:String, required:true, },
    image:[String],
    category:{type:Schema.Types.ObjectId, ref:'Category', required:true}
}, {timestamps:true})

const Product = model('Product', ProductSchema)

export default Product;
