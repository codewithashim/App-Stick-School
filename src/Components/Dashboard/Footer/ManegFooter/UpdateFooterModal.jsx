import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import {  TextField } from "@mui/material";
import { updateFooterUrl } from "@/src/Utils/Urls/FooterUrl";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateFooterModal = ({ footer ,refetchFooter}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm();
  const { schoolDetail,
    latitude,
    longitude,
    schoolAddress,
    schoolName,
    email,
    phone,
    facebook,
    twitter, _id } =
   footer;

  const handelUpdate = async (updatedata) => {
    const { schoolName, schoolAddress, estdSince, email, phone } = updatedata;

    const footerData = {
      schoolName: schoolName,
      schoolDetail: schoolDetail,
      latitude: latitude,
      longitude: longitude,
      schoolAddress: schoolAddress,
      email: email,
      phone: phone,
      facebook: facebook,
      twitter: twitter,
    };
    setLoading(true);
    const res = await fetch(updateFooterUrl(_id), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(footerData),
    });
    const data = await res.json();

    if (!data) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: data.message,
        iconColor: "#ED1C24",
        toast: true,
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
        showConfirmButton: false,
        timer: 3500,
      });
      
    } else {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Update !",
        iconColor: "#ED1C24",
        toast: true,
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
        showConfirmButton: false,
        timer: 3500,
      });
      setLoading(false);
      handleClose();
    }
  };

  return (
    <section>
      <Button onClick={handleClickOpen}>
        <FaRegEdit className="text-[2.3rem] mr-3 text-red-500" />
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative" }}
          className="bg-red-500 text-[#000]"
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon className="" />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              className="text-[#000]"
            >
              Update Footer Information
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              className="text-[#000]"
            >
              Exit
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <section>
            <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg grid md:grid-cols-2 gap-6  py-10 px-2">
              <TextField
                id="outlined-phone-input"
                label="Phone"
                type="text"
                autoComplete="Phone"
                variant="outlined"
                defaultValue={phone}
                className="w-full"
                {...register("phone")}
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                autoComplete="Email"
                variant="outlined"
                defaultValue={email}
                className="w-full"
                {...register("email")}
              />

              <TextField
                id="outlined-schoolname-input"
                label="School Name"
                type="text"
                autoComplete="School Name"
                variant="outlined"
                defaultValue={schoolName}
                className="w-full"
                {...register("schoolName")}
              />

              <TextField
                id="outlined-latitude-input"
                label="Latitude"
                type="text"
                autoComplete="latitude"
                variant="outlined"
                defaultValue={latitude}
                className="w-full"
                {...register("latitude")}
              />

              <TextField
                id="outlined-longitude-input"
                label="Longitude"
                type="text"
                autoComplete="longitude"
                variant="outlined"
                defaultValue={longitude}
                className="w-full"
                {...register("longitude")}
              />

              <TextField
                id="outlined-facebook-input"
                label="Facebook"
                type="text"
                autoComplete="facebook"
                variant="outlined"
                defaultValue={facebook}
                className="w-full"
                {...register("facebook")}
              />

              <TextField
                id="outlined-twitter-input"
                label="Twitter"
                type="text"
                autoComplete="twitter"
                variant="outlined"
                defaultValue={twitter}
                className="w-full"
                {...register("twitter")}
              />

              <TextField
                id="outlined-schooladdress-input"
                label="School Address"
                type="text"
                autoComplete="School Address"
                variant="outlined"
                defaultValue={schoolAddress}
                className="w-full"
                {...register("schoolAddress")}
              />

              <TextField
                id="outlined-details-static"
                label="School Detail"
                multiline
                rows={7}
                defaultValue={schoolDetail}
                className="w-full"
                {...register("schoolDetail")}
              />

              <div>
                <Button
                  variant="contained"
                  className="commonBtn"
                  endIcon={<SendIcon />}
                  type="submit"
                  onClick={handleSubmit(handelUpdate)}
                >
                  {loading ? "Loading..." : "Update Header"}
                </Button>
              </div>
            </div>
          </section>
        </List>
      </Dialog>
    </section>
  );
};

export default UpdateFooterModal;
