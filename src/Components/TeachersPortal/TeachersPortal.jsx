import useTeachersData from "@/src/Hooks/useTeachersData";
import React from "react";

const TeachersPortal = () => {
  const{teacherData} = useTeachersData() 

  return (
    <section>
      <div className="grid gap-6 md:grid-cols-4 teacher-portal-container">
        {teacherData?.map((teacher) => {
          return (
            <div className="max-w-sm my-4 overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="object-cover object-center w-full h-56"
                src={teacher.image}
                alt="avatar"
              />
              <div className="px-6 py-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {teacher?.name}
                </h1>
                <p className="py-2 text-lg font-semibold text-gray-700">
                  {teacher?.position}
                </p>
                <p className="py-2 text-lg text-gray-700">
                 {
                  teacher?.detail
                 }
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeachersPortal;
