/* eslint-disable react/prop-types */

import * as React from "react";
import {
  TextField,
  Button,
  Modal,
  Container,
  Typography,
  Box,
  Grid,
  CssBaseline,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// Dev
import { initGroup } from "apis/groups";
import { hasPassword } from "layouts/ADev/bcryptFunc";
import { toggleGroupSav } from "../../../../redux/slices/togetherSlice";

const index = (props) => {
  const defaultTheme = createTheme();
  const dispatch = useDispatch();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const defaultGroupData = {
    name: "",
    description: "",
  };

  const [groupData, setgGroupData] = useState(defaultGroupData);

  const handleOnChangeInput = (value, name) => {
    let _groupData = _.cloneDeep(groupData);
    if (name === "password") {
      _groupData[name] = hasPassword(value);
    } else {
      _groupData[name] = value;
    }
    setgGroupData(_groupData);
  };
  const hide = () => {
    setgGroupData(defaultGroupData);
    dispatch(toggleGroupSav());
  };

  const handleSave = async () => {
    if (groupData.description === "" || groupData.name === "") {
      toast.error("Data blank !");
    } else {
      let res = await initGroup(groupData);
      if (res && res.err === 0) {
        toast.success(res.mes);
      } else {
        toast.error(res.mes);
      }
      hide();
      props.reload();
    }
  };

  // Render
  return (
    <>
      <Modal
        open={props.show}
        onClose={() => hide()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Create New Users
                  </Typography>
                  <Box noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="given-name"
                          name="name"
                          fullWidth
                          focused
                          error={groupData.name ? false : true}
                          helperText={groupData.name ? "" : "cannot be left blank"}
                          id="name"
                          label="Group name"
                          type="text"
                          defaultValue={groupData.name}
                          onChange={(event) => handleOnChangeInput(event.target.value, "name")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="description"
                          label="description Address"
                          name="description"
                          type="text"
                          autoComplete="description"
                          error={groupData.description ? false : true}
                          helperText={groupData.description ? "" : "cannot be left blank"}
                          defaultValue={groupData.description}
                          onChange={(event) =>
                            handleOnChangeInput(event.target.value, "description")
                          }
                        />
                      </Grid>
                    </Grid>
                    <Button
                      onClick={() => handleSave()}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Save
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item></Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default index;
