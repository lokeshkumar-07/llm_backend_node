import User from "../models/User.js";

import jwt from "jsonwebtoken";

export const googleSignIn = async (req, res, next) => {
  try {
    const { displayName, photoURL, email } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      const token = jwt.sign(
        { id: existingUser._id, role: existingUser.role },
        process.env.JWT_SECRET,
        { expiresIn: "90d" }
      );

      res.status(201).send({
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
        avatar: existingUser.avatar,
        token: token,
      });
    } else {
      const user = await User.create({
        verified: "true",
        email,
        name: displayName,
        avatar: photoURL,
      });

      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "90d" }
      );

      res.status(201).send({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
        token: token,
      });
    }
  } catch (err) {
    next(err);
  }
};
