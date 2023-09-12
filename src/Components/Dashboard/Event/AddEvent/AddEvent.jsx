import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { createEventUrl } from "@/src/Utils/Urls/EventsUrl";

const AddEventComponent = () => {
  const { register, handleSubmit, control } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const {  title, details, pdfFile } = data;
   
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;


    const formData = new FormData();
    formData.append("pbulishDate", formattedDate);
    formData.append("title", title);
    formData.append("details", details);
    formData.append("file", pdfFile);

    try {
      setLoading(true);
      const response = await axios.post(createEventUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
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
              classNameName="w-full"
              {...register("title")}
            />
            <TextField
              id="outlined-details-static"
              label="Description"
              multiline
              rows={7}
              classNameName="w-full"
              {...register("details")}
            />
          </div>

          <div className="w-full h-full my-4">
            <div className="rounded-lg shadow-xl bg-gray-50">
              <div className="p-4">
                <label className="inline-block mb-2 text-gray-500">
                  Upload File
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
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
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
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

        <div classNameName="py-6">
          <Button
            variant="contained"
            classNameName="commonBtn"
            endIcon={<SendIcon />}
            type="submit"
          >
            {loading ? "Loading..." : "Add Event ++"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddEventComponent;
