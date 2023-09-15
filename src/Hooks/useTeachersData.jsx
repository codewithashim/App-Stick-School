import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  deleteMessageUrl,
  deleteTeacherUrl,
  getMessagesUrl,
  getTeacherUrl,
} from "../Utils/Urls/TeacherUrl";

const useTeachersData = () => {
  const [loading, setLoading] = useState(false);
  const {
    data: teacherData,
    isLoading: teacherLoaded,
    refetch: refetchTeacher,
  } = useQuery({
    queryKey: ["teacherData"],
    queryFn: async () => {
      const res = await fetch(getTeacherUrl);
      const data = await res.json();
      return data.data;
    },
  });

  const {
    data: messageData,
    isLoading: messageLoaded,
    refetch: refetchMessage,
  } = useQuery({
    queryKey: ["messageData"],
    queryFn: async () => {
      const res = await fetch(getMessagesUrl);
      const data = await res.json();
      return data.data;
    },
  });

  const handelDeleteTeacher = async (id) => {
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
      setLoading(true);
      const res = await fetch(deleteTeacherUrl(id), {
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
          title: "Successfully Delete Teacher !",
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
        setLoading(false);
        refetchTeacher();
      }
    }
  };

  const handelDeleteMessage = async (id) => {
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
      setLoading(true);
      const res = await fetch(deleteMessageUrl(id), {
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
          title: "Successfully Delete Teacher !",
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
        setLoading(false);
        refetchMessage();
      }
    }
  };

  return {
    handelDeleteTeacher,
    teacherData,
    teacherLoaded,
    refetchTeacher,
    loading,

    messageData,
    handelDeleteMessage,
    messageLoaded,
  };
};

export default useTeachersData;
