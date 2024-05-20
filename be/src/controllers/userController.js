import userService from "../services/userService";
const init = async (req, res) => {
  let data = {};
  data = await userService.init(req.body);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};

const get = async (req, res) => {
  let data = {};
  console.log(req.user);
  data = await userService.get();
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const set = async (req, res) => {
  let data = {};

  data = await userService.set(req.body);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const des = async (req, res) => {
  let data = {};
  let id = req.body.id;
  data = userService.des(id);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const getOne = async (req, res) => {
  let data = {};
  // console.log(req.body.id);
  let id = req.body.id;
  data = await userService.getOne(id);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};

module.exports = {
  init,
  get,
  set,
  des,
  getOne,
};
