import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {
  deleteAlbumUrl,
  deletePhotogelaryUrl,
  getAlbumUrl,
  getPhotogelaryUrl,
} from "../Utils/Urls/PhotoGelaryUrl";

const usePhotoGelary = () => {
  const [loadingPhotoGelary, setloadingPhotoGelary] = useState(false);

  const {
    data: PhotoGelaryData,
    isLoading: PhotoGelaryLoaded,
    refetch: refetchPhotoGelary,
  } = useQuery({
    queryKey: ["PhotoGelaryData"],
    queryFn: async () => {
      const res = await fetch(getPhotogelaryUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  const handelDeletePhotoGelary = async (id) => {
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
      setloadingPhotoGelary(true);
      const res = await fetch(deletePhotogelaryUrl(id), {
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
          title: "Successfully Delete PhotoGelary !",
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
        refetchPhotoGelary();
        setloadingPhotoGelary(false);
      }
    }
  };

  const {
    data: albumData,
    isLoading: albumLoaded,
    refetch: refetchAlbum,
  } = useQuery({
    queryKey: ["albumData"],
    queryFn: async () => {
      const res = await fetch(getAlbumUrl);
      const data = await res.json();
      return data?.data;
    },
  });



  const handelAlbumDelete = async (id) => {
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
      setloadingPhotoGelary(true);
      const res = await fetch(deleteAlbumUrl(id), {
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
          title: "Successfully Delete PhotoGelary !",
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
        refetchPhotoGelary();
        setloadingPhotoGelary(false);
      }
    }
  };

  return {
    PhotoGelaryData,
    PhotoGelaryLoaded,
    handelDeletePhotoGelary,
    loadingPhotoGelary,

    handelAlbumDelete,
    albumData,
    albumLoaded,
    refetchAlbum,
  };
};

export default usePhotoGelary;
