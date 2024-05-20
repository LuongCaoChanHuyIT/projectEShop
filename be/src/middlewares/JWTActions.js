import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = (payload) => {
  let token = null;
  try {
    token = jwt.sign(payload, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);
  }
  return token;
};
const verifyToken = (token) => {
  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);
  }

  return decoded;
};
const checkUserJWT = (req, res, next) => {
  let cookies = req.cookies;

  if (cookies && cookies.jwtUserData) {
    let token = cookies;

    let decoded = verifyToken(token.jwtUserData);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      return res.status(401).json({
        mes: "not authenticated the user",
        err: -1,
        data: "",
      });
    }
  } else {
    return res.status(401).json({
      mes: "not authenticated the user",
      err: -1,
      data: "",
    });
  }
};
const checkUserPermission = (req, res, next) => {
  if (req.user) {
    console.log(req.user);
    let email = req.user.email;
    let roles = req.user.groupWithRole.Roles;
    let currentUrl = req.path;
    if (!roles || roles.length === 0) {
      return res.status(403).json({
        mes: "you don't permission to access this resource",
        err: -1,
        data: "",
      });
    }
    let canAccess = roles.some((item) => item.url === currentUrl);
    if (canAccess === true) {
      next();
    } else {
      return res.status(403).json({
        mes: "you don't permission to access this resource",
        err: -1,
        data: "",
      });
    }
  } else {
    return res.status(401).json({
      mes: "not authenticated the user",
      err: -1,
      data: "",
    });
  }
};
module.exports = {
  createJWT,
  verifyToken,
  checkUserJWT,
  checkUserPermission,
};
