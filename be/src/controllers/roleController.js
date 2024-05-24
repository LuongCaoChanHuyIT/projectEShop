import roleService from "../services/roleService";
const init = async (req, res) => {
  let data = {};
  data = await roleService.init(req.body);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};

const get = async (req, res) => {
  let data = {};
  data = await roleService.get();
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const set = async (req, res) => {
  let data = {};

  data = await roleService.set(req.body);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const des = async (req, res) => {
  let data = {};
  let id = req.body.id;
  data = roleService.des(id);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const getOne = async (req, res) => {
  let data = {};

  let id = req.body.id;
  data = await roleService.getOne(id);
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
