import e from "express";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import roleController from "../controllers/roleController";
import authController from "../controllers/authController";
import { checkUserJWT, checkUserPermission } from "../middlewares/JWTActions";
const router = e.Router();

const initApiRoutes = (app) => {
  router.all("*", checkUserJWT, checkUserPermission);
  /** Authentication */
  router.post("/signIn", authController.signIn);
  router.post("/signUp", authController.signUp);
  /** Router user */
  router.post("/user/init", userController.init);
  router.get("/user/get", userController.get);
  router.post("/user/get/one", userController.getOne);
  router.put("/user/set", userController.set);
  router.delete("/user/des", userController.des);
  /** Router group */
  router.post("/group/init", groupController.init);
  router.get("/group/get", groupController.get);
  router.post("/group/get/one", groupController.getOne);
  router.put("/group/set", groupController.set);
  router.delete("/group/des", groupController.des);
  /** Router role */
  router.post("/role/init", roleController.init);
  router.get("/role/get", roleController.get);
  router.post("/role/get/one", roleController.getOne);
  router.put("/role/set", roleController.set);
  router.delete("/role/des", roleController.des);
  return app.use("/api", router);
};
export default initApiRoutes;
