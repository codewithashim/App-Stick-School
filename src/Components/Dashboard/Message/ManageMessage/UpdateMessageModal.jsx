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
import {
  TextField,
} from "@mui/material";
import { updateMessageUrl } from "@/src/Utils/Urls/TeacherUrl";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateMessageModal = ({ messageData }) => {
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
  const { name, message, position, image, _id } = messageData;

  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const handelUpdate = async (updatedata) => {
    setLoading(true)
    ///////////////////////////////////////////////
    //               Photo Upload                //
    /////////////////////////////////////////////*/
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
    ///////     End of Photo Upload     ////////

    const MessageData = {
      name: updatedata.name,
      message: updatedata.message,
      position: updatedata.position,
      image: updatedata.image,
    };

    const res = await fetch(updateMessageUrl(_id), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(MessageData),
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
        title: "Successfully Update Message !",
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
              Update Message Information
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
                id="outlined-name-input"
                label="Name"
                type="text"
                autoComplete="Name"
                defaultValue={name}
                variant="outlined"
                className="w-full"
                {...register("name")}
              />
              <TextField
                id="outlined-position-input"
                label="Position"
                type="text"
                autoComplete="Position"
                defaultValue={position}
                variant="outlined"
                className="w-full"
                {...register("position")}
              />

              <TextField
                id="outlined-message-static"
                label="Message Description"
                defaultValue={message}
                multiline
                rows={7}
                className="w-full"
                {...register("message")}
              />

              <div>
                <div class="w-full h-full">
                  <div class="rounded-lg shadow-xl bg-gray-50">
                    <div class="p-4">
                      <label class="inline-block mb-2 text-gray-500">
                        Upload Product Image
                      </label>
                      <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col w-full h-42 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div class="flex flex-col items-center justify-center ">
                            <Image
                              src={
                                imageFile
                                  ? URL.createObjectURL(imageFile)
                                  : image
                              }
                              alt="Image"
                              width={100}
                              height={100}
                            />

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
                  onClick={handleSubmit(handelUpdate)}
                >
                {
                  loading ? "Loading..." : "Update Message"
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

export default UpdateMessageModal;
