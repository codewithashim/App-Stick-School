import useSylebus from "@/src/Hooks/useSylebus";
import React from "react";
import ManegSylebusCard from "./ManegSylebusCard";

const ManegSylebusComponent = () => {
  const { SylebusData } = useSylebus();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Sylebus</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {SylebusData &&
          SylebusData?.length &&
          SylebusData?.map((Sylebus) => {
            return <ManegSylebusCard key={Sylebus?._id} Sylebus={Sylebus} />;
          })}
      </div>
    </section>
  );
};

export default ManegSylebusComponent;
