import authService from "../services/authService";

const signIn = async (req, res) => {
  let data = {};
  data = await authService.signIn(req.body);

  if (data && data.data && data.data.access_token) {
    // console.log(data);
    res.cookie("jwt", data.data.access_token, {
      maxAge: 3600000,
      httpOnly: false,
    });
  }
  return res.status(200).json({
    mes: data.mes,
    err: data.err,
    data: data.data,
  });
};

const signUp = async (req, res) => {
  let data = {};
  data = await authService.signUp(req.body);
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
