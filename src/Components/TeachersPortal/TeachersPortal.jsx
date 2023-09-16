import useTeachersData from "@/src/Hooks/useTeachersData";
import React from "react";
import Link from "next/link";

const TeachersPortal = () => {
  const{teacherData} = useTeachersData() 

  return (
    <section>
      <div className="grid gap-6 md:grid-cols-4 teacher-portal-container">
        {teacherData?.map((teacher) => {
          const { _id } = teacher;
          return (
            <Link href={`/teachers/${_id}`}>
            <div className="max-w-sm my-4 overflow-hidden bg-white rounded-lg shadow-lg"
              key={teacher?._id}
            >
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TeachersPortal;
