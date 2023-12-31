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
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { updateResultUrl } from "@/src/Utils/Urls/ResultUrl";
import axios from "axios";
import { fileUploadUrlServer } from "@/src/Utils/Network/Network";
import useStudentPortal from "@/src/Hooks/useStudentPortal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UploadResultModal = ({ result }) => {
  const {studentPortalData} = useStudentPortal();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit,control } = useForm();

  const { title, details, pbulishDate, _id } = result;

  const handelUpdate = async (updatedata) => {
    setLoading(true);
    const { pdfFile } = updatedata;
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

    const resultData = {
      title: updatedata.title,
      details: updatedata.details,
      pbulishDate: formattedDate,
      class: updatedata.classOfStudentPortal,
      file: fileUrl,
    };

    const res = await fetch(updateResultUrl(_id), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resultData),
    });

    if (!res) {
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
        title: "Successfully Update Header !",
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
              Update Result Information
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
              <form onSubmit={handleSubmit(handelUpdate)}>
                <div>
                  <div className="flex flex-col gap-4">
                    <TextField
                      id="outlined-title-input"
                      label="Title"
                      type="text"
                      defaultValue={title}
                      autoComplete="title"
                      variant="outlined"
                      className="w-full"
                      {...register("title")}
                    />
                    <TextField
                      id="outlined-details-static"
                      label="Description"
                      defaultValue={details}
                      multiline
                      rows={7}
                      className="w-full"
                      {...register("details")}
                    />
                  </div>
                  <select
                    className="w-full h-10 px-3 mb-3 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    {...register("classOfStudentPortal")}
                  >
                    <option value="1">Select Class</option>
                      {studentPortalData?.map((item) => (
                        <option value={item?._id}>{item?.title}</option>
                      ))}

                  </select>

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
                              render={({
                                field: { value, onChange, ...field },
                              }) => {
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
                    {loading ? "Loading..." : "Add Result"}
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </List>
      </Dialog>
    </section>
  );
};

export default UploadResultModal;
