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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Bootstrap
import { Stack } from "react-bootstrap";

// @mui icons
import Icon from "@mui/material/Icon";

// Data
import usersTableData from "layouts/ADev/ManagerUser/data/usersTableData";

// ReactJs
import { useEffect, useState } from "react";

// Modal
import ModalSave from "./ModalSave";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import { fetchAllUsers } from "../../../redux/slices/userSlice";
import { fetchAllGroups } from "../../../redux/slices/groupSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserSav } from "../../../redux/slices/togetherSlice";

const index = () => {
  const dispatch = useDispatch();
  // Init state
  const { columns, rows } = usersTableData();
  const toggleUserSae = useSelector((state) => state.together.toggleUserSav);
  const toggleUserEdi = useSelector((state) => state.together.toggleUserEdi);
  const toggleUserDel = useSelector((state) => state.together.toggleUserDel);
  // Effect app
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  // Create function
  const fetchData = async () => {
    dispatch(fetchAllUsers());
    dispatch(fetchAllGroups());
  };
  const handleToggleModalSave = () => {
    dispatch(toggleUserSav());
  };
  return (
    <>
      <ModalSave show={toggleUserSae} reload={fetchData} />
      <ModalDelete show={toggleUserDel} />
      <ModalEdit show={toggleUserEdi} reload={fetchData} />
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-2">
                      <MDTypography variant="h6" color="white">
                        Users Table
                      </MDTypography>
                    </div>
                    <div className="p-2 ms-auto">
                      <a onClick={() => handleToggleModalSave()}>
                        <MDButton size="large">
                          <Icon fontSize="large">create_new_folder</Icon> &nbsp; Save
                        </MDButton>
                      </a>
                    </div>
                  </Stack>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
    </>
  );
};

export default index;
