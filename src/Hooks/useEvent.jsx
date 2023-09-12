import React, { useState } from 'react';
import { deleteEventUrl, getEventUrl } from '../Utils/Urls/EventsUrl';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const useEvent = () => {
    const [loadingEvent, setloadingEvent] = useState(false);
  const {
    data: eventData,
    isLoading: eventLoaded,
    refetch: refetchEvent,
  } = useQuery({
    queryKey: ["eventData"],
    queryFn: async () => {
      const res = await fetch(getEventUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  const handelDeleteEvent = async (id) => {
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
      setloadingEvent(true);
      const res = await fetch(deleteEventUrl(id), {
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
          title: "Successfully Delete Event !",
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
        refetchEvent();
        setloadingEvent(false);
      }
    }
  }; 
    return {
        handelDeleteEvent,
        loadingEvent,
        eventLoaded,
        eventData,
        refetchEvent
    };
};

export default useEvent;