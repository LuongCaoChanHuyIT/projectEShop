/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { toggleUserDel } from "../../../../redux/slices/togetherSlice";
import { useDispatch, useSelector } from "react-redux";
import { desUser } from "apis/users";
import { fetchAllUsers } from "../../../../redux/slices/userSlice";
import { toast } from "react-toastify";
const index = (props) => {
  const defaultTheme = createTheme();
  const dispatch = useDispatch();
  const idUserDel = useSelector((state) => state.together.idUserDel).payload;
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
  const hide = () => {
    dispatch(toggleUserDel());
  };
  const deleteUser = async () => {
    let res = await desUser(idUserDel);
    console.log(res);
    if (res.err === 0) {
      toast.success(res.mes);
    } else {
      toast.error(res.mes);
    }
    dispatch(fetchAllUsers());

    hide();
  };
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Modal
          open={props.show}
          onClose={() => hide()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Delete User
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure ? delete user
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid container justifyContent="flex-end">
                <Button variant="outlined" sx={{ mx: 2 }} onClick={() => hide()}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={() => deleteUser()}>
                  Delete
                </Button>
              </Grid>
            </Typography>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default index;
