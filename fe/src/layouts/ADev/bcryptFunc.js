import bcrypt from "bcryptjs-react";

const hasPassword = (password) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
};

const checkPassword = (password, hash) => {
  let check = bcrypt.compareSync(password, hash);
  return check;
};

export { hasPassword, checkPassword };
