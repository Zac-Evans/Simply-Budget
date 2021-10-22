import React from "react";
import {
  Fab,
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import NewCategoryForm from "./NewCategoryForm";
import { Fade } from "react-awesome-reveal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddCategoryCard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="d-flex justify-content-center m-4">
      <Card className="d-flex flex-column align-items-center">
        <CardContent
          className="d-flex flex-column align-items-center"
          onClick={handleOpen}
        >
          <Typography variant="h5" component="h2">
            <b>Organize your budget</b>
          </Typography>
          <Typography className="text-center" color="textSecondary">
            Create categories for your monthly spending.
          </Typography>
          <img
            src="https://img.icons8.com/cute-clipart/200/000000/money-box.png"
            width="100px"
          />
        </CardContent>

        <CardActions>
          <Button variant="contained" onClick={handleOpen}>
            <b>Create a new budget</b>
          </Button>
        </CardActions>
      </Card>

      {/* <Fade> */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paper}>
          <NewCategoryForm />
        </div>
      </Modal>
      {/* </Fade> */}
    </div>
  );
};

export default AddCategoryCard;

//
