import e from "express";

const viewEngine = (app) => {
  app.use(e.static("./src/public"));
};
export default viewEngine;
