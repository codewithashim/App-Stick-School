import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { deleteStaffUrl, getStaffUrl } from "../Utils/Urls/StaffUrl";
import Swal from "sweetalert2";

const useStaff = () => {
  const [loading, setLoading]=useState(false) 
  const {
    data: staffData,
    isLoading: staffLoaded,
    refetch: refetchStaff,
  } = useQuery({
    queryKey: ["staffData"],
    queryFn: async () => {
      const res = await fetch(getStaffUrl);
      const data = await res.json();
      return data.data;
    },
  });

  const handelDeleteStaff = async (id) => {
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
      const res = await fetch(deleteStaffUrl(id), {
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
          title: "Successfully Delete Staff !",
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
        refetchStaff()
        setLoading(false)
      }
    }
  };

  return {
    staffData,
    staffLoaded,
    refetchStaff,
    handelDeleteStaff,
    loading
  };
};

export default useStaff;
