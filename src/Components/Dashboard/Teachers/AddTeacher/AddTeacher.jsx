import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import { createTeacherUrl } from "@/src/Utils/Urls/TeacherUrl";

const AddTeacher = () => {
  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null);

  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const onSubmit = async (data) => {
    ///////////////////////////////////////////////
    //               Photo Upload               //
    /////////////////////////////////////////////*/
    const imageUploadData = new FormData();
    imageUploadData.append("file", imageFile);
    imageUploadData.append(
      "public_id",
      `${cloud_folder}/Teacher/${imageFile.name}`
    );
    imageUploadData.append("upload_preset", `${upload_preset}`);
    imageUploadData.append("cloud_name", `${cloud_name}`);
    const imgRes = await fetch(`${cloud_api}`, {
      method: "POST",
      body: imageUploadData,
    });
    const imgdata = await imgRes.json();
    const imgurl = imgdata?.secure_url;
    console.log(imgurl, "Upload Image ++++");
    ///////     End of Photo Upload     ////////
    
    const teacherData = {
      name: data.teacherName,
      detail: data.teacherDescription,
      joiningDate: data.joiningDate,
      position: data.teacherPosition,
      image: imgurl,
    };

    const res = await fetch(createTeacherUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacherData),
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
    }
  };

  return (
    <section>
      <div className="lg:w-[100%] md:w-[100%] w-[100%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg flex justify-center items-center flex-col gap-4">
        <TextField
          id="outlined-teachername-input"
          label="Teacher Name"
          type="text"
          autoComplete="teacherName"
          variant="outlined"
          className="w-full"
          {...register("teacherName", { required: true })}
        />
        <TextField
          id="outlined-teacherposition-input"
          label="Teacher Position"
          type="text"
          autoComplete="teacherPosition"
          variant="outlined"
          className="w-full"
          {...register("teacherPosition", { required: true })}
        />

        <TextField
          id="outlined-teacherdescription-static"
          label="Teacher Description"
          multiline
          rows={7}
          className="w-full"
          {...register("teacherDescription", { required: true })}
        />

        <TextField
          id="outlined-teacherjoiningdate-input"
          label="Joining Date"
          type="text"
          autoComplete="Joining Date"
          variant="outlined"
          className="w-full"
          {...register("joiningDate", { required: true })}
        />

        <div>
          <div class="w-full h-full">
            <div class="rounded-lg shadow-xl bg-gray-50">
              <div class="p-4">
                <label class="inline-block mb-2 text-gray-500">
                  Upload Teacher Image
                </label>
                <div class="flex items-center justify-center w-full">
                  <label class="flex flex-col w-full h-40 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
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

        <div>
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
      </div>
    </section>
  );
};

export default AddTeacher;
