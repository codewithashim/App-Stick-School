import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import { createFooterrUrl } from "../../../../Utils/Urls/FooterUrl";

const AddFooter = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const {
      schoolDetail,
      latitude,
      longitude,
      schoolAddress,
      schoolName,
      email,
      phone,
      facebook,
      twitter,
    } = data;

    const res = await fetch(createFooterrUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        schoolName: schoolName,
        schoolDetail: schoolDetail,
        latitude: latitude,
        longitude: longitude,
        schoolAddress: schoolAddress,
        email: email,
        phone: phone,
        facebook: facebook,
        twitter: twitter,
      }),
    });
    const dataRes = await res.json();

    if (!dataRes) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Somthing wento wrang !",
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
        title: "Successfully  Added!",
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
    }
  };

  return (
    <section>
      <div className="lg:w-[100%] md:w-[100%] w-[100%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg flex justify-center items-center flex-col gap-4">
        <TextField
          id="outlined-phone-input"
          label="Phone"
          type="text"
          autoComplete="Phone"
          variant="outlined"
          className="w-full"
          {...register("phone")}
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="Email"
          variant="outlined"
          className="w-full"
          {...register("email")}
        />

        <TextField
          id="outlined-schoolname-input"
          label="School Name"
          type="text"
          autoComplete="School Name"
          variant="outlined"
          className="w-full"
          {...register("schoolName")}
        />

        <TextField
          id="outlined-latitude-input"
          label="Latitude"
          type="text"
          autoComplete="latitude"
          variant="outlined"
          className="w-full"
          {...register("latitude")}
        />

        <TextField
          id="outlined-longitude-input"
          label="Longitude"
          type="text"
          autoComplete="longitude"
          variant="outlined"
          className="w-full"
          {...register("longitude")}
        />

        <TextField
          id="outlined-facebook-input"
          label="Facebook"
          type="text"
          autoComplete="facebook"
          variant="outlined"
          className="w-full"
          {...register("facebook")}
        />

        <TextField
          id="outlined-twitter-input"
          label="Twitter"
          type="text"
          autoComplete="twitter"
          variant="outlined"
          className="w-full"
          {...register("twitter")}
        />

        <TextField
          id="outlined-schooladdress-input"
          label="School Address"
          type="text"
          autoComplete="School Address"
          variant="outlined"
          className="w-full"
          {...register("schoolAddress")}
        />

        <TextField
          id="outlined-details-static"
          label="School Detail"
          multiline
          rows={7}
          className="w-full"
          {...register("schoolDetail")}
        />

        <div>
          <Button
            variant="contained"
            className="commonBtn"
            endIcon={<SendIcon />}
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddFooter;
