import { model, Schema } from "mongoose";

const CategorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique:true,
  },
});


const Category = model("Category", CategorySchema);
export default Category;
