import React, { useState } from "react";
import {
  deleteStatisticUrl,
  getStatisticUrl,
} from "../Utils/Urls/StatisticUrl";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const useStatistic = () => {
  const [loadingStatistic, setloadingStatistic] = useState(false);
  const {
    data: statisticData,
    isLoading: statisticLoaded,
    refetch: refetchStatistic,
  } = useQuery({
    queryKey: ["statisticData"],
    queryFn: async () => {
      const res = await fetch(getStatisticUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  const handelDeleteStatistic = async (id) => {
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
      setloadingStatistic(true);
      const res = await fetch(deleteStatisticUrl(id), {
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
          title: "Successfully Delete Statistic !",
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
        refetchStatistic();
        setloadingStatistic(false);
      }
    }
  };

  return {
    statisticData,
    statisticLoaded,
    refetchStatistic,
    loadingStatistic,
    handelDeleteStatistic
  };
};

export default useStatistic;
