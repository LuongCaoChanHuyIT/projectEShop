import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import ManagerUser from "layouts/ADev/ManagerUser";
import ManagerGroup from "layouts/ADev/ManagerGroup";
import Cookies from "js-cookie";
const routes = () => {
  const isLogin = Cookies.get("jwtUserData") ? true : localStorage.getItem("jwt") ? true : false;

  return [
    isLogin
      ? {
          type: "collapse",
          name: "Dashboard",
          key: "dashboard",
          icon: <Icon fontSize="small">dashboard</Icon>,
          route: "/dashboard",
          component: <Dashboard />,
        }
      : {},
    isLogin
      ? {
          type: "collapse",
          name: "Manager User",
          key: "ManagerUser",
          icon: <Icon fontSize="small">person</Icon>,
          route: "/manager/user",
          component: <ManagerUser />,
        }
      : {},
    isLogin
      ? {
          type: "collapse",
          name: "Manager Group",
          key: "ManagerGroup",
          icon: <Icon fontSize="small">group</Icon>,
          route: "/manager/group",
          component: <ManagerGroup />,
        }
      : {},
    {},
    // isLogin
    //   ? {
    //       type: "collapse",
    //       name: "Profile",
    //       key: "profile",
    //       icon: <Icon fontSize="small">person</Icon>,
    //       route: "/profile",
    //       component: <Profile />,
    //     }
    //   : {},
    isLogin
      ? {}
      : {
          type: "collapse",
          name: "Sign In",
          key: "sign-in",
          icon: <Icon fontSize="small">login</Icon>,
          route: "/authentication/sign-in",
          component: <SignIn />,
        },
    isLogin
      ? {}
      : {
          type: "collapse",
          name: "Sign Up",
          key: "sign-up",
          icon: <Icon fontSize="small">assignment</Icon>,
          route: "/authentication/sign-up",
          component: <SignUp />,
        },
    // {
    //   type: "collapse",
    //   name: "Tables",
    //   key: "tables",
    //   icon: <Icon fontSize="small">table_view</Icon>,
    //   route: "/tables",
    //   component: <Tables />,
    // },
    // {
    //   type: "collapse",
    //   name: "Billing",
    //   key: "billing",
    //   icon: <Icon fontSize="small">receipt_long</Icon>,
    //   route: "/billing",
    //   component: <Billing />,
    // },
    // {
    //   type: "collapse",
    //   name: "RTL",
    //   key: "rtl",
    //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    //   route: "/rtl",
    //   component: <RTL />,
    // },
    // {
    //   type: "collapse",
    //   name: "Notifications",
    //   key: "notifications",
    //   icon: <Icon fontSize="small">notifications</Icon>,
    //   route: "/notifications",
    //   component: <Notifications />,
    // },
  ];
};
export default routes;
