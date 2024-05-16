import e from "express";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import roleController from "../controllers/roleController";
import authenController from "../controllers/authenController";
import { checkUserJWT } from "../middlewares/JWTActions";
const router = e.Router();
// const checkUserLogin = (req, res, next) => {
//   const nonSecurePaths = ["/signIn", "/signUp"];
//   if (nonSecurePaths.includes(req.path)) return next();

//   //authenticate user
//   // if (user) {
//   //   next();
//   // } else {
//   // }
// };
const initApiRoutes = (app) => {
  /** Authentication */
  router.post("/signIn", authenController.signIn);
  router.post("/signUp", authenController.signUp);
  /** Router user */
  router.post("/user/init", userController.init);
  router.get("/user/get", checkUserJWT, userController.get);
  router.post("/user/get/one", userController.getOne);
  router.put("/user/set", userController.set);
  router.delete("/user/des", userController.des);
  /** Router group */
  router.post("/group/init", groupController.init);
  router.get("/group/get", checkUserJWT, groupController.get);
  router.post("/group/get/one", groupController.getOne);
  router.put("/group/set", groupController.set);
  router.delete("/group/des", groupController.des);
  /** Router role */
  router.post("/role/init", roleController.init);
  router.get("/role/get", roleController.get);
  router.put("/role/set", roleController.set);
  router.delete("/role/des", roleController.des);
  return app.use("/api", router);
};
export default initApiRoutes;
