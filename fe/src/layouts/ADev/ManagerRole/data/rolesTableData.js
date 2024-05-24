/* eslint-disable react/prop-types */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import team2 from "assets/images/team-2.jpg";
import Icon from "@mui/material/Icon";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleRoleDel,
  idRoleDel,
  toggleRoleEdi,
  dataRoleEdi,
} from "../../../../redux/slices/togetherSlice";
const data = (roles) => {
  const dispatch = useDispatch();
  console.log(roles);
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
    dispatch(toggleRoleDel());
    dispatch(idRoleDel(id));
  };

  const handleToggleModalEdit = (data) => {
    dispatch(toggleRoleEdi());
    dispatch(dataRoleEdi(data));
  };

  const infoList = () => {
    let data = [];
    roles.forEach((item) => {
      data.push({
        role: <Job title={item.url} description={""} />,
        description: <Job title={""} description={item.description} />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {dateShow(item.createdAt)}
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
      { Header: "role", accessor: "role", width: "30%", align: "left" },
      { Header: "description", accessor: "description", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: infoList(),
  };
};
export default data;
