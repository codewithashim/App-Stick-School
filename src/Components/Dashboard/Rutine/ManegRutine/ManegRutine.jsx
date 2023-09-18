import useRutine from "@/src/Hooks/useRutine";
import React from "react";
import ManegRutineCard from "./ManegRutineCard";

const ManegRutineComponent = () => {
  const { RutineData } = useRutine();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Rutine</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {RutineData &&
          RutineData?.length &&
          RutineData?.map((Rutine) => {
            return <ManegRutineCard key={Rutine?._id} Rutine={Rutine} />;
          })}
      </div>
    </section>
  );
};

export default ManegRutineComponent;
