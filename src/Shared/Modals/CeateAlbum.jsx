import React, { useState } from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";
import { createAlbumUrl } from "@/src/Utils/Urls/PhotoGelaryUrl";
import usePhotoGelary from "@/src/Hooks/usePhotoGelary";

const CeateAlbum = ({ setOpen, open }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const {refetchAlbum}  = usePhotoGelary
  ()
  
  const onSubmit = async (data) => {
    setLoading(true);
    const albumData = {
      title: data.title,
    };

    const res = await fetch(createAlbumUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(albumData),
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
        title: "Successfully Added!",
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
      setOpen(false);
      refetchAlbum()
    }
  };

  return (
    <Modal
      title="Create Album"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
    >
      <div className="lg:w-[100%] md:w-[100%] w-[100%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg flex justify-center items-center flex-col gap-4">
        <TextField
          id="outlined-title-input"
          label="Title"
          type="text"
          autoComplete="title"
          variant="outlined"
          className="w-full"
          {...register("title")}
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
    </Modal>
  );
};

export default CeateAlbum;
