import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteStudentPortalUrl, getStudentPortalUrl } from "../Utils/Urls/StudentPortal";

const useStudentPortal = () => {
    const [loading, setLoading] = useState(false)

    const {
      data: studentPortalData,
      isLoading: studentPortalLoaded,
      refetch: refetchStudentPortal,
    } = useQuery({
      queryKey: ["studentPortalData"],
      queryFn: async () => {
        const res = await fetch(getStudentPortalUrl);
        const data = await res.json();
        return data?.data;
      },
    });
  
    const handelStudentPortalDelete = async (id) => {
      const confirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (confirmed.isConfirmed) {
        setLoading(true)
        const res = await fetch(deleteStudentPortalUrl(id), {
          method: "DELETE",
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
            title: "Successfully Delete Header !",
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
          refetchStudentPortal()
          setLoading(false)
        }
      }
    };
  
    
    return {
        loading,
        studentPortalData,
        studentPortalLoaded,
        handelStudentPortalDelete,
    };
};

export default useStudentPortal;