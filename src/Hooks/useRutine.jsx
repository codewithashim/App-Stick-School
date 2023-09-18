import { useState } from "react";
import { deleteRutineUrl, getRutineUrl } from "../Utils/Urls/RutineUrl";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const useRutine = () => {
  const [loadingRutine, setloadingRutine] = useState(false);
  const {
    data: RutineData,
    isLoading: RutineLoaded,
    refetch: refetchRutine,
  } = useQuery({
    queryKey: ["RutineData"],
    queryFn: async () => {
      const res = await fetch(getRutineUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  const handelDeleteRutine = async (id) => {
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
      setloadingRutine(true);
      const res = await fetch(deleteRutineUrl(id), {
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
          title: "Successfully Delete Rutine !",
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
        refetchRutine();
        setloadingRutine(false);
      }
    }
  };

  return {
    loadingRutine,
    handelDeleteRutine,
    RutineData,
    RutineLoaded,
    refetchRutine

  };
};

export default useRutine;
