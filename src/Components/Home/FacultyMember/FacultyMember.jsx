import React from "react";
import useTeachersData from "@/src/Hooks/useTeachersData";
import Link from "next/link";
const FacultyMember = () => {
  const { teacherData } = useTeachersData();

  return (
    <section className="container rounded home-faculty-section">
      <div className="grid items-center w-full gap-4 md:grid-cols-4">
        {teacherData?.slice(0, 10).map((teacher) => {
          return (
            <Link href={`/teachers/${teacher._id}`}>
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
              </div>
            </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center my-2 morebutton">
        <Link href="/teachers" className="text-center commonBtn">
          {" "}
          More..
        </Link>
      </div>
    </section>
  );
};

export default FacultyMember;
