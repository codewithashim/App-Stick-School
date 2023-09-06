import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createResultUrl } from "@/src/Utils/Urls/ResultUrl";

const AddResultComponent = () => {
  const { register, handleSubmit } = useForm();
  const [resultFile, setResultFile] = useState(null);

  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const onSubmit = async (data) => {
    ///////////////////////////////////////////////
    //               Photo Upload                  //
    ///////////////////////////////////////////////*/
    const imageUploadData = new FormData();
    imageUploadData.append("file", resultFile);

    // Remove duplicate ".pdf" extension from the file name
    const fileNameWithoutDuplicatePdf = resultFile.name.replace(
      /\.pdf\.pdf$/,
      ".pdf"
    );

    imageUploadData.append(
      "public_id",
      `${cloud_folder}/Result/${fileNameWithoutDuplicatePdf}`
    );
    imageUploadData.append("upload_preset", `${upload_preset}`);
    imageUploadData.append("cloud_name", `${cloud_name}`);
    const fileRes = await fetch(`${cloud_api}`, {
      method: "POST",
      body: imageUploadData,
    });
    const filedata = await fileRes.json();
    const fileurl = filedata?.secure_url;
    console.log(fileurl, "Upload Image ++++");

    ///////     End of Photo Upload     ///////////
    const resultData = {
      title: data?.title,
      details: data?.details,
      pbulishDate: data?.pbulishDate,
      file: fileurl,
    };

    const res = await fetch(createResultUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resultData),
    });
    const dataRes = await res.json();
    console.log(dataRes);
    if (!dataRes) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Result Added!",
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
  };

  return (
    <section>
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
                      <span className="text-red-500">
                        {" "}
                        (Max Uploading Size 1mb)*
                      </span>
                    </p>
                  </div>
                  <input
                    type="file"
                    className="px-4 pb-4"
                    accept="/*"
                    onChange={(e) => setResultFile(e.target.files[0])}
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
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </div>
    </section>
  );
};

export default AddResultComponent;
