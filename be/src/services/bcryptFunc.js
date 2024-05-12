import bcrypt from "bcrypt";
const saltRounds = 10;

const hasPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const checkPassword = (password, hash) => {
  let check = bcrypt.compareSync(password, hash);
  return check;
};

module.exports = { hasPassword, checkPassword };
