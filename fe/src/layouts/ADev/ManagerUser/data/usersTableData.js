/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";

// Icon
import Icon from "@mui/material/Icon";

// Dev import
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleUserDel,
  idUserDel,
  toggleUserEdi,
  dataUserEdi,
} from "../../../../redux/slices/togetherSlice";
const data = () => {
  const users = useSelector((state) => state.user.list);
  const dispatch = useDispatch();

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const dateShow = (string) => {
    var date = new Date(string);
    return (
      (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear()
    );
  };
  const handleToggleModalDelete = (id) => {
    dispatch(toggleUserDel());
    dispatch(idUserDel(id));
  };

  const handleToggleModalEdit = (data) => {
    dispatch(toggleUserEdi());
    // console.log(data);
    dispatch(dataUserEdi(data));
  };

  const infoList = () => {
    let data = [];
    users.forEach((item) => {
      data.push({
        user: <Author image={team2} name={item.userName} email={item.email} />,
        group: (
          <Job
            title={item.Group ? item.Group.name : ""}
            description={item.Group ? item.Group.description : ""}
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {dateShow(Date(item.createdAt))}
          </MDTypography>
        ),
        action: (
          <>
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
              px={2}
            >
              <Link
                onClick={() => {
                  handleToggleModalEdit(item);
                }}
              >
                <Icon fontSize="small">edit</Icon>
              </Link>
            </MDTypography>

            <MDTypography variant="caption" color="text" fontWeight="medium">
              <Link
                onClick={() => {
                  handleToggleModalDelete(item.id);
                }}
              >
                <Icon fontSize="small">delete</Icon>
              </Link>
            </MDTypography>
          </>
        ),
      });
    });

    return data;
  };

  return {
    columns: [
      { Header: "user", accessor: "user", width: "40%", align: "left" },
      { Header: "group", accessor: "group", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: infoList(),
  };
};
export default data;
