import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import { createStatisticUrl } from "@/src/Utils/Urls/StatisticUrl";

const AddStatisticComponent = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);

    const statisticData = {
      title: data.title,
      counte: data.counte,
      status: data.status,
    };

    const res = await fetch(createStatisticUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(statisticData),
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
    }
  };

  return (
    <section>
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
          id="outlined-counte-input"
          label="Counte"
          type="text"
          autoComplete="counte"
          variant="outlined"
          className="w-full"
          {...register("counte")}
        />

        <select className="w-full h-10 px-2 border-2 border-gray-200 rounded-md"
          {...register("status")}
        >
          <option value="Organization">Organization</option>
          <option value="Student">Student</option>
        </select>

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

export default AddStatisticComponent;
