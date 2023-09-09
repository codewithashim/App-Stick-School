import React from "react";
import useStaff from "@/src/Hooks/useStaff";
import ManegStaffCard from "./ManegStaffCard";

const ManegStaff = () => {
    const { staffData } = useStaff() 

    return (
      <section>
        <h2 className="py-4 text-2xl font-bold ">Manage Staff</h2>
  
        <div className="grid items-center justify-center gap-4 md:grid-cols-3">
          {staffData &&
            staffData?.length &&
            staffData?.map((Staff) => {
              return <ManegStaffCard key={Staff?._id} Staff={Staff} />;
            })}
        </div>
      </section>
    );
};

export default ManegStaff;