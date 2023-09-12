import { useState } from "react";
import { deleteResultUrl, getResultUrl } from "../Utils/Urls/ResultUrl";
import { useQuery } from "@tanstack/react-query";

const useResult = () => {
  const [loadingResult, setloadingResult] = useState(false);
  const {
    data: resultData,
    isLoading: resultLoaded,
    refetch: refetchResult,
  } = useQuery({
    queryKey: ["resultData"],
    queryFn: async () => {
      const res = await fetch(getResultUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  const handelDeleteResult = async (id) => {
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
      setloadingResult(true);
      const res = await fetch(deleteResultUrl(id), {
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
          title: "Successfully Delete Result !",
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
        refetchResult();
        setloadingResult(false);
      }
    }
  };

  return {
    loadingResult,
    handelDeleteResult,
    resultData,
    resultLoaded,
    refetchResult

  };
};

export default useResult;
