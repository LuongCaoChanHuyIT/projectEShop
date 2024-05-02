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
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useState } from "react";
import _ from "lodash";
// Apis
import { initUser } from "apis/users";

function Example(props) {
  const theme = useTheme();
  const defaultTheme = createTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  // State variable
  const [personGroupName, setPersonGroupName] = React.useState([]);
  const defaultUserData = {
    email: "",
    userName: "",
    password: "",
    group: "",
  };
  const [userData, setUserData] = useState(defaultUserData);
  // Object init
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
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // Function

  function getStyles(name, personGroupName, theme) {
    return {
      fontWeight:
        personGroupName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const handleOnChangeInput = (value, name) => {
    let _userData = _.cloneDeep(userData);
    _userData[name] = value;
    setUserData(_userData);
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setPersonGroupName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setUserData({ group: value });
  };
  const handleSave = async () => {
    let res = await initUser(userData);
  };

  // Render
  return (
    <>
      <Modal
        open={props.show}
        onClose={props.hide}
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
                          name="userName"
                          fullWidth
                          id="userName"
                          label="User Name"
                          autoFocus
                          defaultValue={userData.userName}
                          onChange={(event) => handleOnChangeInput(event.target.value, "userName")}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <InputLabel id="demo-multiple-name-label">Group</InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          name="group"
                          fullWidth
                          value={personGroupName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Group" />}
                          MenuProps={MenuProps}
                        >
                          {props.groups &&
                            props.groups.map((item, index) => (
                              <MenuItem
                                key={index}
                                value={item.name}
                                style={getStyles(item.name, personGroupName, theme)}
                              >
                                {item.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          defaultValue={userData.email}
                          onChange={(event) => handleOnChangeInput(event.target.value, "email")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          defaultValue={userData.password}
                          onChange={(event) => handleOnChangeInput(event.target.value, "password")}
                        />
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
}

export default Example;
