import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { FaPowerOff } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import logout from "@/src/Shared/Logout/Logout";

const ProfileDD = () => {
  const router = useRouter();
  const handleLogout = () => {
    logout()
    Swal.fire({
      position: "top-end",
      timerProgressBar: true,
      title: "Successfully Logout Done !",
      iconColor: "#ED1C24",
      toast: true,
      icon: "success",
      showClass: {
        popup: "animate__animated animate__fadeInRight",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutRight",
      },
      customClass: {
        confirmButton: "blue",
      },
      showConfirmButton: false,
      timer: 3500,
    });
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    window.location.href = "/";  
  };

  return (
    <div>
      <Box p={2}>
        <Button
          fullWidth
          className="flex items-center justify-center gap-4 commonBtn pointer"
          onClick={()=>handleLogout()} 
        >
          <FaPowerOff />
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default ProfileDD;
