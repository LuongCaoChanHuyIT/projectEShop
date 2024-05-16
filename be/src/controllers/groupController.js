import groupService from "../services/groupService";
const init = async (req, res) => {
  let data = {};
  data = await groupService.init(req.body);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};

const get = async (req, res) => {
  let data = {};
  data = await groupService.get();
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const set = async (req, res) => {
  let data = {};

  data = await groupService.set(req.body);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const des = async (req, res) => {
  let data = {};
  let id = req.body.id;
  data = groupService.des(id);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const getOne = async (req, res) => {
  let data = {};

  let id = req.body.id;
  data = await groupService.getOne(id);
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
