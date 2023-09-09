import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  deleteCommitteeUrl,
  getCommitteeUrl,
} from "../Utils/Urls/CommitteeUrl";
import Swal from "sweetalert2";

const useCommittee = () => {
  const [loadingCommittte, setloadingCommittte] =  useState(false)
  const {
    data: committeeData,
    isLoading: committeeLoaded,
    refetch: refetchCommittee,
  } = useQuery({
    queryKey: ["committeeData"],
    queryFn: async () => {
      const res = await fetch(getCommitteeUrl);
      const data = await res.json();
      return data.data;
    },
  });

  const handelDeleteCommittee = async (id) => {
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
      setloadingCommittte(true)
      const res = await fetch(deleteCommitteeUrl(id), {
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
          title: "Successfully Delete Committee !",
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
        refetchCommittee()
        setloadingCommittte(false)
      }
    }
  };

  return {
    committeeData,
    committeeLoaded,
    refetchCommittee,
    handelDeleteCommittee,
    loadingCommittte
  };
};

export default useCommittee;
