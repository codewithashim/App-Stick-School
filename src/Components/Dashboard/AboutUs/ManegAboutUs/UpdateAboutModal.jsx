import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { updateAboutUrl } from "@/src/Utils/Urls/AboutUrl";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateAboutModal = ({ about }) => {
  const { image, title, subtitle, details, _id } = about;
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null);

  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const handelUpdate = async (updatedata) => {
    ///////////////////////////////////////////////
    //               Photo Upload                //
    /////////////////////////////////////////////*/
    setLoading(true);
    const imageUploadData = new FormData();
    imageUploadData.append("file", imageFile);
    imageUploadData.append(
      "public_id",
      `${cloud_folder}/About/${imageFile?.name}`
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
    const aboutData = {
      image: imgurl,
      title: updatedata.title,
      subtitle: updatedata.subtitle,
      details: updatedata.details,
    };

    const res = await fetch(updateAboutUrl(_id), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aboutData),
    });
    const data = await res.json();

    if (!data) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: data.message,
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
        title: "Successfully Update About !",
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
      handleClose();
    }
  };

  return (
    <section>
      <Button onClick={handleClickOpen}>
        <FaRegEdit className="text-[2.3rem] mr-3 text-red-500" />
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative" }}
          className="bg-red-500 text-[#000]"
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon className="" />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              className="text-[#000]"
            >
              Update About Information
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              className="text-[#000]"
            >
              Exit
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <section>
            <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg grid md:grid-cols-2 gap-6  py-10 px-2">
              <TextField
                id="outlined-title-input"
                label="Title"
                type="text"
                defaultValue={title}
                autoComplete="title"
                variant="outlined"
                className="w-full"
                {...register("title", { required: true })}
              />
              <TextField
                id="outlined-subtitle-input"
                label="Subtitle"
                type="text"
                defaultValue={subtitle}
                autoComplete="subtitle"
                variant="outlined"
                className="w-full"
                {...register("subtitle", { required: true })}
              />

              <TextField
                id="outlined-details-static"
                label="Description"
                multiline
                defaultValue={details}
                rows={7}
                className="w-full"
                {...register("details", { required: true })}
              />

              <div>
                <div className="w-full h-full">
                  <div className="rounded-lg shadow-xl bg-gray-50">
                    <div className="p-4">
                      <label className="inline-block mb-2 text-gray-500">
                        Upload About Image
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full border-4 border-blue-200 border-dashed h-42 hover:bg-gray-100 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center ">
                            <Image
                              src={
                                imageFile
                                  ? URL.createObjectURL(imageFile)
                                  :image
                              }
                              alt="About Image"
                              width={100}
                              height={100}
                            />

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

              <div>
                <Button
                  variant="contained"
                  className="commonBtn"
                  endIcon={<SendIcon />}
                  type="submit"
                  onClick={handleSubmit(handelUpdate)}
                >
                  {
                    loading ? "Loading..." :"Update About"
                  }
                </Button>
              </div>
            </div>
          </section>
        </List>
      </Dialog>
    </section>
  );
};

export default UpdateAboutModal;
