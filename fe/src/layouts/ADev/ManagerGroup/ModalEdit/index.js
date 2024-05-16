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
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useRef } from "react";
import _ from "lodash";

// Apis
import { setGroup } from "apis/groups";
import { useDispatch, useSelector } from "react-redux";
import { toggleGroupEdi } from "../../../../redux/slices/togetherSlice";
import { toast } from "react-toastify";

const index = (props) => {
  const defaultTheme = createTheme();
  const dispatch = useDispatch();

  const groupForId = useSelector((state) => state.together.dataGroupEdi).payload;
  const name = useRef();

  const description = useRef();

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
  const defaultgroupData = {
    name: "",
    description: "",
  };

  const [groupData, setGroupData] = useState(defaultgroupData);

  const handleOnChangeInput = (value, name) => {
    let _groupData = _.cloneDeep(groupData);
    if (name === "password") {
      _groupData[name] = hasPassword(value);
    } else {
      _groupData[name] = value;
    }

    setGroupData(_groupData);
  };

  const hide = () => {
    dispatch(toggleGroupEdi());
  };
  const handleSave = async () => {
    let _groupData = _.cloneDeep(groupData);
    _groupData["description"] = description.current.value;
    _groupData["name"] = name.current.value;
    let res = await setGroup(_groupData);
    if (res && res.err === 0) {
      toast.success(res.mes);
    } else {
      toast.error(res.mes);
    }
    hide();
    props.reload();
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
                    Edit User
                  </Typography>
                  <Box noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="given-name"
                          name="name"
                          fullWidth
                          focused
                          id="name"
                          label="User Name"
                          defaultValue={groupForId ? groupForId.name : groupData.name}
                          inputRef={name}
                          onChange={(event) => handleOnChangeInput(event.target.value, "name")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="description"
                          label="description Address"
                          name="text"
                          autoComplete="description"
                          defaultValue={groupForId ? groupForId.description : groupData.description}
                          inputRef={description}
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
