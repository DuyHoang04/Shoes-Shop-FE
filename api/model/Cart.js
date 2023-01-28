import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  orderItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      product: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    },
  ],
});

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
