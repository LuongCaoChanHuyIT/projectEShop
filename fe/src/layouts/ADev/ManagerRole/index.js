import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { Stack } from "react-bootstrap";
import Icon from "@mui/material/Icon";
import rolesTableData from "layouts/ADev/ManagerRole/data/rolesTableData";
import ModalSave from "./ModalSave";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import { fetchAllUsers } from "../../../redux/slices/userSlice";
import { fetchAllRoles } from "../../../redux/slices/roleSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleRoleSav } from "../../../redux/slices/togetherSlice";
import { useEffect, useState } from "react";

const index = () => {
  const dispatch = useDispatch();
  const toggleRoleSae = useSelector((state) => state.together.toggleRoleSav);
  const toggleRoleEdi = useSelector((state) => state.together.toggleRoleEdi);
  const toggleRoleDel = useSelector((state) => state.together.toggleRoleDel);
  const roles = useSelector((state) => state.role.list);
  const { columns, rows } = rolesTableData(roles);
  useEffect(() => {
    dispatch(fetchAllRoles());
  }, []);
  // Create functions
  const fetchData = async () => {
    // dispatch(fetchAllUsers());
    // dispatch(fetchAllRoles());
  };
  const handleToggleModalSave = () => {
    // dispatch(toggleRoleSav());
  };
  return (
    <>
      <ModalSave show={toggleRoleSae} reload={fetchData} />
      <ModalDelete show={toggleRoleDel} />
      <ModalEdit show={toggleRoleEdi} reload={fetchData} />
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
                        Role Table
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
                    isSorted={true}
                    entriesPerPage={true}
                    showTotalEntries={true}
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
