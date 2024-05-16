import db from "../models/index";
import { checkPassword } from "./bcryptFunc";
import { getGroupWithRoles } from "./JWTService";
import { createJWT } from "../middlewares/JWTActions";
const signUp = async (data) => {
  try {
    let user = await db.User.findOne({
      where: { email: data.email },
    });

    if (!user) {
      data = await db.User.create({
        userName: data.userName,
        password: data.password,
        email: data.email,
        groupId: 1,
      });

      return {
        mes: "Create new user success",
        err: 0,
        data: data,
      };
    } else {
      return {
        mes: "Email user create is exit",
        err: 1,
        data: {},
      };
    }
  } catch (error) {
    console.log(error);
  }
};
const signIn = async (data) => {
  try {
    let user = await db.User.findOne({ where: { email: data.email } });
    if (user) {
      let check = checkPassword(data.password, user.password);
      if (check) {
        let groupWithRole = await getGroupWithRoles(user);
        let payload = {
          email: user.email,
          groupWithRole,
        };
        let token = createJWT(payload);
        return {
          mes: "Sign In success!",
          err: 0,
          data: {
            access_token: token,
            groupWithRole,
            expiresIn: 60,
          },
        };
      } else {
        return {
          mes: "email or password error !",
          err: 2,
          data: user,
        };
      }
    } else {
      return {
        mes: "email is exit",
        err: 1,
        data: {},
      };
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { signUp, signIn };
