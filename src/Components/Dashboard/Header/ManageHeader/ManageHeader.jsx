import React from "react";
import ManageHeaderCard from "./ManageHeaderCard";
import useHeadersData from "@/src/Hooks/useHeadersData";

const ManageHeaderComponent = () => {
  const { headersData } = useHeadersData();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Header</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {headersData &&
          headersData?.length &&
          headersData?.map((header) => {
            return <ManageHeaderCard key={header?._id} header={header} />;
          })}
      </div>
    </section>
  );
};

export default ManageHeaderComponent;
