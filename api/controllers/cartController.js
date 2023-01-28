import Cart from "../model/Cart.js";
import User from "../model/User.js";

export const addCartItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    let cartItem = req.body;
    const decreaseQuery = req.query.decrease;
    const userCheck = await User.findById(id);
    if (userCheck) {
      const orderCheck = await Cart.findOne({ user: id });
      if (!orderCheck) {
        const newCart = Cart.create({
          user: id,
          orderItems: [cartItem],
        });
        res.status(200).json(newCart);
      }
      const { orderItems } = orderCheck;
      const productAlready = orderItems.find(
        ({ product }) => product.toString() === cartItem.product
      );
      if (!productAlready) {
        const newCart = await Cart.findByIdAndUpdate(
          orderCheck._id,
          {
            orderItems: [...orderItems, cartItem],
          },
          { new: true }
        );
        return res.status(200).json(newCart);
      } else {
        orderCheck.update(
          {
            "orderItems._id": productAlready._id,
          },
          {
            $set: {
              "orderItems.$.quantity": parseFloat(
                decreaseQuery
                  ? (productAlready.quantity -= 1) // trừ 1 khi bấm giảm sản phẩm
                  : (productAlready.quantity += parseFloat(cartItem.quantity)) // tăng tùy ý
              ),
            },
          }
        );
        if (productAlready.quantity === 0) {
          console.log("Vo");
          console.log(orderItems);
          const deleteItem = orderItems.filter(
            (item) => productAlready.product !== item.product
          );
          console.log(deleteItem, "DELETE");
          if (deleteItem) {
            const newCart = await Cart.findByIdAndUpdate(orderCheck._id, {
              $set: {
                orderItems: deleteItem,
              },
            });
            return res.status(200).json(newCart);
          } else {
            const newCart = await Cart.findByIdAndUpdate(orderCheck._id, {
              $set: {
                orderItems: [],
              },
            });
            return res.status(200).json(newCart);
          }
        } else {
          const newCart = await Cart.findByIdAndUpdate(orderCheck._id, {
            $set: orderCheck,
          });
          return res.status(200).json(newCart);
        }
      }
    } else {
      res.status(200).json({ error: true, msg: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Cart.findOne({ user: id });
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
