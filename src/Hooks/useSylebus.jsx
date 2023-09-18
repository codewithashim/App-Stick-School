import { useState } from "react";
import { deleteSylebusUrl, getSylebusUrl } from "../Utils/Urls/SylebusUrl";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const useSylebus = () => {
  const [loadingSylebus, setloadingSylebus] = useState(false);
  const {
    data: SylebusData,
    isLoading: SylebusLoaded,
    refetch: refetchSylebus,
  } = useQuery({
    queryKey: ["SylebusData"],
    queryFn: async () => {
      const res = await fetch(getSylebusUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  const handelDeleteSylebus = async (id) => {
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
      setloadingSylebus(true);
      const res = await fetch(deleteSylebusUrl(id), {
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
          title: "Successfully Delete Sylebus !",
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
        refetchSylebus();
        setloadingSylebus(false);
      }
    }
  };

  return {
    loadingSylebus,
    handelDeleteSylebus,
    SylebusData,
    SylebusLoaded,
    refetchSylebus

  };
};

export default useSylebus;
