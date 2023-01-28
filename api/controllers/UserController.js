import User from "../model/User.js";

export const UpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res
      .status(200)
      .json({ status: true, msg: "Update Thành Công", updateUser });
  } catch (err) {
    next(err);
  }
};

export const DeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ status: true, msg: "Delete Thành Công", deleteUser });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getUser = await User.findById(id);
    const { password, ...more } = getUser._doc;
    res.status(200).json({ ...more });
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  if (req.user.isAdmin) {
    const queryNew = req.query.new;
    try {
      let user;
      if (queryNew) {
        user = await User.find().sort({ createAt: -1 }).limit(5);
      } else {
        user = await User.find();
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

// export const getUserStats = async (req, res, next) => {
//   const date = newDate();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await User.aggregate([
//       { $match: { createAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: {$month: "$createAt"}
//         }
//       },
//       {
//         $group: {
//           _id: "$month",
//           total:
//         }
//       }
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };
