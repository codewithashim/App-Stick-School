import React from "react";
import useTeachersData from "@/src/Hooks/useTeachersData";
import ManageTeacherCard from "./ManageTeacherCard";

const ManageTeacherComponent = () => {
  const { teacherData } = useTeachersData() 

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Teacher</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {teacherData &&
          teacherData?.length &&
          teacherData?.map((teacher) => {
            return <ManageTeacherCard key={teacher?._id} teacher={teacher} />;
          })}
      </div>
    </section>
  );
};

export default ManageTeacherComponent;
