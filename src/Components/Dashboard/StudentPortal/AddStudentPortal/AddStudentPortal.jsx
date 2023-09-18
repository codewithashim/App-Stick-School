import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import { createStudentPortalUrl } from "@/src/Utils/Urls/StudentPortal";

const AddStudentPortal = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true)
        const res = await fetch(createStudentPortalUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: data?.createClass
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
              title: "Successfully Teacher Added!",
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
            setLoading(false)
        }
    }


    return (
        <section>
        <div className="lg:w-[100%] md:w-[100%] w-[100%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg flex justify-center items-center flex-col gap-4">
        <TextField
          id="outlined-createclass-input"
          label="Create Class"
          type="text"
          autoComplete="createClass"
          variant="outlined"
          className="w-full"
          {...register("createClass")}
        />
                
        <div>
          <Button
            variant="contained"
            className="commonBtn"
            endIcon={<SendIcon />}
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
          {
            loading ? "Loading..." : "Submit"
          }
          </Button>
        </div>
      </div>
        </section>
    );
};

export default AddStudentPortal;