import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#FF7600",
  },
}));

const PopUp = ({ open, handleClose }) => {
  const styles = useStyles();
  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">YES, I WANT TO ENHANCE MY HEALTH</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your name and email below</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Full Name" type="text" fullWidth />
          <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" className={styles.button}>
            Double My Energy
          </Button>
        </DialogActions>
        <DialogContent>
          <DialogContentText>We value your privacy and would never spam you. See our privacy policy</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopUp;
