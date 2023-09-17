import useFooter from "@/src/Hooks/useFooter";
import React from "react";
import ManageFooterCard from "./ManageFooterCard";

const ManageFooterComponent = () => {
  const { footerData ,refetchFooter} = useFooter();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Footer</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {footerData &&
          footerData?.length &&
          footerData?.map((footer) => {
            return <ManageFooterCard key={footer?._id} footer={footer} refetchFooter={refetchFooter} />;
          })}
      </div>
    </section>
  );
};

export default ManageFooterComponent;
