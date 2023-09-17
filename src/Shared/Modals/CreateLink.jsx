import React, { useState } from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";
import { createFooterLink } from "@/src/Utils/Urls/FooterUrl";
import useFooter from "@/src/Hooks/useFooter";

const CreateLink = ({ setOpen, open }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const {refetchLink}  = useFooter()
  
  const onSubmit = async (data) => {
    setLoading(true);
    const linkData = {
      title: data.title,
      url:data.url
    };

    const res = await fetch(createFooterLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(linkData),
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
      refetchLink()
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
        <TextField
          id="outlined-title-input"
          label="Url"
          type="text"
          autoComplete="url"
          variant="outlined"
          className="w-full"
          {...register("url")}
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

export default CreateLink;
