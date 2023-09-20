import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useStudentPortal from "@/src/Hooks/useStudentPortal";
import { createRutineUrl } from "@/src/Utils/Urls/RutineUrl";
import axios from "axios";
import { fileUploadUrlServer } from "@/src/Utils/Network/Network";

const AddRutineComponent = () => {
  const { register, handleSubmit, control } = useForm();
  const {studentPortalData} = useStudentPortal();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { pdfFile } = data;
      const fileFormData = new FormData();
      fileFormData.append("file", pdfFile);
      const fileUploadResponse = await axios.post(
        fileUploadUrlServer,
        fileFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const fileUrl = fileUploadResponse?.data?.fileUrl;
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
      const rutineData = {
        title: data.title,
        details: data.details,
        pbulishDate: formattedDate,
        class: data.classOfStudentPortal,
        file: fileUrl,
      };
      const response = await axios.post(
        createRutineUrl,
        rutineData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
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
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex flex-col gap-4">
            <TextField
              id="outlined-title-input"
              label="Title"
              type="text"
              autoComplete="title"
              variant="outlined"
              className="w-full"
              {...register("title")}
            />
          <select
              className="w-full h-10 px-3 mb-3 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              {...register("classOfStudentPortal")}
            >
              <option value="1">Select Class</option>
                {studentPortalData?.map((item) => (
                  <option value={item?._id}>{item?.title}</option>
                ))}

            </select>
            <TextField
              id="outlined-details-static"
              label="Description"
              multiline
              rows={7}
              className="w-full"
              {...register("details")}
            />
          </div>

          <div class="w-full h-full my-4">
            <div class="rounded-lg shadow-xl bg-gray-50">
              <div class="p-4">
                <label class="inline-block mb-2 text-gray-500">
                  Upload Result File
                </label>
                <div class="flex items-center justify-center w-full">
                  <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewdiv="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Attach a file{" "}
                      </p>
                    </div>
                    <Controller
                      control={control}
                      name="pdfFile"
                      render={({ field: { value, onChange, ...field } }) => {
                        return (
                          <input
                            {...field}
                            value={value?.fileName}
                            onChange={(event) => {
                              onChange(event.target.files[0]);
                            }}
                            type="file"
                            id="pdfFile"
                          />
                        );
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6">
          <Button
            variant="contained"
            className="commonBtn"
            endIcon={<SendIcon />}
            type="submit"
          >
           {
              loading ? "Loading..." : "Add Rutine"
           }
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddRutineComponent;
