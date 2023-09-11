import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createResultUrl } from "@/src/Utils/Urls/ResultUrl";
import axios from "axios";

const AddResultComponent = () => {
  const { register, handleSubmit, control } = useForm();
  // const [resultFile, setResultFile] = useState(null);

  const onSubmit = async (data) => {
    const { pbulishDate, title, details, pdfFile } = data;
  
    // Create a FormData object to send the form data as multipart/form-data
    const formData = new FormData();
    formData.append("pbulishDate", pbulishDate);
    formData.append("title", title);
    formData.append("details", details);
    formData.append("file", pdfFile);
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/result/create",
        formData, // Send the FormData object
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <section>
      <form

        onSubmit={handleSubmit(onSubmit)}
      >
      <div>
        <div className="flex flex-col gap-4">
          <TextField
            id="outlined-title-input"
            label="Title"
            type="text"
            autoComplete="title"
            variant="outlined"
            className="w-full"
            {...register("title", { required: true })}
          />
          <TextField
            id="outlined-pbulishDate-input"
            label="Pbulish Date"
            type="text"
            autoComplete="pbulishDate"
            variant="outlined"
            className="w-full"
            {...register("pbulishDate", { required: true })}
          />
          <TextField
            id="outlined-details-static"
            label="Description"
            multiline
            rows={7}
            className="w-full"
            {...register("details", { required: true })}
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
          Submit
        </Button>
      </div>
      </form>



    
    </section>
  );
};

export default AddResultComponent;
