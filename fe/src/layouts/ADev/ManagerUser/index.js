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

// Apis
import { getUser } from "apis/users";
import { getGroup } from "apis/groups";

// Modal
import ModalSave from "./ModalSave";

function Tables() {
  // Init state
  const [columns, setColumns] = useState([
    { Header: "user", accessor: "user", width: "40%", align: "left" },
    { Header: "group", accessor: "group", align: "left" },
    { Header: "status", accessor: "status", align: "center" },
    { Header: "employed", accessor: "employed", align: "center" },
    { Header: "action", accessor: "action", align: "center" },
  ]);
  const [rows, setRows] = useState([{}]);
  const [toggleModalSave, setToggleModalSave] = useState(false);
  const [groups, setGroups] = useState([{}]);
  // Effect app
  useEffect(() => {
    fetchData();
  }, []);

  // Create function
  const fetchData = async () => {
    let users = await getUser();
    let group = await getGroup();

    setGroups(group.data);
    setRows(usersTableData(users.data).rows);
  };
  const handleToggleModal = () => {
    setToggleModalSave(!toggleModalSave);
  };
  return (
    <>
      <ModalSave show={toggleModalSave} hide={handleToggleModal} groups={groups} />
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
                      <a onClick={() => handleToggleModal()}>
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
}

export default Tables;
