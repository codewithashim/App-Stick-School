import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { deleteNoticeUrl, getNoticeUrl } from '../Utils/Urls/NoticeUrl';

const useNotice = () => {
    const [loadingNotice, setloadingNotice] = useState(false);
    const {
      data: noticeData,
      isLoading: noticeLoaded,
      refetch: refetchNotice,
    } = useQuery({
      queryKey: ["noticeData"],
      queryFn: async () => {
        const res = await fetch(getNoticeUrl);
        const data = await res.json();
        return data?.data;
      },
    });
  
    const handelDeleteNotice = async (id) => {
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
        setloadingNotice(true);
        const res = await fetch(deleteNoticeUrl(id), {
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
            title: "Successfully Delete Notice !",
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
          refetchNotice();
          setloadingNotice(false);
        }
      }
    }; 

    return {
        loadingNotice,
        noticeData,
        noticeLoaded,
        refetchNotice,
        handelDeleteNotice
    };
};

export default useNotice;