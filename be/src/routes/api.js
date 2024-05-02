import e from "express";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import roleController from "../controllers/roleController";
const router = e.Router();
const initApiRoutes = (app) => {
  /** Router user */
  router.post("/user/init", userController.init);
  router.get("/user/get", userController.get);
  router.put("/user/set", userController.set);
  router.delete("/user/des", userController.des);
  /** Router group */
  router.post("/group/init", groupController.init);
  router.get("/group/get", groupController.get);
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
