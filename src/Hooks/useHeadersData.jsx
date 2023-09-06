import { useQuery } from "@tanstack/react-query";
import React from "react";
import { deleteHeaderUrl, getHeaderUrl } from "../Utils/Urls/HeaderUrl";
import Swal from "sweetalert2";

const useHeadersData = () => {
  const {
    data: headersData,
    isLoading: headerLoaded,
    refetch: refetchHeader,
  } = useQuery({
    queryKey: ["headersData"],
    queryFn: async () => {
      const res = await fetch(getHeaderUrl);
      const data = await res.json();
      return data.data;
    },
  });

  const handelDelete = async (id) => {
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
      const res = await fetch(deleteHeaderUrl(id), {
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
        fetchProducts(true);
      }
    }
  };


  return {
    headersData,
    headerLoaded,
    refetchHeader,
    handelDelete
  };
};

export default useHeadersData;
