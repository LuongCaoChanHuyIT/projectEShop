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
  toggleUserDel,
  idUserDel,
  toggleUserEdi,
  dataUserEdi,
} from "../../../../redux/slices/togetherSlice";
const data = () => {
  const list = useSelector((state) => state.user.list);
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
    dispatch(dataUserEdi(data));
  };
  const infoList = () => {
    let data = [];

    list.forEach((item) => {
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
