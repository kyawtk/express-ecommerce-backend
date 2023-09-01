import { model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    customer: { type: String, required: true },
    phone: { type: String, required: true },
    order: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],
    address: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);

export default Order;
