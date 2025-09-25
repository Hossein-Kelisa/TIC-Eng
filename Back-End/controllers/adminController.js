import User from "../models/userModel.js";
import AppError from "../utils/AppError.js";

export const makeAdmin = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return next(new AppError(req.__("user.not_found"), 404));
    }
    user.isAdmin = true;
    await user.save();
    res.status(200).json({
      status: "success",
      message: req.__("user.promoted_admin"),
    });
  } catch (err) {
    next(err);
  }
};
