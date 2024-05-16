import authenService from "../services/authenService";

const signIn = async (req, res) => {
  let data = {};
  data = await authenService.signIn(req.body);

  res.cookie("jwtUserData", data.data.access_token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};

const signUp = async (req, res) => {
  let data = {};
  data = await authenService.signUp(req.body);
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};

module.exports = {
  signIn,
  signUp,
};
