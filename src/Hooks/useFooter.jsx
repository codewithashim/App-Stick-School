import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import { deleteFooterLink, deleteFooterUrl, getFooterLink, getFooterUrl } from "../Utils/Urls/FooterUrl";

const useFooter = () => {
  const [loading, setLoading] = useState(false)
  const {
    data: footerData,
    isLoading: footerLoaded,
    refetch: refetchFooter,
  } = useQuery({
    queryKey: ["footerData"],
    queryFn: async () => {
      const res = await fetch(getFooterUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  const {
    data: linkData,
    isLoading: linkLoaded,
    refetch: refetchLink,
  } = useQuery({
    queryKey: ["linkData"],
    queryFn: async () => {
      const res = await fetch(getFooterLink);
      const data = await res.json();
      return data?.data;
    },
  });

  const handelLinkDelete = async (id) => {
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
      setLoading(true)
      const res = await fetch(deleteFooterLink(id), {
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
        refetchLink()
        setLoading(false)
      }
    }
  };

  const handelFooterDelete = async (id) => {
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
      setLoading(true)
      const res = await fetch(deleteFooterUrl(id), {
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
        refetchFooter()
        setLoading(false)
      }
    }
  };

    
    return {
        handelFooterDelete,
        loading,
        footerData,
        footerLoaded,
        refetchFooter,

        handelLinkDelete,
        linkData,
        refetchLink
    };
};

export default useFooter;