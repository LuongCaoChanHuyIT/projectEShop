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
  Hidden,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useState, useRef } from "react";
import _ from "lodash";
import { hasPassword } from "layouts/ADev/bcryptFunc";

// Apis
import { setUser } from "apis/users";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserEdi } from "../../../../redux/slices/togetherSlice";
import { toast } from "react-toastify";
const index = (props) => {
  const theme = useTheme();
  const defaultTheme = createTheme();
  const dispatch = useDispatch();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const groups = useSelector((state) => state.group.list);
  const userForId = useSelector((state) => state.together.dataUserEdi).payload;
  const userName = useRef();
  const password = useRef();
  const email = useRef();
  const group = useRef();
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
  const defaultUserData = {
    userName: "",
    email: "",
    password: "",
    group: "",
  };
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [userData, setUserData] = useState(defaultUserData);

  const getStyles = (name, group, theme) => {
    return {
      fontWeight:
        group.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };
  const handleOnChangeInput = (value, name) => {
    let _userData = _.cloneDeep(userData);
    if (name === "password") {
      _userData[name] = hasPassword(value);
    } else {
      _userData[name] = value;
    }

    setUserData(_userData);
  };

  const hide = () => {
    dispatch(toggleUserEdi());
  };
  const handleSave = async () => {
    let _userData = _.cloneDeep(userData);
    _userData["email"] = email.current.value;
    _userData["password"] = password.current.value;
    _userData["userName"] = userName.current.value;
    _userData["group"] = group.current.value;

    let res = await setUser(_userData);
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
                          name="userName"
                          fullWidth
                          focused
                          id="userName"
                          label="User Name"
                          defaultValue={userForId ? userForId.userName : userData.userName}
                          inputRef={userName}
                          onChange={(event) => handleOnChangeInput(event.target.value, "userName")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          defaultValue={userForId ? userForId.email : userData.email}
                          inputRef={email}
                          onChange={(event) => handleOnChangeInput(event.target.value, "email")}
                          disabled
                        />
                      </Grid>

                      <Grid item xs={12} className="d-none">
                        <TextField
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          inputRef={password}
                          defaultValue={userForId ? userForId.password : userData.password}
                          onChange={(event) => handleOnChangeInput(event.target.value, "password")}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <InputLabel id="demo-multiple-name-label">Group</InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          name="group"
                          fullWidth
                          value={userForId ? userForId.Group.name : userData.group}
                          inputRef={group}
                          onChange={(event) => handleOnChangeInput(event.target.value, "group")}
                          input={<OutlinedInput label="Group" />}
                          MenuProps={MenuProps}
                        >
                          {groups &&
                            groups.map((item, index) => (
                              <MenuItem
                                key={index}
                                value={item.name}
                                style={getStyles(item.name, userData.group, theme)}
                              >
                                {item.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </Grid>
                      <Grid item xs={12}></Grid>
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
