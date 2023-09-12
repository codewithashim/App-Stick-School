import React from "react";
import ManegEventCard from "./ManegEventCard";
import useEvent from "@/src/Hooks/useEvent";

const ManegEventComponent = () => {
  const {  eventData } =useEvent();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Event</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {eventData &&
          eventData?.length &&
          eventData?.map((event) => {
            return <ManegEventCard key={event?._id} event={event} />;
          })}
      </div>
    </section>
  );
};

export default ManegEventComponent;
