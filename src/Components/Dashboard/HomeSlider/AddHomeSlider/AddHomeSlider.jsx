import { Button } from "@mui/material";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import { createHomesliderUrl } from "@/src/Utils/Urls/HomeSliderUrl";


const AddHomeSlider = () => {
  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const onSubmit = async (dataValue) => {
    ///////////////////////////////////////////////
    //               Photo Upload               //
    /////////////////////////////////////////////*/
    setLoading(true);
    const imageUploadData = new FormData();
    imageUploadData.append("file", imageFile);
    imageUploadData.append(
      "public_id",
      `${cloud_folder}/${imageFile?.name}`
    );
    imageUploadData.append("upload_preset", `${upload_preset}`);
    imageUploadData.append("cloud_name", `${cloud_name}`);
    const imgRes = await fetch(`${cloud_api}`, {
      method: "POST",
      body: imageUploadData,
    });
    const imgdata = await imgRes.json();
    const imgurl = imgdata?.secure_url;


    ///////////////////////////////////////////////
    //               Add Home Slider            //
    /////////////////////////////////////////////*/

    const homeSliderData= {
      title: dataValue?.title,
      details: dataValue?.detail,
      image: imgurl,
    };

    const res = await fetch(createHomesliderUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(homeSliderData),
    });
    const dataRes = await res.json();
    console.log(dataRes);
    if (dataRes?.success === true) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Home Slider Added!",
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
      imageFile && setImageFile(null);
      setLoading(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section className="lg:w-[100%] md:w-[100%] w-[100%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg flex justify-center items-center flex-col gap-4 my-4">
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
        id="outlined-details-static"
        label="Description"
        multiline
        rows={7}
        className="w-full"
        {...register("detail")}
      />

      <div>
        <div className="w-full h-full my-4">
          <div className="rounded-lg shadow-xl bg-gray-50">
            <div className="p-4">
              <label className="inline-block mb-2 text-gray-500">
                Upload Home Slider
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
                      <span className="text-red-500">
                        {" "}
                        (Max Uploading Size 300kb)*
                      </span>
                    </p>
                  </div>
                  <input
                    type="file"
                    className="px-4 pb-4"
                    name="imeage"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
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
          {loading ? "Loading..." : "Submit"}
        </Button>
      </div>
    </section>
  );
};

export default AddHomeSlider;
