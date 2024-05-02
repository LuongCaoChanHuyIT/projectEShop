import roleService from "../services/roleService";
const init = async (req, res) => {
  let data = {};
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
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};
const des = async (req, res) => {
  let data = {};
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
};
