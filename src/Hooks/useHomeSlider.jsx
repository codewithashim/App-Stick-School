import React, { useState } from "react";
import { deleteHomesliderUrl, getHomesliderUrl } from "../Utils/Urls/HomeSliderUrl";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const useHomeSlider = () => {
  const [loadingHomeSlider, setloadingHomeSlider] = useState(false);
  const {
    data: homeSliderData,
    isLoading: homeSliderLoaded,
    refetch: refetchHomeSlider,
  } = useQuery({
    queryKey: ["homeSliderData"],
    queryFn: async () => {
      const res = await fetch(getHomesliderUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  const handelDeleteHomeSlider = async (id) => {
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
        setloadingHomeSlider(true);
      const res = await fetch(deleteHomesliderUrl(id), {
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
          title: "Successfully Delete homeSlider !",
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
        refetchHomeSlider();
        setloadingHomeSlider(false);
      }
    }
  };

  return {
    handelDeleteHomeSlider,
    loadingHomeSlider,
    homeSliderData,
    homeSliderLoaded,
    refetchHomeSlider,
  };
};

export default useHomeSlider;
