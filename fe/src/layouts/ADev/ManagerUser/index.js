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
import usersTableData from "layouts/ADev/ManagerUser/data/usersTableData";
import { useEffect } from "react";
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
