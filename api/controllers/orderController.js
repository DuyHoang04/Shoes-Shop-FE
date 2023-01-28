import Order from "../model/Order.js";
import Cart from "../model/Cart.js";

export const createOrder = async (req, res, next) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethods,
      phoneNumber,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(404).json("No Order Item");
    } else {
      const order = new Order({
        user: req.user.id,
        orderItems,
        shippingAddress,
        paymentMethods,
        phoneNumber,
        shippingPrice,
        totalPrice,
      });

      const createOrder = await order.save();
      await Cart.findOneAndDelete({ user: req.user.id });
      await res.status(200).json(createOrder);
    }
  } catch (err) {
    next(err);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({ user: id });
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
