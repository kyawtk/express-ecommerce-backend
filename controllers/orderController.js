import Order from "../models/order.js";

//route get 'orders/'
const getAllOrders = async (req, res) => {
  res.send("you are ok");
};

//route post 'orders/'
const createOrder = async (req, res) => {
  const order = new Order(req.body);
  if (order) {
    const savedOrder = await order.save();
    res.status(200).json({ savedOrder });
  } else {
    res.status(400);
    throw new Error("Error creating order");
  }
};

//route delete 'orders/:id'
const deleteOrderbyId = async (req, res) => {
  const { id } = req.params;
  const deletedOrder = await Order.findByIdAndDelete(id);
  if (deletedOrder) {
    res.status(200).json({ deletedOrder });
  }
};
export { getAllOrders, createOrder, deleteOrderbyId };
