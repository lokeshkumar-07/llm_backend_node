import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyUser = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) return res.status(401).json({ message: "Access Denied!" });

  try {
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verifiedToken.id;
    req.role = verifiedToken.role;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token Expired" });
  }
};

export const verifyAdmin = async (req, res, next) => {
  try {
    if (req.role !== "admin") {
      return next(createError(403, "You are not an Admin!"));
    }

    next();
  } catch (err) {
    next(err);
  }
};
